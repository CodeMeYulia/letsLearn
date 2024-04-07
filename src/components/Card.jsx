import { useState } from "react";
import React from "react";

function Card(item) {
    const [base, setReversed] = useState(item.base || true);
    const handleChange = () => {
        setReversed(!base);
    }

    if (base === true) {
        return (
            <div className="card-item" onClick={handleChange}>
                <div className="word">{item.word}</div>
                <div className="transcription">{item.transcription}</div>
                <button className="reverse">upside</button>
            </div>
        );
    } else {
        //отображаем карточку с переводом и картинкой
        return (
            <div className="card-item2" onClick={handleChange}>
                <div className="translation">{item.translation}</div>
                <div className="word2">{item.word}</div>
                <div className="illustration">
                    вставить сюда картинку
                </div>
            </div>
        );
    }
}

export default Card; 