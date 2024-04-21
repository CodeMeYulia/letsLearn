import React from "react";
import CardTopic from '../CardTopic/CardTopic';
import Card from "../Card";
import style from './ListTopic.module.css';

function ListTopics() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Выбрать тему для повторения</h1>
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