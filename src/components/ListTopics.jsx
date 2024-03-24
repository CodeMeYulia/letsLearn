import React from "react";
import CardTopic from '../components/CardTopic';
import Card from "../components/Card";

function ListTopics() {
    return (
        <div class>
            <h1 className="title">Выбрать тему для повторения</h1>
            <div className="card__body"></div>
            <div className="topics">
                <CardTopic topic="География" />
                <CardTopic topic="Магазин" />
                <CardTopic topic="Хобби и увлечения" />
                <CardTopic topic="Больница" />
                <CardTopic topic="Кафе и ресторан" />
                <CardTopic topic="Транспорт" />
                <CardTopic topic="Семья" />
                <CardTopic topic="Работа" />
                <CardTopic topic="IT - Словарь" />
                {/* <Card /> */}
            </div>
        </div>
    );
}

export default ListTopics