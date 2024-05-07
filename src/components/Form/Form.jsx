import React, { useState } from 'react';
import style from './Form.module.css';

function Form(props) {
    const { id, word, transcription, translation, topic, onSubmit } = props;
    console.log(props);


    return (
        <form className={style.point} >
            <input type="num" value={id} className={style.idNew} />
            <input type="text" value={word} />
            <input type="text" value={transcription} />
            <input type="text" value={translation} />
            <input type="text" value={topic} />
            <div>
                <button type='submit' id="del" className="save"
                // onSubmit={handleSubmit}
                > сохр. </button>
                <button type='button' id="esc" className="esc" >отм.</button>
            </div>
        </form>
    )
}

export default Form;