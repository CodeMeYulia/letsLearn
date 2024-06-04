import React, { useRef, useEffect } from "react";

function Card(item, isShowTranslation, onShowTranslation) {

    const handleChange = () => {
        onShowTranslation(!isShowTranslation);
    }

    const btnRef = useRef(null);

    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.focus();
        }
    }, []);

    if (isShowTranslation === true) {
        return (
            <div className="card-item" onClick={handleChange}>
                <div className="word">{item.word}</div>
                <div className="transcription" >{item.transcription}</div>
                <button className="reverse" ref={btnRef} >перевод</button>
            </div>
        );
    } else {
        //отображаем карточку с переводом и картинкой
        return (
            <div className="card-item2" onClick={handleChange}>
                <div className="translation">{item.translation}</div>
                <div className="word2">{item.word}</div>
            </div>
        );
    }
}

export default Card;