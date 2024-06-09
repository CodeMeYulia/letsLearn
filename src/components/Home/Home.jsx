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

    let newLearnWords = [...learnWords];

    // //удаление слова
    const handleDelWord = (id) => {
        newLearnWords.splice(id, 1);
        setLearnWords(newLearnWords);
        localStorage.setItem("wordsList", JSON.stringify(newLearnWords))
    }

    // let addForm = <div className="addForm">hru hru hru</div>
    const [formVisible, setFormVisible] = useState(false)

    //добавить слово(форму ввода)
    const handleAddWord = () => {
        setFormVisible(!formVisible)
    }

    let addForm = <div className="addForm" ></div >

    if (formVisible) {
        addForm = <div className="addForm"><Form handleEsc={handleAddWord} /> </div >
    }

    return (
        <main>
            <aside>
                <div>
                    <AddWord handleAddWord={handleAddWord} />
                    <h2>Слова для повторения</h2>
                    <div className="words">
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
                                            handleDelWord={handleDelWord}
                                        />
                                        {/* <Form id={learnWords.length + 1} handleDelWord={handleDelWord}></Form> */}
                                    </>
                                )
                            })
                        }
                    </div>
                    {addForm}
                </div>
            </aside>
            <ListTopics />
        </main>
    )
}

export default Home;
