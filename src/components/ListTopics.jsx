import React from "react";
import CardTopic from '../components/CardTopic';

function ListTopics() {
    return (
        <div>
            <h1 className="title">Выбрать тему для повторения</h1>
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
            </div>
        </div>
    );
}

export default ListTopics