import React, { useState } from 'react';
import style from './Form.module.css';

function Form({ handleEsc, id, data, learWords, handleDelWord, fixWord }) {

    const [baseForm, setForm] = useState({
        word: "",
        transcription: "",
        translation: "",
        topic: ""
    })

    //задаем по умолчанию кнопку неактивной
    const [isDisabled, setIsDisabled] = useState(true);

    //запуск проверки после изменений
    const handleChange = (e) => {
        let value = e.target.value;
        setForm({
            ...baseForm,
            [e.target.name]: value
        })
        // console.log(baseForm);
        //функция проверки на пустую строку в инпутах
        checkEmpty()
    }

    const checkEmpty = () => {
        let inputs = document.getElementsByClassName("inputs");
        let empty = 4;

        for (let i = 0; i < inputs.length; i++) {
            // console.log(inputs[i].value);
            const userWord = inputs[i].value;

            //обводка пустого поля ввода
            if (userWord !== "") {
                inputs[i].classList.remove("incorrect");
                empty -= 1;
            } else {
                inputs[i].classList.add("incorrect")
            }

            //блокировка кнопки сохранить, если есть пустые поля инпутов
            if (empty === 0) {
                setIsDisabled(!isDisabled);
            }
        }
    }


    const saveNewWord = (e) => {
        e.preventDefault();
        const word = {
            id: id,
            word: baseForm.word,
            transcription: baseForm.transcription,
            translation: baseForm.translation,
            topic: baseForm.topic
        }
        console.log(word, typeof word);
        console.log(data, typeof data);

        data.push(word);
        handleEsc();
        localStorage.setItem("wordsList", JSON.stringify(data))
        return <li className="point">
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
    }

    return (
        <>
            <form action="тутьбудетсервер" className={style.point} method="post" id="createWord">
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
                    <button type='button' id="save" className="save" onClick={saveNewWord} disabled={isDisabled}> сохр. </button>
                    <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
                </div>
            </form>



        </>

    )
}

export default Form;