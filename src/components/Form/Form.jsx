import React from 'react';
import style from './Form.module.css';

function Form({ handleEsc, saveChanges }) {

    return (
        <form className={style.point}>
            <input type="text" placeholder="new word" required />
            <input type="text" placeholder="transcription" required />
            <input type="text" placeholder="translation" required />
            <input type="text" placeholder="topic" required />
            <div>
                <button type='submit' id="save" className="save" onSubmit={saveChanges}> сохр. </button>
                <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
            </div>
        </form>
    )
}

export default Form;