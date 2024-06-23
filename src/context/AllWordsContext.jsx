import { createContext } from "react";

const AllWordsContext = createContext({
    words: [],
    fetchWords: () => { },
    addWord: () => { },
    updateWord: () => { },
    deleteWord: () => { },

});

export default AllWordsContext;

//здесь задан начальный контекст