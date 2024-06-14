import React, { useState } from 'react';
import style from './Form.module.css';

function Form({ handleEsc, saveNewWord, id }) {

    const [baseForm, setForm] = useState({
        word: "",
        transcription: "",
        translation: "",
        topic: ""
    })

    const handleChange = (e) => {
        let value = e.target.value;
        setForm({
            ...baseForm,
            [e.target.name]: value
        })
    }


    return (
        <>
            <form className={style.point}>
                <label htmlFor="word">
                    <input type="text" placeholder="new word" required name="word" onChange={handleChange} value={baseForm.word} />
                </label>
                <label htmlFor="transcription">
                    <input type="text" placeholder="transcription" name="transcription" onChange={handleChange} value={baseForm.transcription} />
                </label>
                <label htmlFor="translation">
                    <input type="text" placeholder="translation" name="translation" onChange={handleChange} value={baseForm.translation} />
                </label>
                <label htmlFor="">
                    <input type="text" placeholder="topic" name="topic" onChange={handleChange} value={baseForm.topic} />
                </label>
                <div>
                    <button type='submit' id="save" className="save" onSubmit={saveNewWord}> сохр. </button>
                    <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
                </div>
            </form>
            <li className="point">
                <div >{id}</div>
                <div className="baseWord">{baseForm.word}</div>
                <div className="transcrtn">{baseForm.transcription}</div>
                <div className="transltn">{baseForm.translation}</div>
                <div className="theme">/{baseForm.topic}</div>
                {/* <div>
                    <button id="del" className="del" onClick={handleDelWord}> X </button>
                    <button id="red" className="red" onChange={onChange} onClick={onClick}>ред.</button>
                </div> */}
            </li>
        </>

    )
}

export default Form;