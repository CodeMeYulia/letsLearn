import React, { useState, useContext } from 'react';
import style from './Form.module.css';
import AllWordsContext from "../../context/AllWordsContext";


const Form = ({ onSubmitInWords }) => {
    const { words, fetchWords, addWord, loading, setFormVisible } = useContext(AllWordsContext);
    const handleAddWord = (myWord) => { addWord(myWord) };

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
        console.log(myWord);
        onSubmitInWords(myWord);
        setEnglish("");
        setTranscription("");
        setRussian("")
        setTopic("")
    }

    // const [baseForm, setForm] = useState({
    //     word: "",
    //     transcription: "",
    //     translation: "",
    //     topic: ""
    // })

    // //задаем по умолчанию кнопку неактивной
    // const [isDisabled, setIsDisabled] = useState(true);

    // //запуск проверки после изменений
    // const handleChange = (e) => {
    //     let value = e.target.value;
    //     setForm({
    //         ...baseForm,
    //         [e.target.name]: value
    //     })
    //     // console.log(baseForm);
    //     //функция проверки на пустую строку в инпутах
    //     checkEmpty()
    // }

    // const checkEmpty = () => {
    //     let inputs = document.getElementsByClassName("inputs");
    //     let empty = 4;

    //     for (let i = 0; i < inputs.length; i++) {
    //         // console.log(inputs[i].value);
    //         const userWord = inputs[i].value;

    //         //обводка пустого поля ввода
    //         if (userWord !== "") {
    //             inputs[i].classList.remove("incorrect");
    //             empty -= 1;
    //         } else {
    //             inputs[i].classList.add("incorrect")
    //         }

    //         //блокировка кнопки сохранить, если есть пустые поля инпутов
    //         if (empty === 0) {
    //             setIsDisabled(!isDisabled);
    //         }
    //     }
    // }

    return (
        <>
            <form className={style.point}>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="new word" required name="english" onChange={(e) => setEnglish(e.target.value)} value={english} />
                </label>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="transcription" name="transcription" onChange={(e) => setTranscription(e.target.value)} value={transcription} />
                </label>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="translation" name="translation" onChange={(e) => setRussian(e.target.value)} value={russian} />
                </label>
                <label >
                    <input type="text" className='inputs incorrect' placeholder="topic" name="topic" onChange={(e) => setTopic(e.target.value)} value={topic} />
                </label>
                <div>
                    {/* <button type='submit' id="save" className="save" disabled={isDisabled}> сохр. </button> */}

                    <button type='submit' id="save" className="save" onSubmit={handleSubmit}> сохр. </button>
                    <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
                </div>
            </form>



        </>

    )
}

export default Form;