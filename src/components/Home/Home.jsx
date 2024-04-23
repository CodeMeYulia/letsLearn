import React, { useState } from "react";
import Word from '../Listwords/ListWords';
import ListTopics from "../ListTopic/ListTopics";
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

    const [string, setString] = useState(true);
    const handleChange = (obj) => {
        setString((string) => [string, obj])
    }

    const [] = useState();
    const handleSubmit = (obj) => {
        console.log('Mao');

    }

    return (
        <main>
            <aside>
                <div>
                    <button type="button" id="add" className="add">+</button>
                    <h2>Слова для повторения</h2>
                    <div>
                        {
                            allWords.map((item, index) => {
                                return (
                                    <>
                                        <Word
                                            key={index}
                                            id={item.id}
                                            word={item.word}
                                            transcription={item.transcription}
                                            translation={item.translation}
                                            topic={item.topic}
                                            onChange={handleChange}
                                        />
                                        <Form
                                            key={index}
                                            id={item.id}
                                            word={item.word}
                                            transcription={item.transcription}
                                            translation={item.translation}
                                            topic={item.topic}
                                            onSubmit={handleSubmit}
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
