import React, { useEffect, useState } from "react";

export default function Words() {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => {
                setWords(response)
                setLoading(false) //выключ индикатор загрузки
            })
    }, []);

    return (
        <div>
            {loading ? (<p>Loading...</p>) : (
                <ol>
                    {
                        words.map(word => {
                            return <li key={word.id}>
                                {word.english} - {word.russian}
                            </li>
                        })
                    }
                </ol>
            )}
        </div>
    )
}