import React, { useState, useContext } from "react";
import AllWordsContext from "../../context/AllWordsContext";
import style from "../Listwords/ListWords.module.css"


function WordItem({ word }) {
    const { fixWord, delWord } = useContext(AllWordsContext);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ ...word });

    const handleEditClick = (fixedWord) => {
        console.log(fixedWord)
        //режим редактирования для данного слова
        setEditingId(word.id);
    }

    const handleEditSubmit = (e) => {
        console.log('hru');
        e.preventDefault();
        // const fixedWord = { setFormData };
        // console.log(fixedWord);
        // fixWord(fixedWord);
        // setEditingId(null);
        // console.log('chao mao');
    }

    const handleEsc = () => setEditingId(null);
    const handleDelWord = (id) => delWord(id);


    //задаем по умолчанию кнопку save неактивной
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
                console.log(empty);
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
            {
                editingId === word.id ? (
                    // Форма для редактирования
                    <form className={style.pointEdit} onSubmit={handleEditSubmit} onChange={checkEmpty}>
                        <input type="text" className="inputs" name="english" onChange={(e) => setFormData(e.target.value)} placeholder={word.english} />
                        <input type="text" className="inputs" name="transcription" onChange={(e) => setFormData(e.target.value)} placeholder={word.transcription} />
                        <input type="text" className="inputs" name="russian" onChange={(e) => setFormData(e.target.value)} placeholder={word.russian} />
                        <input type="text" className='inputs' name="topic" onChange={(e) => setFormData(e.target.value)} placeholder={word.topic} />
                        <div>
                            <button type='submit' id="save" className="save" disabled={isDisabled}> сохр. </button>
                            <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
                        </div>
                    </form>
                ) : (
                    // Обычное отображение слова
                    <li className={style.point} key={word.id}>
                        <span className={style.baseWord} >{word.english} </span>
                        <span className={style.baseWord}>{word.transcription}</span>
                        <span className={style.baseWord}>{word.russian}</span>
                        {/* НЕ РАБОТАЕТ !!!!!!!!!!!!*/}
                        <button onClick={() => handleEditClick(word, word.id)}>Изменить</button>
                        {/* работает корректно */}
                        <button onClick={() => handleDelWord(word.id)}>Удалить</button>
                    </li>
                )
            }
        </>
    )
}

export default WordItem;