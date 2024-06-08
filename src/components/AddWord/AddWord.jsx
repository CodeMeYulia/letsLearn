import React, { useState } from "react";
import style from './AddWord.module.css'

function AddWord({ handleAddWord }) {

    return (
        <button type="click" className={style.add} onClick={handleAddWord} >+</button>
    )
}

export default AddWord;