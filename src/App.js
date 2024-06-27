import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Learn from './components/Learn/Learn';
import AllWordsContext from './context/AllWordsContext';
import Form from "./components/Form/Form";
// import EditForm from "./components/Form/EditForm";

function App() {
  //изначальный массив слов
  const [words, setWords] = useState([]);
  // состояние индикатора загрузки
  const [loading, setLoading] = useState(true);
  //состояние ошибки
  const [error, setError] = useState(null);


  const fetchWords = async () => {
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
        setWords(data)
        setLoading(false)
      })
      .catch(error => setError(error))
  }

  const addWord = async (myWord) => {
    const response = await fetch("./api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myWord),
    });
    const data = await response.json();
    setWords((words) => [...words, data])
  }

  //обновление списка после внесения изменений
  const fixWord = async (fixedWord) => {
    console.log(fixWord);
    const response = await fetch(`/api/words/${fixedWord.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fixedWord)
    });
    const data = await response.json();
    console.log(data);
    setWords(words.map((word) => (word.id === fixedWord.id ? data : word)))
  };

  // удаление слова
  const delWord = async (id) => {
    await fetch(`/api/words/${id}/delete`, {
      method: "POST",
    });
    setWords(words.filter((word) => word.id !== id))
  };

  const [formVisible, setFormVisible] = useState(false);
  let myForm;
  if (formVisible) {
    myForm = <div className=""><Form /></div >
  } else { myForm = <></> }

  //добавить форму для ввода нового слова
  const addForm = () => {
    setFormVisible(true);
  }

  return (
    <AllWordsContext.Provider
      value={{
        words: words,
        setWords,
        fetchWords: fetchWords,
        fixWord,
        delWord,
        loading,
        error,
        myForm: myForm,
        addForm,
        setFormVisible,
        formVisible: formVisible,
        addWord,
      }}
    >
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='/letslearn' element={<Learn />} />
          </Routes>
          <footer>
            <div className='footer'>
              <div>ItGirlSchool</div>
              <div>2024</div>
              <div>@codemeyulia</div>
            </div>
          </footer>
        </div>
      </Router>
    </AllWordsContext.Provider>
  );
}

export default App;
