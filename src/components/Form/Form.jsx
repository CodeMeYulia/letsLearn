import React, { useState, useContext } from 'react';
import style from './Form.module.css';
import AllWordsContext from "../../context/AllWordsContext";


const Form = () => {
    const { addWord, formVisible, setFormVisible } = useContext(AllWordsContext);

    const [english, setEnglish] = useState("");
    const [transcription, setTranscription] = useState("");
    const [russian, setRussian] = useState("");
    const [topic, setTopic] = useState("");

    const handleEsc = () => {
        setFormVisible(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const myWord = { english, transcription, russian, topic };
        handleAddWord(myWord);
        setEnglish("");
        setTranscription("");
        setRussian("")
        setTopic("")
    }

    const handleAddWord = (myWord) => {
        addWord(myWord)
        setFormVisible(!formVisible);
    }

    //задаем по умолчанию кнопку save в формах неактивной
    const [isDisabled, setIsDisabled] = useState(true);

    //запуск проверки после изменений формы
    const checkEmpty = () => {
        let inputs = document.getElementsByClassName("inputs");
        let empty = 4;

        for (let i = 0; i < inputs.length; i++) {
            const userWord = inputs[i].value;

            //обводка пустого поля ввода
            if (userWord !== "") {
                inputs[i].classList.remove("incorrect");
                empty -= 1;
            } else {
                inputs[i].classList.add("incorrect")
            }

            //блокировка кнопки save, если есть пустые поля инпутов
            if (empty === 0) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true)
            }
        }
    }

    return (
        <>
            <form className={style.point} onSubmit={handleSubmit} onChange={checkEmpty}>
                <label >
                    <input type="text" className='inputs' placeholder="new word" required name="english"
                        onChange={(e) => setEnglish(e.target.value)} value={english} minLength="2" pattern="^[a-z]{1,15}$" />
                </label>
                <label >
                    <input type="text" className='inputs' placeholder="transcription" name="transcription" onChange={(e) => setTranscription(e.target.value)} value={transcription} minLength="2" pattern="^\[[a-z:]{1,15}\]$" />
                </label>
                <label >
                    <input type="text" className='inputs' placeholder="translation" name="translation" onChange={(e) => setRussian(e.target.value)} value={russian} minLength="4" pattern="^[а-я]{1,15}$" />
                </label>
                <label >
                    <input type="text" className='inputs' placeholder="topic" name="topic" onChange={(e) => setTopic(e.target.value)} value={topic} minLength="2" pattern="^[а-я]{1,15}$" />
                </label>
                <div>
                    <button type='submit' id="save" className="save" disabled={isDisabled}> сохр. </button>
                    <button type='button' id="esc" className="esc" onClick={handleEsc} >отм.</button>
                </div>
            </form>
        </>
    )
}

export default Form;