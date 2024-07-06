import { wordsStore } from "../../stores/wordsStore";

function MakeNewWord({ word, editing, fixedId }) {
    const { fixWord } = wordsStore;
    const [isDisabled, setIsDisabled] = useState(true);
    const handleEsc = () => fixedId(null);

    //проверка после изменений формы
    const checkEmpty = () => {
        let inputs = document.getElementsByClassName("inputs");
        let empty = 4;

        for (let i = 0; i < inputs.length; i++) {
            const userWord = inputs[i].ariaValueMax;

            //обводка пустого поля ввода
            if (userWord !== "") {
                inputs[i].classList.remove("incorrect");
                empty -= 1;
            } else {
                inputs[i].classList.add("incorrect")
            }

            //блокировка кнопки save, если есть пустые поля инпутов
            if (empty === 0) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true)
            }
        }
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const id = editingId;
        const tags = "";
        const tags_json = [];
        const fixedWord = { id, english, transcription, russian, tags, tags_json };
        console.log(fixedWord);
        fixWord(fixedWord);
        updateId(null);
    }

    const [english, setEnglish] = useState("");
    const [transcription, setTranscription] = useState("");
    const [russian, setRussian] = useState("");
    const [topic, setTopic] = useState("");

    useEffect(() => {
        if (fixedId === word.id) {
            setEnglish(word.english)
            setTranscription(word.transcription)
            setRussian(word.russian)
            setTopic(word.topic)
        }

    }, [fixedId, word])

    return (
        <form className={style.pointEdit} onSubmit={handleEditSubmit} onChange={checkEmpty}>
            <input type="text" className="inputs" name="english" onChange={(e) => setEnglish(e.target.value)} value={english} placeholder={word.english} minLength="2" pattern="^[a-z]{1,15}$" />
            <input type="text" className="inputs" name="transcription" onChange={(e) => setTranscription(e.target.value)} value={transcription} placeholder={word.transcription} minLength="2" pattern="^\[[a-zθʌəôʃēɔˈ:]{1,15}\]$" />
            <input type="text" className="inputs" name="russian" onChange={(e) => setRussian(e.target.value)} value={russian} placeholder={word.russian} minLength="4" pattern="^[а-я]{1,15}$" />
            <input type="text" className='inputs' name="topic" onChange={(e) => setTopic(e.target.value)} value={topic} placeholder={word.topic ? word.topic : "topic"} minLength="2" pattern="^[а-я]{1,15}$" />
            <div>
                <button type='submit' id="save" className="save" disabled={isDisabled}> сохр. </button>
                <button type='button' id="esc" className="esc" onClick={handleEsc}>отм.</button>
            </div>
        </form>
    )
}

export default MakeNewWord;