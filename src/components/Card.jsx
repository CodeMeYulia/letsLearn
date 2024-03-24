import React from "react";

function Card(item) {
    return (
        <div className="card-item">
            <div className="lang">{item.lang}</div>
            <div className="word">{item.word}</div>
            <div className="transcription">{item.transcription}</div>
            <button className="reverse">upside</button>
        </div>
    );
}

export default Card; 