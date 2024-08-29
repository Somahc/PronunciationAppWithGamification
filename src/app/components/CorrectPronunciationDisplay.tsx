import PhonemeBox from "./PhonemeBox";

import React from 'react';

import style from './page.module.scss';

interface PronunciationDisplayProps {
    pronunciation: string[];
}

const CorrectPronunciationDisplay: React.FC<PronunciationDisplayProps> = ( { pronunciation } ) => {
    const boxes = Array(12).fill(null);

    return (
        <div className={style.pronunciation_container}>
            {boxes.map((_, i) => (
                <PhonemeBox phoneme={pronunciation[i] || ''} key={i} />
            ))}
        </div>
    )
}

export default CorrectPronunciationDisplay;