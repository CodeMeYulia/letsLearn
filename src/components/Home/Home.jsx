import React, { useContext } from "react";
import AllWordsContext from "../../context/AllWordsContext";
import ListTopics from "../ListTopic/ListTopics";
import ListWords from "../Listwords/ListWords";
import AddWord from "../AddWord/AddWord";
import style from './Home.module.css'

function Home() {
    const { myForm } = useContext(AllWordsContext);

    // const allWords = [
    //     {
    //         id: 1,
    //         word: 'flower',
    //         transcription: '[ˈflaʊə(r)]',
    //         translation: 'цветок',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 2,
    //         word: 'grass',
    //         transcription: '[ɡrɑːs]',
    //         translation: 'трава, газон',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 3,
    //         word: 'bunch',
    //         transcription: '[bʌntʃ]',
    //         translation: 'пучок, связка',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 4,
    //         word: 'tree',
    //         transcription: '[tri:]',
    //         translation: 'дерево',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 5,
    //         word: 'birch',
    //         transcription: '[bə:tʃ]',
    //         translation: 'береза',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 6,
    //         word: 'pine',
    //         transcription: '[paɪn]',
    //         translation: 'сосна',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 7,
    //         word: 'glade',
    //         transcription: '[ɡleɪd]',
    //         translation: 'поляна',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 8,
    //         word: 'needles',
    //         transcription: '[ɡleɪd]',
    //         translation: 'хвоя',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 9,
    //         word: 'lawn',
    //         transcription: '[lɔ:n]',
    //         translation: 'газон',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 10,
    //         word: 'petal',
    //         transcription: '[ˈpetl]',
    //         translation: 'лепесток',
    //         topic: 'работа'
    //     }
    // ];

    return (
        <main>
            <aside>
                <div className={style.listContainer}>
                    <AddWord />
                    <h2>Слова для повторения</h2>
                    <ListWords />
                    {myForm}
                </div>
            </aside>
            <ListTopics />
        </main>
    )
}

export default Home;
