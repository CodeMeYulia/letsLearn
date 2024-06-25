import React, { useState, useContext, useEffect } from "react";
import AllWordsContext from "../../context/AllWordsContext";

function ListEditForm() {
    const { words, fetchWords, fixWord, delWord, loading, handleEsc, handleSubmit, checkEmpty, isDisabled, setWords } = useContext(AllWordsContext);
    useEffect(() => {
        fetchWords();
    }, []);

    const [baseList, setBaseList] = useState({ words });
    console.log(baseList);
    const [editIndex, setEditIndex] = useState(null);
    const [newValue, setNewValue] = useState('');

    const handleEdit = index => {
        setEditIndex(index);
        setNewValue(words[index]);
    };

    const handleSave = () => {
        const updateWords = [...words];
        updateWords[editIndex] = newValue;
        setWords(updateWords);
        setEditIndex(null);
    };

    return (
        <div>
            {words.map((item, index) => {
                <div key={index}>
                    {editIndex === index ? (
                        <input type="text" value={newValue} onChange={e => setNewValue(e.target.value)} />
                    ) : (
                        item
                    )}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                </div>
            })}
            {editIndex !== null && (
                <button onClick={handleSave}>Save</button>
            )}
        </div>
    )
}

export default ListEditForm;