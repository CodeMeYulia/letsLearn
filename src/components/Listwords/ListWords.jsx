import React from "react";
import style from './ListWords.module.css';
import { useState } from "react";
import Form from "../Form/Form";

function Word(props) {
    const { id, topic, transcription, translation, word, onChange } = props;


    return (
        <>
            <div className={style.list} >

                <li className={style.point}>
                    <div className="num">{id}</div>
                    <div className="baseWord">{word}</div>
                    <div className="transcrtn">{transcription}</div>
                    <div className="transltn">{translation}</div>
                    <div className="theme">/{topic}</div>
                    <div>
                        <button id="del" className="del" > X </button>
                        <button id="red" className="red" onChange={onChange}>ред.</button>
                    </div>

                </li>
            </div>
        </>
    )

};


export default Word;