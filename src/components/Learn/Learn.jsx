import React, { useState } from "react";
import { observer } from "mobx-react";
import Slider from '../Slider/Slider';

const Learn = observer(() => {
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
                <button className='res' onClick={handleLearned}><img src='./images/heart.png' width='18px' alt="heart" />выучено {learned} </button>
                <button className='res' onClick={handleRepeate}><img src='./images/refresh.png' width='18px' alt="cicle" />повторить {repeate}</button>
                <button className='res' onClick={handleCountHard}><img src='./images/cross-circle.png' width='18px' alt="cross" />сложные {hard}</button>
            </div>
        </div>
    )
}
)


export default Learn;

