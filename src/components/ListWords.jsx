import React from "react";

const AllWords = [
    {
        id: '1',
        word: 'flower',
        transcription: '[ˈflaʊə(r)]',
        translation: 'цветок',
        topic: 'nature',
    },
    {
        id: '2',
        word: 'grass',
        transcription: '[ɡrɑːs]',
        translation: 'трава, травка, газон',
        topic: 'nature',
    },
    {
        id: '3',
        word: 'bunch',
        transcription: '[bʌntʃ]',
        translation: 'пучок, гроздь, связка',
        topic: 'nature',
    },
    {
        id: '4',
        word: 'tree',
        transcription: '[triː]',
        translation: 'дерево, древо, вал',
        topic: 'nature',
    }
]
console.log(AllWords);
console.log(typeof AllWords);


const ListWords = () => {

    const words = AllWords.map((point) =>
        <li className="point">
            <div className="num">{point.id}</div>
            <div className="baseWord">{point.word}</div>
            <div className="transcrtn">{point.transcription}</div>
            <div className="transltn">{point.translation}</div>
            <div className="theme">/{point.topic}</div>
            <button type="button" id="del" className="del"> X </button>
            <button type="button" id="red" className="red">ред.</button>

        </li>

    );
    console.log(words);

    return (
        <div className="list">
            <button type="button" id="add" className="add">+</button>
            <h3>Слова</h3>
            <div className="listPoints">
                {words}
            </div>

        </div>
    )

}

export default ListWords;