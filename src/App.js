// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListTopics from './components/ListTopic/ListTopics';
import Card from './components/Card';
import ListWords from './components/ListWords';
import Slider from './components/Slider/Slider';

function App() {
  const allWords = [
    {
      id: 1,
      word: 'flower',
      transcription: '[ˈflaʊə(r)]',
      translation: 'цветок',
      topic: 'nature'
    },
    {
      id: 2,
      word: 'grass',
      transcription: '[ɡrɑːs]',
      translation: 'трава, газон',
      topic: 'nature'
    },
    {
      id: 3,
      word: 'bunch',
      transcription: '[bʌntʃ]',
      translation: 'пучок, связка',
      topic: 'nature'
    },
    {
      id: 4,
      word: 'tree',
      transcription: '[tri:]',
      translation: 'дерево',
      topic: 'nature'
    },
    {
      id: 5,
      word: 'birch',
      transcription: '[bə:tʃ]',
      translation: 'береза',
      topic: 'nature'
    },
    {
      id: 6,
      word: 'pine',
      transcription: '[paɪn]',
      translation: 'сосна',
      topic: 'nature'
    },
    {
      id: 7,
      word: 'glade',
      transcription: '[ɡleɪd]',
      translation: 'поляна',
      topic: 'nature'
    },
    {
      id: 8,
      word: 'needles',
      transcription: '[ɡleɪd]',
      translation: 'хвоя',
      topic: 'nature'
    },
    {
      id: 9,
      word: 'lawn',
      transcription: '[lɔ:n]',
      translation: 'газон',
      topic: 'nature'
    },
    {
      id: 10,
      word: 'petal',
      transcription: '[ˈpetl]',
      translation: 'лепесток',
      topic: 'nature'
    }
  ];
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <div className='list'>
            <button type="button" id="add" className="add">+</button>
            <h3>Слова</h3>
            <div>
              {
                allWords.map((item) => {
                  return (
                    <ListWords
                      id={item.id}
                      word={item.word}
                      transcription={item.transcription}
                      translation={item.translation}
                      topic={item.topic}
                    />
                  )
                })
              }
            </div>
          </div>
        </aside>
        <Slider />
        {/* <div className='result-block'>
          <div className='res'><img src='./images/heart.png' width='18px' />выучено</div>
          <div className='res'><img src='./images/refresh.png' width='18px' />повторить</div>
          <div className='res'><img src='./images/cross-circle.png' width='18px' />не знаю</div>
        </div>
        <ListTopics /> */}
      </main>
      <footer>
        <div className='footer'></div>
      </footer>
    </div>
  );
}

export default App;
