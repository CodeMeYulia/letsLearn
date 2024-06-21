import React, { useEffect, useState } from "react";

export default function Words() {
    let [words, setWords] = useState([]);

    useEffect(() => {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => setWords(words = response))
    }, []);

    return (
        <ol>
            {
                words.map(word => {
                    return <li key={word.id}>
                        {word.english} - {word.russian}
                    </li>
                })
            }
        </ol>
    )
}