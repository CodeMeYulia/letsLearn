import React, { useState, useContext } from "react";
import Card from "../Card";
import AllWordsContext from "../../context/AllWordsContext";


function Slider() {
    const { words } = useContext(AllWordsContext);


    // const allWords = [
    //     {
    //         id: 1,
    //         word: 'flower',
    //         transcription: '[ˈflaʊə(r)]',
    //         translation: 'цветок',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 2,
    //         word: 'grass',
    //         transcription: '[ɡrɑːs]',
    //         translation: 'трава, газон',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 3,
    //         word: 'bunch',
    //         transcription: '[bʌntʃ]',
    //         translation: 'пучок, связка',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 4,
    //         word: 'tree',
    //         transcription: '[tri:]',
    //         translation: 'дерево',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 5,
    //         word: 'birch',
    //         transcription: '[bə:tʃ]',
    //         translation: 'береза',
    //         topic: 'nature'
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
    //         topic: 'nature'
    //     },
    //     {
    //         id: 8,
    //         word: 'needles',
    //         transcription: '[ɡleɪd]',
    //         translation: 'хвоя',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 9,
    //         word: 'lawn',
    //         transcription: '[lɔ:n]',
    //         translation: 'газон',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 10,
    //         word: 'petal',
    //         transcription: '[ˈpetl]',
    //         translation: 'лепесток',
    //         topic: 'nature'
    //     }
    // ];
    //определяем случайное слово в тренировочной карточке для будущего режима random
    // const randomCard = allWords[Math.floor(Math.random() * allWords.length)];

    //задает начальный индекс
    let [index, setIndex] = useState(0);
    //определяем карточку
    let currentCard = words[index];

    //задаем значение по умолчанию без перевода
    const [base, setReversed] = useState(true);

    //предыдущая карточка
    const handleClickPrew = () => {
        if (index > 0) {
            setIndex(index - 1)
            setReversed(true);
        } else {
            alert('ups!');
        }
    };

    //следующая карточка
    const handleClickNext = () => {
        setReversed(true);
        if (index < words.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(index = 0);
        }
    };

    return (
        < div >
            <div className='cardOneBlock'>
                <div className='prew slade' onClick={handleClickPrew}>
                    <img src='./images/angle_left.png' width={30} alt="arrow_left"></img>
                </div>
                <Card
                    // id={currentCard.id}
                    english={currentCard.english}
                    transcription={currentCard.transcription}
                    russian={currentCard.russian}
                    topic={currentCard.topic}
                    isShowTranslation={base}
                    onShowTranslation={setReversed}
                />
                <div className='next slade' onClick={handleClickNext}>
                    <img src='./images/angle_right.png' width={30} alt="arrow_right"></img>
                </div>
            </div>
            <p className='count'>{index + 1} /{words.length}</p>

        </ div>

    )
}

export default Slider;

