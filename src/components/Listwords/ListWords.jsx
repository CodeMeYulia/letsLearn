import React, { useEffect, useContext } from "react";
import style from './ListWords.module.css';
import AllWordsContext from "../../context/AllWordsContext";
import Form from "../Form/Form";


function ListWords() {
    const { words, fetchWords, addWord, fixWord, delWord, loading } = useContext(AllWordsContext);

    useEffect(() => {
        fetchWords();
    }, []);

    const handleFixWord = (fixedWord) => { fixWord(fixedWord) };
    const handleDelWord = (id) => { delWord(id) };

    return (
        <>
            <div className={style.list} >
                {loading ? (<p>Loading...</p>) : (
                    <ol>
                        {words.map((word) => (
                            <li className={style.point} key={word.id}>
                                <span>{word.english}</span>
                                <span>{word.transcription}</span>
                                <span>{word.russian}</span>
                                <button onClick={() => handleFixWord(word)}>Изменить</button>
                                <button onClick={() => handleDelWord(word.id)}>Удалить</button>
                            </li>
                        ))}
                    </ol>
                )}
                {/* <Form onSubmitInWords={handleAddWord} /> */}

            </div>
        </>
    )
};

export default ListWords;