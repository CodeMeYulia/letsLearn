import style from "./ListWords.module.css";
import { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import { wordsStore } from "../../stores/wordsStore";
import WordItem from "../WordItem/WordItem";

const ListWords = observer(() => {
    const { words, fetchWords } = wordsStore;
    // состояние индикатора загрузки
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(words);


    useEffect(() => {
        const loadList = async () => {
            try {
                await fetchWords();
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.error(err);
            }
        }
        loadList();
    }, [])
    return (
        <div>
            {
                isLoading ?
                    (<p>loading...</p>) :
                    (
                        <ul>
                            {
                                words.map(word =>
                                (
                                    <li >
                                        <WordItem word={word} key={word.id} />
                                    </li>
                                ))
                            }
                        </ul>
                    )
            }
        </div>
    )

})

export default ListWords;

//запуск проверки после изменений формы
// const checkEmpty = () => {
//     let inputs = document.getElementsByClassName("inputs");
//     let empty = 4;

//     for (let i = 0; i < inputs.length; i++) {
//         const userWord = inputs[i].value;

//         //обводка пустого поля ввода
//         if (userWord !== "") {
//             inputs[i].classList.remove("incorrect");
//             empty -= 1;
//         } else {
//             inputs[i].classList.add("incorrect")
//         }

//         //блокировка кнопки save, если есть пустые поля инпутов
//         if (empty === 0) {
//             setIsDisabled(false);
//         } else {
//             setIsDisabled(true)
//         }
//     }
// }


//         <>
//             <div className={style.cssloaddots}>
//                 <div className={style.cssloaddot}></div>
//                 <div className={style.cssloaddot}></div>
//                 <div className={style.cssloaddot}></div>
//                 <div className={style.cssloaddot}></div>
//                 <div className={style.cssloaddot}></div>
//             </div>
//             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                     <filter id="goo">
//                         <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
//                         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
//                     </filter>
//                 </defs>
//             </svg>
//         </>
