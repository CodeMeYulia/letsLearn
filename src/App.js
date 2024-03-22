import logo from './logo.svg';
import './App.css';
import ListTopics from './components/ListTopics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
      </header>
      <main>
        <ListTopics />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
