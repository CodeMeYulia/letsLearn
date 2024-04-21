import React from "react";
import style from './About.module.css';

function About() {
    return (
        <div>
            <h2 className={style.h2}>About</h2>
            <p> Learn words using cards. It`s easy.</p>
            <p> You watch word in english first. Try to remember how this word sounds in russian.</p>
            <p> Check yourself turning card.</p>
            <br />
            <p> Change topics of words.</p>
            <p> If you need change, delete or add word use buttons.</p>
        </div>
    )
}

export default About;