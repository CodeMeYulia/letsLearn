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
        fixWord(fixedWord)
    };
    const handleDelWord = (id) => { delWord(id) };

    return (
        <div className={style.list} >
            {loading ? (<p>Loading...</p>) : (
                <div>
                    {words.map((word) => (
                        <li className={style.point} key={word.id}>
                            <span className={style.baseWord}>{word.english}</span>
                            <span className={style.baseWord}>{word.transcription}</span>
                            <span className={style.baseWord}>{word.russian}</span>
                            <span className={style.baseWord}>{word.tpic}</span>
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