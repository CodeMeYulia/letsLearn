import React from "react";
import style from './AddWord.module.css'

export default function AddWord({ addWord }) {

    return (
        <button type="click" className={style.add} onClick={addWord}>+</button>
    )
}