import React from "react";
import style from './ListWords.module.css';

function ListWords(props) {
    const { id, word, transcription, translation, topic, onChange, handleDelWord, fixWord } = props;



    return (
        <>
            <div className={style.list} >
                <li className={style.point} onClick={handleDelWord}>
                    <div >{id}</div>
                    <div className="baseWord">{word}</div>
                    <div className="transcrtn">{transcription}</div>
                    <div className="transltn">{translation}</div>
                    <div className="theme">/{topic}</div>
                    <div className="buttons">
                        <button className="del" > X </button>
                        <button className="red" onChange={onChange} onClick={fixWord}>ред.</button>
                    </div>

                </li>
            </div>
        </>
    )
};

export default ListWords;