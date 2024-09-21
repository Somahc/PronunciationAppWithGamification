import { Howl } from 'howler';

export class Sound {

    public sheAudio: Howl;

    // lesson 6
    public catBatHatFat: Howl;
    public bat: Howl;
    public camp: Howl;

    public bodyBoxGodHotAudio: Howl;
    public hotAudio: Howl;
    public bodyAudio: Howl;

    constructor() {
        
        this.sheAudio = new Howl({
            src: ['/assets/lesson_audio/she.mp3'],
            loop: false,
        })

        // lesson 6
        this.catBatHatFat = new Howl({
            src: ['/assets/lesson_audio/catBatHatFat.mp3'],
            loop: false,
        })

        this.bat = new Howl({
            src: ['/assets/lesson_audio/bat.mp3'],
            loop: false,
        })

        this.camp = new Howl({
            src: ['/assets/lesson_audio/camp.mp3'],
            loop: false,
        })

        // lesson 7
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