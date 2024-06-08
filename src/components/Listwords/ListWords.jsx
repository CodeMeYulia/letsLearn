import React from "react";
import style from './ListWords.module.css';

function ListWords(props) {
    const { id, word, transcription, translation, topic, onChange, onClick, handleDelWord } = props;

    return (
        <>
            <div className={style.list} >
                <li className={style.point}>
                    <div >{id}</div>
                    <div className="baseWord">{word}</div>
                    <div className="transcrtn">{transcription}</div>
                    <div className="transltn">{translation}</div>
                    <div className="theme">/{topic}</div>
                    <div>
                        <button id="del" className="del" onClick={handleDelWord}> X </button>
                        <button id="red" className="red" onChange={onChange} onClick={onClick}>ред.</button>
                    </div>

                </li>
            </div>
        </>
    )
};

export default ListWords;