import React, { useState } from "react";
import ListTopics from "../ListTopic/ListTopics";
import ListWords from "../Listwords/ListWords";
import AddWord from '../AddWord/AddWord'
import useLocalStorage from "../../hooks/useLocalStorage";
import Form from "../Form/Form";

function Home() {

    const allWords = [
        {
            id: 1,
            word: 'flower',
            transcription: '[ˈflaʊə(r)]',
            translation: 'цветок',
            topic: 'природа'
        },
        {
            id: 2,
            word: 'grass',
            transcription: '[ɡrɑːs]',
            translation: 'трава, газон',
            topic: 'природа'
        },
        {
            id: 3,
            word: 'bunch',
            transcription: '[bʌntʃ]',
            translation: 'пучок, связка',
            topic: 'природа'
        },
        {
            id: 4,
            word: 'tree',
            transcription: '[tri:]',
            translation: 'дерево',
            topic: 'природа'
        },
        {
            id: 5,
            word: 'birch',
            transcription: '[bə:tʃ]',
            translation: 'береза',
            topic: 'природа'
        },
        {
            id: 6,
            word: 'pine',
            transcription: '[paɪn]',
            translation: 'сосна',
            topic: 'nature'
        },
        {
            id: 7,
            word: 'glade',
            transcription: '[ɡleɪd]',
            translation: 'поляна',
            topic: 'природа'
        },
        {
            id: 8,
            word: 'needles',
            transcription: '[ɡleɪd]',
            translation: 'хвоя',
            topic: 'природа'
        },
        {
            id: 9,
            word: 'lawn',
            transcription: '[lɔ:n]',
            translation: 'газон',
            topic: 'природа'
        },
        {
            id: 10,
            word: 'petal',
            transcription: '[ˈpetl]',
            translation: 'лепесток',
            topic: 'работа'
        }
    ];
    //состояние массива слов, по умолч  - пустое
    const [learnWords, setLearnWords] = useLocalStorage("wordsList", allWords)
    //состояние поля ввода задачи, по умолч  - пустое
    const [inputValue, setInputValue] = useState("");

    // //удаление слова
    const deleteWord = (index) => {
        const newLearnWords = [...learnWords];
        newLearnWords.splice(index, 1);
        setLearnWords(newLearnWords);
        // localStorage.setItem("wordsList", JSON.stringify(newLearnWords))
    }

    //добавить слово
    const addWord = () => {
        console.log("mao");
        return (
            <div>
                <Form />
            </div>
        )
    }

    return (
        <main>
            <aside>
                <div>
                    <AddWord addWord={addWord} inputValue={inputValue} setInputValue={setInputValue} />
                    <h2>Слова для повторения</h2>
                    <div>
                        {
                            learnWords.map((item, index) => {
                                return (
                                    <>
                                        <ListWords
                                            key={index}
                                            id={item.id}
                                            word={item.word}
                                            transcription={item.transcription}
                                            translation={item.translation}
                                            topic={item.topic}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </aside>
            <ListTopics />
        </main>
    )
}

export default Home;
