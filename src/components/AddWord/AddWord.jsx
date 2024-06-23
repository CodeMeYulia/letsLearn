import React, { useState, useContext } from "react";
import style from './AddWord.module.css';
import AllWordsContext from "../../context/AllWordsContext";


function AddWord() {



    return (
        <button type="click" className={style.add} >+</button>
        // <Form onSubmitInWords={addWord} />

    )
}

export default AddWord;