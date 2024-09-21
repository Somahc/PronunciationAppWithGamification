import { Howl } from 'howler';

export class Sound {

    public sheAudio: Howl;

    public bodyBoxGodHotAudio: Howl;
    public hotAudio: Howl;
    public bodyAudio: Howl;

    constructor() {
        
        this.sheAudio = new Howl({
            src: ['/assets/lesson_audio/she.mp3'],
            loop: false,
        })

        this.bodyBoxGodHotAudio = new Howl({
            src: ['/assets/lesson_audio/bodyBoxGodHot.mp3'],
            loop: false,
        })

        this.hotAudio = new Howl({
            src: ['/assets/lesson_audio/hot.mp3'],
            loop: false,
        })

        this.bodyAudio = new Howl({
            src: ['/assets/lesson_audio/body.mp3'],
            loop: false,
        })


    }
}

export const sound = new Sound();