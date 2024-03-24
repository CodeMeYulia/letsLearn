import React from "react";
import Card from './Card'

const CardTopic = ({ topic }) => {
    return (
        <div className="topic-card">
            <a href="#"
                // onClick={handleClick} 
                className="tocard">{topic}</a>
        </div>
    );
}

export default CardTopic;