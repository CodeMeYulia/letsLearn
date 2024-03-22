import React from "react";
import Card from './Card'

const CardTopic = ({ topic }) => {
    return (
        <button className="btnTheme">
            <div className="topic">{topic}</div>
        </button>
    );
}

export default CardTopic;