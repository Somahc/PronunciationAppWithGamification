import { Howl } from 'howler';

export class Sound {

    public sheAudio: Howl;

    // lesson 6
    public catBatHatFat: Howl;
    public bat: Howl;
    public camp: Howl;

    // lesson 7
    public bodyBoxGodHotAudio: Howl;
    public hotAudio: Howl;
    public bodyAudio: Howl;

    // lesson 8
    public cutCupHutLuckAudio: Howl;
    public cutAudio: Howl;
    public luckAudio: Howl;

    // lesson 9
    public lawBallWalkBought: Howl;
    public law: Howl;
    public walk: Howl;

    // lesson 10
    public herBirdEarlyFirst: Howl;
    public bird: Howl;
    public first: Howl;

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

        // lesson 8
        this.cutCupHutLuckAudio = new Howl({
            src: ['/assets/lesson_audio/cutCupHutLuck.mp3'],
            loop: false,
        })

        this.cutAudio = new Howl({
            src: ['/assets/lesson_audio/cut.mp3'],
            loop: false,
        })

        this.luckAudio = new Howl({
            src: ['/assets/lesson_audio/luck.mp3'],
            loop: false,
        })

        // lesson 9
        this.lawBallWalkBought = new Howl({
            src: ['/assets/lesson_audio/lawBallWalkBought.mp3'],
            loop: false,
        })

        this.law = new Howl({
            src: ['/assets/lesson_audio/law.mp3'],
            loop: false,
        })

        this.walk = new Howl({
            src: ['/assets/lesson_audio/walk.mp3'],
            loop: false,
        })

        // lesson 10
        this.herBirdEarlyFirst = new Howl({
            src: ['/assets/lesson_audio/herBirdEarlyFirst.mp3'],
            loop: false,
        })

        this.bird = new Howl({
            src: ['/assets/lesson_audio/bird.mp3'],
            loop: false,
        })

        this.first = new Howl({
            src: ['/assets/lesson_audio/first.mp3'],
            loop: false,
        })

    }
}

export const sound = new Sound();