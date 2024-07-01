import { makeAutoObservable } from "mobx";

//класс хранилища со списком слов
class WordsStore {
    words = [];
    // login = false;
    error = false;
    loading = true;
    constructor() {
        makeAutoObservable(this);
        // this.fetchWords = this.fetchWords.bind(this);
    }

    // получение данных с сервера
    fetchWords = async () => {
        await fetch(`./api/words`)
            .then(response => {
                if (response.ok) {
                    //статус 200
                    const data = response.json();
                    return data;
                } else {
                    throw new Error('Ups...Something went wrong');
                }
            })
            .then((data) => {
                this.words = data;
                this.loading = false;
            })
            .catch(error => this.error = error)
    }

    // fetchWords = async () => {
    //     const response = await fetch("/api/words");
    //     const data = await response.json();
    //     this.words = data;
    //     this.loading = false;
    // };

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

    //удалить
    delWord = async (id) => {
        await fetch(`/api/words/${id}/delete`, {
            method: "POST",
        });
        this.words = this.words.filter((word) => word.id !== id);
    }

    //обновление списка после внесения изменений
    fixWord = async (fixedWord) => {
        // console.log(JSON.stringify(fixedWord));
        try {
            const response = await fetch(`/api/words/${fixedWord.id}/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(fixedWord)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // console.log(data);
            if (data && data.id) {
                //обновляем состояние
                this.words = this.words.map((word) => (word.id === fixedWord.id ? data : word))
            } else {
                throw new Error('Server did not return updates word object')
            }

        }
        catch (error) {
            console.error("Ошибка при обновлении слова:", error)
        }
    };
}



//создаем экземпляр хранилища
const wordsStore = new WordsStore();
export default wordsStore;
//отслеживаем его состояние
