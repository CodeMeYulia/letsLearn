import React, { useState } from 'react';
import style from './Form.module.css';

function Form(props) {

    const { id, word, transcription, translation, topic, onSubmit } = props;
    console.log(props);

    return (
        <form className={style.point}>

            <input type="num" value={id} className={style.idNew} required />
            <input type="text" value={word} />
            <input type="text" value={transcription} />
            <input type="text" value={translation} />
            <input type="text" value={topic} />
            <div>
                <button id="del" className="save" onSubmit={onSubmit}> сохр. </button>
                <button id="red" className="esc" >отм.</button>
            </div>
        </form>
    )
}

export default Form;