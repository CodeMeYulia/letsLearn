import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import About from './components/About/About';
import Learn from './components/Learn/Learn'
import ListTopics from './components/ListTopic/ListTopics';
import Card from './components/Card';
import Slider from './components/Slider/Slider';


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
          <div className='footer'></div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
