import React from "react";
import { useState } from "react";

function ListWords(string) {
    const [used, setRedacted] = useState(string.used || true);

    const handleChange = () => {
        setRedacted(!used);
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
                        <button id="del" className="del"> X </button>
                        <button id="red" className="red" onClick={handleChange}>ред.</button>
                    </li>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="formPoints" onClick={handleChange}>
                    <li className="point">
                        <div className="baseWord">{string.word}</div>
                        <div className="transcrtn">{string.transcription}</div>
                        <div className="transltn">{string.translation}</div>
                        <div className="theme">/{string.topic}</div>
                        <button id="save" className="save"> сохр </button>
                        <button id="res" className="reset" >отм</button>
                    </li>
                </div>
            </React.Fragment>
        )
    };

}

export default ListWords;