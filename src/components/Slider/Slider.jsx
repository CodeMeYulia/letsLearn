import React, { useState } from "react";
import style from './Slider.module.css';
import Card from "../Card";
import Modal from 'react-modal';

function Slider() {
    //модальное окно
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const modalContent = (
        <div className={style.modal}>
            <p className={style.title}>cлова закончились</p>
            <button onClick={closeModal} className={style.btn}>Начать сначала</button>
        </div>
    );

    const allWords = [
        {
            id: 1,
            word: 'flower',
            transcription: '[ˈflaʊə(r)]',
            translation: 'цветок',
            topic: 'nature'
        },
        {
            id: 2,
            word: 'grass',
            transcription: '[ɡrɑːs]',
            translation: 'трава, газон',
            topic: 'nature'
        },
        {
            id: 3,
            word: 'bunch',
            transcription: '[bʌntʃ]',
            translation: 'пучок, связка',
            topic: 'nature'
        },
        {
            id: 4,
            word: 'tree',
            transcription: '[tri:]',
            translation: 'дерево',
            topic: 'nature'
        },
        {
            id: 5,
            word: 'birch',
            transcription: '[bə:tʃ]',
            translation: 'береза',
            topic: 'nature'
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
            topic: 'nature'
        },
        {
            id: 8,
            word: 'needles',
            transcription: '[ɡleɪd]',
            translation: 'хвоя',
            topic: 'nature'
        },
        {
            id: 9,
            word: 'lawn',
            transcription: '[lɔ:n]',
            translation: 'газон',
            topic: 'nature'
        },
        {
            id: 10,
            word: 'petal',
            transcription: '[ˈpetl]',
            translation: 'лепесток',
            topic: 'nature'
        }
    ];
    //определяем случайное слово в тренировочной карточке для будущего режима random
    // const randomCard = allWords[Math.floor(Math.random() * allWords.length)];

    //задает начальный индекс
    let [index, setIndex] = useState(0);
    //определяем карточку
    let currentCard = allWords[index];

    //предыдущая карточка
    const handleClickPrew = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            alert('ups!');
        }
    };
    //следующая карточка
    const handleClickNext = () => {
        console.log(allWords.length);
        if (index < allWords.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(index = 0);
            openModal();
        }
    };

    return (
        < div >
            <div className='cardOneBlock'>
                <div className='prew slade' onClick={handleClickPrew}>
                    <img src='./images/angle_left.png' width={30}></img>
                </div>
                <Card
                    id={currentCard.id}
                    word={currentCard.word}
                    transcription={currentCard.transcription}
                    translation={currentCard.translation}
                    topic={currentCard.topic}
                />
                <div className='next slade' onClick={handleClickNext}>
                    <img src='./images/angle_right.png' width={30}></img>
                </div>
            </div>
            <p className='count'>{currentCard.id}/{allWords.length}</p>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </ div>

    )
}

export default Slider;

