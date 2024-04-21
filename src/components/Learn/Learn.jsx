import React from "react";
import style from './Learn.module.css';
import Slider from '../Slider/Slider'

function Learn() {
    return (
        <div>
            <Slider />
            <div className='result-block'>
                <div className='res'><img src='./images/heart.png' width='18px' />выучено</div>
                <div className='res'><img src='./images/refresh.png' width='18px' />повторить</div>
                <div className='res'><img src='./images/cross-circle.png' width='18px' />не знаю</div>
            </div>
        </div>

    )
}

export default Learn;