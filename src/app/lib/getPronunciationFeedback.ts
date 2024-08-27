import { PronunciationFeedback } from "./types/PronunciationFeedback";

export const getPronunciationFeedback = (
    IPAFeedback: string[],
    recogEratta: string[]
): PronunciationFeedback[] => {
    return IPAFeedback.map((phoneme, index) => ({
        phoneme: phoneme,
        isCorrect: recogEratta[index] === "YES"
    }));
}