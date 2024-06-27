import { createContext } from "react";

const AllWordsContext = createContext({
    words: [],
    fetchWords: () => { },
    addWord: () => { },
    fixWord: () => { },
    deleWord: () => { },
});

export default AllWordsContext;

//здесь задан начальный контекст