// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListTopics from './components/ListTopics';
import Card from './components/Card';
import ListWords from './components/ListWords';

function App() {
  const AllWords = [
    {
      word: 'flower',
      transcription: '[ˈflaʊə(r)]',
      translation: 'цветок',
      topic: 'nature',
    },
    {
      word: 'grass',
      transcription: '[ɡrɑːs]',
      translation: 'трава, травка, газон',
      topic: 'nature',
    },
    {
      word: 'bunch',
      transcription: '[bʌntʃ]',
      translation: 'пучок, гроздь, связка',
      topic: 'nature',
    }

  ]
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <ListWords />
        </aside>
        <Card
          lang="eng"
          word="meditaton"
          transcription="|medɪˈteɪʃ(ə)n|"
        />
        <div className='result-block'>
          <div className='res'><img src='./heart.png' width='18px' />выучено</div>
          <div className='res'><img src='./refresh.png' width='18px' />повторить</div>
          <div className='res'><img src='./cross-circle.png' width='18px' />не знаю</div>
        </div>
        <ListTopics />
      </main>
      <footer>
        <div className='footer'></div>
      </footer>
    </div>
  );
}

export default App;
