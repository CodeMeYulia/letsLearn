import { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import wordsStore from "../../stores/wordsStore";
import style from "./ListWords.module.css";
import WordItem from "../WorItem/WordItem";

const ListWords = observer(() => {
    const { words, fetchWords } = wordsStore;
    // console.log(words);

    //задаем по умолчанию кнопку save неактивной
    const [isDisabled, setIsDisabled] = useState(true);
    // состояние индикатора загрузки
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWords();
    }, []);


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
                            setLoading={setLoading}
                        />
                    ))}
                </div>
            )}
        </div>
    )
})

export default ListWords;