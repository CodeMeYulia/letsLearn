import React, { useState } from 'react';
import style from './Form.module.css';

export default function Form(string) {
    const { word, transcription, translation, topic } = string;

    const [used, setRedacted] = useState(string.used || true);

    const handleChangeReset = () => {
        setRedacted(used)
    }

    const handleChangeSaveNew = () => {
        // console.log(inputs)
        // if (input.value) {
        //     return (
        //         alert('mao')
        //     )
        // }

    }

    return (
        // console.log('mao')
        <div className="listPoints" >
            <form className="point form">
                <input className="baseWord" value=''></input>
                <input className="transcrtn" value=''></input>
                <input className="transltn" value=''></input>
                <input className="theme" value=''></input>
                <button type="submit" id="save" className="save" onClick={handleChangeSaveNew}> сохр </button>
                <button id="res" className="reset" onClick={handleChangeReset}>отм</button>
            </form>
        </div >
    )
}