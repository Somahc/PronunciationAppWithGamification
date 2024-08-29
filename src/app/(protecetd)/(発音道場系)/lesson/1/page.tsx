"use client"

import { useSession } from "next-auth/react";
import { useState, useRef } from "react";

import { Worldbet } from "@/app/lib/cnvWorldbetToIPA";

import { PronunciationFeedback } from "@/app/lib/types/PronunciationFeedback";

import style from "./page.module.scss";
import Image from "next/image";
import PronunciationDisplay from "@/app/components/PronunciationDisplay";

import { blobToBase } from "@/app/lib/blobToBase";
import { getFeedback } from "@/app/lib/getFeedback";
import { getPronunciationFeedback } from "@/app/lib/getPronunciationFeedback";

export default function Page() {
  const { data: session } = useSession();
  const [page, setPage] = useState(0);
  const [targetWord, setTargetWord] = useState<string>("shell");
  const [responsePronunciation, setResponsePronunciation] = useState<PronunciationFeedback[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sheAudio = new Audio("/assets/lesson_audio/she.mp3");

  const startRecording = async(): Promise<void> => {
    if (!session) return;

    setError(null);

    try {
      setIsRecording(true);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event: BlobEvent) => {
        audioChunks.current.push(event.data);
      };
      mediaRecorder.current.start();
      mediaRecorder.current.onstop = async() => {
        try {

          setIsProcessing(true);
  
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
  
          const base64Audio = await blobToBase(audioBlob);
          const feedback = await getFeedback(base64Audio, targetWord, session.user.id);
  
          console.log("フィードバック", feedback);
  
          const IPAFeedback = Worldbet.cnvWorldbetToIPA(feedback.fmtCorrPhonSym);
          
          const PronunciationFeedback = getPronunciationFeedback(IPAFeedback, feedback.recogErrata);
  
          setResponsePronunciation(PronunciationFeedback);
  
        } catch (err) {
          console.error('録音の処理に失敗:', err);
          setError('録音の処理に失敗しました。');
        } finally {
          setIsRecording(false);
          setIsProcessing(false);
        }

      }
    } catch (err) {
      console.error('録音の開始に失敗:', err);
      setError('録音に失敗しました。ブラウザ上でマイクの使用が許可されているか確認してください。');
    }
  }

  const stopRecording = async(): Promise<void> => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
    setIsRecording(false);
  };

  const playShe = () => {
    sheAudio.play(); 
  }

  if (session) {
    return (
      <div className={style.inner}>
        <div className={style.center}>
          <div className={style.lesson_title}>lesson 1 /ʃ/と/s/</div>

          <section>
            {page === 0 && 
              <div>
                {/* <h2>Page 0</h2> */}
                <div>SheとSeeの発音の違いを説明できますか？</div>
                <div>今回は/ʃ/と/s/の発音を練習してみましょう！</div>
                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
              </div>
            }
            {page === 1 && 
              <div>
                <div className={style.section_ttl}>動画で概要を確認してみましょう！</div>
                <div className={style.youtube_video}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CYXyJ5QC_rY?si=s7RaN07EuUayc7bY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }
            {page === 2 && 
              <div>
                <div className={style.section_ttl}>
                  /ʃ/の発音
                </div>

                <div>
                  /ʃ/は”sh”の音。小声で「しーっ！静かに！」と注意する時の音に似ています。
                  <br />
                  舌の前半分を口の天井に近づけて強く息を出して発音します。下顎を少し前に出すのがコツ。
                </div>

                <figure className={style.sh_img}>
                  <Image src="/assets/lesson_img/sh.png" width={150} height={193} alt="sh"/>
                </figure>

                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }

            {page === 3 &&
              <div>
                <div className={style.section_ttl}>
                  Shellを発音してみよう！
                </div>

                <button className={style.audio_btn} onClick={playShe}>
                  <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
                </button>

                {/* <PronunciationDisplay pronunciation={Worldbet.cnvWorldbetToIPA(['S', 'E', 'l'])}/> */}
                <PronunciationDisplay pronunciation={responsePronunciation} />

                <button onClick={isRecording ? stopRecording : startRecording}>
                  {isRecording ? '録音停止' : '録音スタート'}<br />
                  {isProcessing && '...処理中'}<br />
                  {error && `エラー: ${error}`}
                </button>

                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }

            {page === 4 &&
              <div>
                <div className={style.section_ttl}>
                  レッスン/ʃ/と/s/　完了！
                </div>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }
          </section>

        </div>
      </div>
    )
  }
}