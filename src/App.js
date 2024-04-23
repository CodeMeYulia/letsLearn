import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Learn from './components/Learn/Learn'

function App() {

  return (
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
  );
}

export default App;
