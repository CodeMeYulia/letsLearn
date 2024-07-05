import React from "react";
import Card from '../Card';
import style from './CardTopic.module.css';

const CardTopic = ({ tags, handleClick }) => {
    return (
        <div className={style.topic_card}>
            <a href="#"
                onClick={handleClick}
                className={style.tocard}>{tags}</a>
        </div>
    );
}

export default CardTopic;

