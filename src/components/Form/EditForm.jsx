import React, { useState, useContext } from 'react';
import style from './Form.module.css';
import AllWordsContext from "../../context/AllWordsContext";


const EditForm = () => {
    const { addWord, pushBtn, setPushBtn, fixedWord } = useContext(AllWordsContext);

    console.log(fixedWord, typeof fixedWord, fixedWord.english);

    const [english, setEnglish] = useState("");
    const [transcription, setTranscription] = useState("");
    const [russian, setRussian] = useState("");
    const [topic, setTopic] = useState("");

    const handleAddWord = (fixedWord) => {
        addWord(fixedWord)
        setPushBtn(!pushBtn);
    }

    const handleEsc = () => {
        setPushBtn(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fixedWord = { english, transcription, russian, topic };
        console.log(fixedWord);
        handleAddWord(fixedWord);
        setEnglish("");
        setTranscription("");
        setRussian("")
        setTopic("")
    }

    // //задаем по умолчанию кнопку save неактивной
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
                setIsDisabled(!isDisabled);
            }
        }
    }

    return (
        <>
            <form className={style.point} onSubmit={handleSubmit} onChange={checkEmpty}>
                <label >
                    <input type="text" className='inputs' placeholder={fixedWord.english} required name="english"
                        onChange={(e) => setEnglish(e.target.value)} value={english} />
                </label>
                <label >
                    <input type="text" className='inputs' placeholder={fixedWord.transcription} name="transcription" onChange={(e) => setTranscription(e.target.value)} value={transcription} />
                </label>
                <label >
                    <input type="text" className='inputs' placeholder={fixedWord.russian} name="translation" onChange={(e) => setRussian(e.target.value)} value={russian} />
                </label>
                <label >
                    <input type="text" className='inputs' placeholder={fixedWord.topic} name="topic" onChange={(e) => setTopic(e.target.value)} value={topic} />
                </label>
                <div>
                    <button type='submit' id="save" className="save" disabled={isDisabled}> сохр. </button>
                    <button type='button' id="esc" className="esc" onClick={handleEsc} >отм.</button>
                </div>
            </form>
        </>
    )
}

export default EditForm;