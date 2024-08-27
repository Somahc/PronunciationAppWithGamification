import React from 'react';

import style from './page.module.scss';

interface PhonemeBoxProps {
    phoneme: string | null;
}

const PhonemeBox: React.FC<PhonemeBoxProps> = ( { phoneme } ) => {
    return (
        <div className={style.phoneme_box}>
            {phoneme}
        </div>
    )
}

export default PhonemeBox;