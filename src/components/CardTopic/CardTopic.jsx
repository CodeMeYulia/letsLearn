import React from "react";
import Card from '../Card';
import style from './CardTopic.module.css';

const CardTopic = ({ topic }) => {
    return (
        <div className={style.topic_card}>
            <a href="#"
                // onClick={handleClick} 
                className={style.tocard}>{topic}</a>
        </div>
    );
}

export default CardTopic;