import React, { useRef, useEffect } from "react";

function Card(item) {

    const isShowTranslation = item.isShowTranslation;
    const onShowTranslation = item.onShowTranslation;

    const handleChange = () => {

        onShowTranslation(!isShowTranslation);
    }

    const btnRef = useRef(null);

    useEffect(() => {
        if (btnRef.current) {
            btnRef.current.focus();
        }
    }, []);

    console.log(isShowTranslation);

    if (isShowTranslation === true) {
        return (
            <div className="card-item" onClick={handleChange}>
                <div className="word">{item.english}</div>
                <div className="transcription" >{item.transcription}</div>
                <button className="reverse" ref={btnRef} >перевод</button>
            </div>
        );
    } else {
        //отображаем карточку с переводом и картинкой
        return (
            <div className="card-item2" onClick={handleChange}>
                <div className="translation">{item.russian}</div>
                <div className="word2">{item.english}</div>
            </div>
        );
    }
}

export default Card;