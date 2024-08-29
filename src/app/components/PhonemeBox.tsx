import React from 'react';
import classNames from 'classnames';

interface PhonemeBoxProps {
    phoneme: string | null;
    isCorrect?: boolean;
}

const PhonemeBox: React.FC<PhonemeBoxProps> = ({ phoneme, isCorrect }) => {
    return (
        <div className={classNames(
            'w-[25px] h-[60px]', // 幅と高さ
            'border border-black', // ボーダー
            'flex justify-center items-center', // フレックスボックスと中央揃え
            'text-lg', // フォントサイズ
            'mr-[5px] mb-[5px]', // マージン
            {
                'bg-white': isCorrect === null || isCorrect === undefined,
                'bg-green-500': isCorrect === true,
                'bg-red-500': isCorrect === false,
            }
        )}>
            {phoneme}
        </div>
    )
}

export default PhonemeBox;