import React from 'react';
import classNames from 'classnames';
import PhonemeTooltip from './PhonemeTooltip';

interface PhonemeBoxProps {
    phoneme: string | null;
    isCorrect?: boolean;
}

const PhonemeBox: React.FC<PhonemeBoxProps> = ({ phoneme, isCorrect }) => {
    return (
        <div className='relative group'>
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
                {/* // ツールチップ */}
                <div className="absolute left-[110%] top-[10%] transform bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <PhonemeTooltip phoneme={phoneme} />
                </div>
            </div>

        </div>
    )
}

export default PhonemeBox;