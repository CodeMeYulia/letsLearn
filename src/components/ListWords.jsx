import React from "react";
import { useState } from "react";
import Form from "./Form/Form";

function ListWords(string) {
    const [used, setRedacted] = useState(string.used || true);

    const handleChange = () => {
        setRedacted(!used);
    }

    const handleChangeDel = (item) => {
        //удалить строчку
    }

    if (used === true) {
        return (
            <React.Fragment>
                <div className="listPoints" >
                    <li className="point">
                        <div className="num">{string.id}</div>
                        <div className="baseWord">{string.word}</div>
                        <div className="transcrtn">{string.transcription}</div>
                        <div className="transltn">{string.translation}</div>
                        <div className="theme">/{string.topic}</div>
                        <button id="del" className="del" onClick={handleChangeDel}> X </button>
                        <button id="red" className="red" onClick={handleChange}>ред.</button>
                    </li>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Form
                    word={string.word}
                    transcription={string.transcription}
                    translation={string.translation}
                    topic={string.topic}
                />
            </React.Fragment>
        )
    };

}

export default ListWords;