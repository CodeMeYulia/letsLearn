// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListTopics from './components/ListTopics';
import Card from './components/Card';
import ListWords from './components/ListWords';

function App() {
  const allWords = [
    {
      id: 1,
      word: 'flower',
      transcription: '[ˈflaʊə(r)]',
      translation: 'цветок',
      topic: 'nature',
    },
    {
      id: 2,
      word: 'grass',
      transcription: '[ɡrɑːs]',
      translation: 'трава, газон',
      topic: 'nature',
    },
    {
      id: 3,
      word: 'bunch',
      transcription: '[bʌntʃ]',
      translation: 'пучок, связка',
      topic: 'nature',
    }
  ];
  //определяем случайное слово в тренировочной карточке
  const currentCard = allWords[Math.floor(Math.random() * allWords.length)];

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
        <div>
          <Card
            id={currentCard.id}
            word={currentCard.word}
            transcription={currentCard.transcription}
            translation={currentCard.translation}
            topic={currentCard.topic}
          />
        </div>

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
