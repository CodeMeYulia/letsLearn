import React, { useContext } from "react";
import AllWordsContext from "../../context/AllWordsContext";
import ListTopics from "../ListTopic/ListTopics";
import ListWords from "../Listwords/ListWords";
import AddWord from "../AddWord/AddWord";

function Home() {
    const { words, fetchWords, fixWord, delWord, loading, myForm, formVisible, addForm } = useContext(AllWordsContext);


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

    //состояние массива слов, по умолч  - пустое
    // const allWords = JSON.parse(data);
    // console.log(data);




    // const [formVisible, setFormVisible] = useState(false)

    //добавить слово(форму ввода)
    // const handleAddWord = () => {
    //     setFormVisible(!formVisible)
    // }

    //сохранить новое
    // const saveNewWord = (e) => {
    //     e.preventDefault();
    //     console.log("mao");
    //     // console.log(learnWords);
    //     // const newWord = "hru"
    //     // // learnWords.push(newWord)
    //     // setLearnWords(newLearnWords, newWord);
    // }

    // let addForm = <div className="addForm" ></div >

    // if (formVisible) {
    //     addForm = <div className="addForm"><Form handleEsc={handleAddWord} id={learnWords.length + 1}
    //         handleDelWord={handleDelWord} data={data} /> </div >
    // }
    // const { words, fetchWords, addWord, fixWord, delWord } = useContext(AllWordsContext);
    return (
        <main>
            <aside>
                <div>
                    <AddWord />
                    <h2>Слова для повторения</h2>
                    {/* <div className="words"> */}
                    <ListWords />
                    {/* </div> */}
                    {myForm}
                </div>
            </aside>
            <ListTopics />
        </main>
    )
}

export default Home;
