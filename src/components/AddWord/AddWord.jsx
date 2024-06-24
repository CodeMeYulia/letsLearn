import React, { useContext } from "react";
import style from './AddWord.module.css';
import AllWordsContext from "../../context/AllWordsContext";

function AddWord() {
    const { addForm } = useContext(AllWordsContext);

    return (
        <button type="button" className={style.add} onClick={addForm}>+</button>
    )
}

export default AddWord;