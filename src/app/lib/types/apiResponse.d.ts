export type apiResponse = {
    status: {
        result: string;
        desc: string;
    }
    recogStatus: string;
    reason: string;
    corrPhonSym: [];
    fmtCorrPhonSym: [];
    recogPhonSym: [];
    recogErrata: [];
    lexiconId: string;
    deviceType: string;
    userId: string;
    context: {
        nota1: number;
        nota2: number;
        diff1: number;
        diff2: number;
    }
}