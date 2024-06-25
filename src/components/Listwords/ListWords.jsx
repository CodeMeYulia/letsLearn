import React, { useEffect, useContext } from "react";
import style from "./ListWords.module.css"
import AllWordsContext from "../../context/AllWordsContext";

function ListWords() {
    const { words, fetchWords, fixWord, delWord, loading } = useContext(AllWordsContext);

    useEffect(() => {
        fetchWords();
    }, []);


    const handleFixWord = (fixedWord) => {
        console.log(fixedWord);
        fixWord(fixedWord);
    };
    const handleDelWord = (id) => { delWord(id) };

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
                    {words.map((word) => (
                        <li className={style.point} key={word.id}>
                            <span className={style.baseWord}>{word.english} </span>
                            <span className={style.baseWord}>{word.transcription}</span>
                            <span className={style.baseWord}>{word.russian}</span>
                            {/* <span className={style.baseWord}>{word.topic}</span> */}
                            <button onClick={() => handleFixWord(word)}>Изменить</button>
                            <button onClick={() => handleDelWord(word.id)}>Удалить</button>
                        </li>
                    ))}
                </div>

            )}
        </div>
    )
};

export default ListWords;