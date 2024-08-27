export const blobToBase = async (audioBlob: Blob): Promise<String> => {
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioContext = new window.AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // リサンプリング
    const offlineContext = new OfflineAudioContext(1, audioBuffer.duration * 16000, 16000);
    const source = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineContext.destination);
    source.start();
    const resampled = await offlineContext.startRendering();

    // WAV形式に変換
    const wavBuffer = audioBufferToWav(resampled);

    // Base64エンコード
    const base64 = btoa(String.fromCharCode.apply(null,[...new Uint8Array(wavBuffer)]));
    // console.log(base64.slice(0, 50) + '...');
    
    return base64;
}

function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;

    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;

    const wavBuffer = new ArrayBuffer(44 + buffer.length * bytesPerSample);
    const view = new DataView(wavBuffer);

    /* RIFF identifier */
    writeString(view, 0, 'RIFF');
    /* RIFF chunk length */
    view.setUint32(4, 36 + buffer.length * bytesPerSample, true);
    /* RIFF type */
    writeString(view, 8, 'WAVE');
    /* format chunk identifier */
    writeString(view, 12, 'fmt ');
    /* format chunk length */
    view.setUint32(16, 16, true);
    /* sample format (raw) */
    view.setUint16(20, format, true);
    /* channel count */
    view.setUint16(22, numChannels, true);
    /* sample rate */
    view.setUint32(24, sampleRate, true);
    /* byte rate (sample rate * block align) */
    view.setUint32(28, sampleRate * blockAlign, true);
    /* block align (channel count * bytes per sample) */
    view.setUint16(32, blockAlign, true);
    /* bits per sample */
    view.setUint16(34, bitDepth, true);
    /* data chunk identifier */
    writeString(view, 36, 'data');
    /* data chunk length */
    view.setUint32(40, buffer.length * bytesPerSample, true);

    const samples = new Float32Array(buffer.length);
    const channelData = buffer.getChannelData(0);
    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
        const sample = Math.max(-1, Math.min(1, channelData[i]));
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
    }

    return wavBuffer;
}

function writeString(view: DataView, offset: number, string: string): void {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }   
}