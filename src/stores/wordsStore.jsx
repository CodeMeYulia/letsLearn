import { makeAutoObservable } from "mobx";
// const baseUrl = "http://itgirlschool.justmakeit.ru";

class WordsStore {
    //наше состояние списка
    words = [];
    //login = false;
    //error = false;
    constructor() {
        makeAutoObservable(this)
    }

    fetchWords = async (words) => {
        const response = await fetch("/api/words");
        //статус 200
        if (response.ok) {
            const data = await response.json();
            this.words = data;
        }
    }

    addWord = async (myWord) => {
        const response = await fetch("./api/words/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myWord),
        });
        const data = await response.json();
        this.words.push(data);
    }

    // удалить
    delWord = async (id) => {
        await fetch(`/api/words/${id}/delete`, {
            method: "POST",
        });
        this.words = this.words.filter((word) => word.id !== id);
    }

    fixWord = async (fixedWord) => {
        const response = await fetch(`./api/words/${fixedWord.id}/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fixedWord)
        });
        const data = await response.json();
        this.words = this.words.map((word) =>
            word.id === fixedWord.id ? data : word
        )
    };
}

//экземпляр хранилища
export const wordsStore = new WordsStore();

//     // получение данных с сервера
//     fetchWords = async () => {
//         await fetch(`./api/words`)
//             .then(response => {
//                 if (response.ok) {
//                     //статус 200
//                     const data = response.json();
//                     return data;
//                 } else {
//                     throw new Error('Ups...Something went wrong');
//                 }
//             })
//             .then((data) => {
//                 this.words = data;
//                 this.loading = false;
//             })
//             .catch(error => this.error = error)
//     }
