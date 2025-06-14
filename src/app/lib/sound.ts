import { Howl } from 'howler';

export class Sound {

    public sheAudio: Howl;

    // lesson 1
    public seeSaySueThis: Howl;
    public see: Howl;
    public cease: Howl;

    // lesson 2
    public sheShowCashPush: Howl;
    public show: Howl;
    public cash: Howl;

    // lesson 3
    public thinThighThingThanks: Howl;
    public thin: Howl;
    public thigh: Howl;

    // lesson 4
    public fanFiftyHalfPuff: Howl;
    public fan: Howl;
    public fifty: Howl;

    // lesson 5
    public lowLookLikeHelp: Howl;
    public like: Howl;
    public help: Howl;

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

        // lesson 1
        this.seeSaySueThis = new Howl({
            src: ['/assets/lesson_audio/seeSaySueThis.mp3'],
            loop: false,
        })

        this.see = new Howl({
            src: ['/assets/lesson_audio/see.mp3'],
            loop: false,
        })

        this.cease = new Howl({
            src: ['/assets/lesson_audio/cease.mp3'],
            loop: false,
        })

        // lesson 2
        this.sheShowCashPush = new Howl({
            src: ['/assets/lesson_audio/sheShowCashPush.mp3'],
            loop: false,
        })

        this.show = new Howl({
            src: ['/assets/lesson_audio/show.mp3'],
            loop: false,
        })

        this.cash = new Howl({
            src: ['/assets/lesson_audio/cash.mp3'],
            loop: false,
        })

        // lesson 3
        this.thinThighThingThanks = new Howl({
            src: ['/assets/lesson_audio/thinThighThingThanks.mp3'],
            loop: false,
        })

        this.thin = new Howl({
            src: ['/assets/lesson_audio/thin.mp3'],
            loop: false,
        })

        this.thigh = new Howl({
            src: ['/assets/lesson_audio/thigh.mp3'],
            loop: false,
        })

        // lesson 4
        this.fanFiftyHalfPuff = new Howl({
            src: ['/assets/lesson_audio/fanFiftyHalfPuff.mp3'],
            loop: false,
        })

        this.fan = new Howl({
            src: ['/assets/lesson_audio/fan.mp3'],
            loop: false,
        })

        this.fifty = new Howl({
            src: ['/assets/lesson_audio/fifty.mp3'],
            loop: false,
        })


        // lesson 5
        this.lowLookLikeHelp = new Howl({
            src: ['/assets/lesson_audio/lowLookLikeHelp.mp3'],
            loop: false,
        })

        this.like = new Howl({
            src: ['/assets/lesson_audio/like.mp3'],
            loop: false,
        })

        this.help = new Howl({
            src: ['/assets/lesson_audio/help.mp3'],
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