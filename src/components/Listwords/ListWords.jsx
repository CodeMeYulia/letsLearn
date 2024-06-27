import React, { useEffect, useContext, useState } from "react";
import style from "./ListWords.module.css"
import AllWordsContext from "../../context/AllWordsContext";
import WordItem from "../WorItem/WordItem";

function ListWords() {
    const { words, fetchWords, loading } = useContext(AllWordsContext);

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
                setIsDisabled(false);
            } else {
                setIsDisabled(true)
            }
        }
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <div className={style.list} >
            {loading ? (
                <>
                    <div className={style.cssloaddots}>
                        <div className={style.cssloaddot}></div>
                        <div className={style.cssloaddot}></div>
                        <div className={style.cssloaddot}></div>
                        <div className={style.cssloaddot}></div>
                        <div className={style.cssloaddot}></div>
                    </div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
                                {/* <!--<feBlend in2="goo" in="SourceGraphic" result="mix" ></feBlend>--> */}
                            </filter>
                        </defs>
                    </svg>
                </>
            ) : (
                <div>
                    {words.map(word => (
                        <WordItem
                            key={word.id}
                            word={word}
                            checkEmpty={checkEmpty}
                            isDisabled={isDisabled}
                            setIsDisabled={setIsDisabled}
                        />
                    ))}
                </div>
            )}
        </div>
    )
};

export default ListWords;