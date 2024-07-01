import React from "react";
import { observer } from 'mobx-react';
import CardTopic from '../CardTopic/CardTopic';
import style from './ListTopic.module.css';
import wordsStore from "../../stores/wordsStore";

const ListTopics = observer(() => {
    const { words } = wordsStore;
    let currentWords = [];

    const handlePickTopic = (tags) => {
        // console.log('mao')
        words.forEach(word => {
            if (tags === words.tags) {
                currentWords = currentWords.push(word);
                console.log(currentWords);
                return currentWords;
            }
        });
    }

    return (
        <div className={style.container}>
            {/* <div className={style.card__body}></div> */}
            <div className={style.topics}>
                <CardTopic tags="География" handleClick={handlePickTopic} />
                <CardTopic tags="Магазин" />
                <CardTopic tags="Хобби и увлечения" />
                <CardTopic tags="Больница" />
                <CardTopic tags="Кафе и ресторан" />
                <CardTopic tags="Транспорт" />
                <CardTopic tags="Семья" />
                <CardTopic tags="Работа" />
                <CardTopic tags="IT - Словарь" />
                <CardTopic tags="Природа" />
            </div>
        </div>
    );
}

)
export default ListTopics