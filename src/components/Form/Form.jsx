import React, { useState } from 'react';
import style from './Form.module.css';

function Form({ handleEsc, saveNewWord, id, learnWords, handleDelWord, fixWord }) {

    const [baseForm, setForm] = useState({
        word: "",
        transcription: "",
        translation: "",
        topic: ""
    })

    //задаем по умолчанию кнопку неактивной
    const [isDisabled, setIsDisabled] = useState(true);

    //проверка на пустое и активация кнопки "сохранить" если все поля имеют ненулевое значение


    const handleChange = (e) => {
        let value = e.target.value;
        console.log("value: " + value);
        console.log(e.target);
        setForm({
            ...baseForm,
            [e.target.name]: value
        })
        console.log(baseForm);
        checkEmpty()
    }

    const checkEmpty = () => {
        let inputs = document.getElementsByClassName("inputs");
        const userWords = [];

        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs[i].value)
            const userWord = inputs[i].value;

            if (userWord !== "") {
                userWords.push(userWord);
                inputs[i].classList.remove("incorrect")
            } else {
                userWords.pop(userWord);
                inputs[i].classList.add("incorrect")
            }
        }
        console.log(userWords.length)
        if (userWords.length === 4) {
            setIsDisabled(!isDisabled)
        } else {
            setIsDisabled(isDisabled)
        }
    }
    return (
        <>
            <form className={style.point}>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="new word" required name="word" onChange={handleChange} value={baseForm.word} />
                </label>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="transcription" name="transcription" onChange={handleChange} value={baseForm.transcription} />
                </label>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="translation" name="translation" onChange={handleChange} value={baseForm.translation} />
                </label>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="topic" name="topic" onChange={handleChange} value={baseForm.topic} />
                </label>
                <div>
                    <button type='submit' id="save" className="save" onSubmit={saveNewWord} disabled={isDisabled}> сохр. </button>
                    <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
                </div>
            </form>
            <li className="point">
                <div >{id}</div>
                <div className="baseWord">{baseForm.word}</div>
                <div className="transcrtn">{baseForm.transcription}</div>
                <div className="transltn">{baseForm.translation}</div>
                <div className="theme">/{baseForm.topic}</div>
                <div>
                    <button id="del" className="del" onClick={handleDelWord}> X </button>
                    <button id="red" className="red" onClick={fixWord}>ред.</button>
                </div>
            </li >


        </>

    )
}

export default Form;