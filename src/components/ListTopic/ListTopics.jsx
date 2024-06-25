import React from "react";
import CardTopic from '../CardTopic/CardTopic';
import style from './ListTopic.module.css';

function ListTopics(allWords) {

    // let currentWords = [];

    // const handleClick = (topic) => {
    //     allWords.forEach(words => {
    //         if (topic === words.topic) {
    //             currentWords = currentWords.push(words);
    //             console.log(currentWords);
    //             return currentWords;
    //         }
    //     });
    // }

    return (
        <div className={style.container}>
            {/* <div className={style.card__body}></div> */}
            <div className={style.topics}>
                <CardTopic topic="География" />
                <CardTopic topic="Магазин" />
                <CardTopic topic="Хобби и увлечения" />
                <CardTopic topic="Больница" />
                <CardTopic topic="Кафе и ресторан" />
                <CardTopic topic="Транспорт" />
                <CardTopic topic="Семья" />
                <CardTopic topic="Работа" />
                <CardTopic topic="IT - Словарь" />
                <CardTopic topic="Природа" />
            </div>
        </div>
    );
}

export default ListTopics