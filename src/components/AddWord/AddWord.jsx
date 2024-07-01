import React from "react";
import style from './AddWord.module.css';
import { observer } from 'mobx-react';


const AddWord = observer((setFormVisible) => {

    //добавить форму для ввода нового слова
    const addForm = () => {
        setFormVisible(true);
    }

    return (
        <button type="button" className={style.add} onClick={addForm}>+</button>
    )

})

export default AddWord;