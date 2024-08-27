import PhonemeBox from "./PhonemeBox";

import React from 'react';

import style from './page.module.scss';
import { PronunciationFeedback } from "@/app/lib/types/PronunciationFeedback";

interface PronunciationDisplayProps {
    pronunciation: PronunciationFeedback[];
}

const PronunciationDisplay: React.FC<PronunciationDisplayProps> = ( { pronunciation } ) => {
    const boxes = Array(12).fill(null);

    return (
        <div className={style.pronunciation_container}>
            {boxes.map((_, i) => (
                <PhonemeBox phoneme={pronunciation[i]?.phoneme || ''} isCorrect={pronunciation[i]?.isCorrect} key={i} />
            ))}
        </div>
    )
}

export default PronunciationDisplay;