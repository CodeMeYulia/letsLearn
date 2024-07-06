import style from "./ListWords.module.css";
import { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import { wordsStore } from "../../stores/wordsStore";
import WordItem from "../WordItem/WordItem";

const ListWords = observer(() => {
    const { words, fetchWords } = wordsStore;
    // состояние индикатора загрузки
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

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
        <div className={style.list}>
            {
                isLoading ?
                    (<>
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
                    </>) :
                    (
                        <p>
                            {
                                words.map(word =>
                                (
                                    <>
                                        <WordItem word={word} key={word.id} />
                                    </>
                                ))
                            }
                        </p>
                    )
            }
        </div>
    )
})

export default ListWords;