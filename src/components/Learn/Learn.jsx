import React, { useState } from "react";
import style from './Learn.module.css';
import Slider from '../Slider/Slider'

function Learn() {
    const [learned, setLearned] = useState(0);
    const handleLearned = () => {
        setLearned(learned + 1);
    }

    const [repeate, setRepeate] = useState(0);
    const handleRepeate = () => {
        setRepeate(repeate + 1);
    }

    const [hard, setHard] = useState(0);
    const handleCountHard = () => {
        setHard(hard + 1);
    }


    return (
        <div>
            <Slider />
            <div className='result-block'>
                <button className='res' onClick={handleLearned}><img src='./images/heart.png' width='18px' />выучено {learned} </button>
                <button className='res' onClick={handleRepeate}><img src='./images/refresh.png' width='18px' />повторить {repeate}</button>
                <button className='res' onClick={handleCountHard}><img src='./images/cross-circle.png' width='18px' />сложные {hard}</button>
            </div>
        </div>

    )
}

export default Learn;