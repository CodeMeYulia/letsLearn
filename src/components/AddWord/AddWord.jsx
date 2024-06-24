import React, { useContext, useState } from "react";
import style from './AddWord.module.css';
import Form from "../Form/Form";
import AllWordsContext from "../../context/AllWordsContext";


function AddWord() {
    const { words, fetchWords, addWord, loading, myForm, formVisible, addForm } = useContext(AllWordsContext);

    return (
        <button type="button" className={style.add} onClick={addForm}>+</button>
    )
}

export default AddWord;