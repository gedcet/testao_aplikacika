import { useState } from 'react';
import './App.css';
import AddQuestion from './components/AddQuestion.jsx';
import ShowQuestions from './components/showQuestions';
import WindowEditQuestion from './components/WindowEditQuestion';
import WindowQuiz from './components/WindowQuiz';
import WindowStatus from './components/WindowStatus';
import AddNewUser from './components/AddNewUser'
import WindowLoginUser from './components/WindowLoginUser';

const App = function ()
{
  const [stateWindowEditQuestion, setStateWindowEditQuestion] = useState({
    text: "labas",
    type: "selectOne",
    answers: [
      { text: "answer 1", correct: true },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: true },
      { text: "answer 4", correct: false }],
  })

  const arrayShowWindow = useState(null)
  const showWindow = arrayShowWindow[0]
  const setShowWindow = arrayShowWindow[1]

  const stateWindowText = useState(null)
  const readStateWindowText = stateWindowText[0]
  const setStateWindowText = stateWindowText[1]

  return (
    <div className="App">

      <button onClick={() => { setShowWindow("AddQuestion") }}>Prideti klausimą </button>
      <button onClick={() => { setShowWindow("ShowQuestionForMe") }}>Peržiūreti klausimus </button>
      {/* <button onClick={() => { setShowWindow("ShowQuizForMe") }}>Pradeti viktoriną </button> */}
      <button onClick={() => { setShowWindow("ShowWindowCreateUser") }}>Naujo vartotojo sukurimas </button>
      <button onClick={() => { setShowWindow("ShowWindowLoginUser") }}>Login kaip vartotojas </button>

      {showWindow === "AddQuestion" ?//klausimu ivedimas
        <AddQuestion closeButton={setShowWindow} />
        :
        null
      }

      {showWindow === "WindowEditQuestion" ?//klausimu redagavimas
        <WindowEditQuestion
          setShowWindow={setShowWindow}
          state={stateWindowEditQuestion}
          setState={setStateWindowEditQuestion}
        />
        :
        null
      }

      {showWindow === "ShowQuestionForMe" ?//atidaro klausimus
        <ShowQuestions
          setStateWindowEditQuestion={setStateWindowEditQuestion}
          setShowWindow={setShowWindow}
        />
        :
        null
      }

      {showWindow === "ShowQuizForMe" ?//atidaro viktorinos klausima
        <WindowQuiz
          setStateWindowEditQuestion={setStateWindowEditQuestion}
          setShowWindow={setShowWindow}
          setStateWindowText={setStateWindowText}
        />
        :
        null
      }
      
      {showWindow === "ShowWindowCreateUser" ?//kuria nauja vartotoja
        <AddNewUser
          text={readStateWindowText}
          setStateWindowText={setStateWindowText}
        />
        :
        null
      }

{showWindow === "ShowWindowLoginUser" ?//vartotojas loginas
        <WindowLoginUser
        setShowWindow={setShowWindow}          
        />
        :
        null
      }
      
      {readStateWindowText !== null ?//uzdaryti rezultatu langa
        <WindowStatus
          text={readStateWindowText}
          setStateWindowText={setStateWindowText}
        />
        :
        null
      }

    </div>
  );
}

export default App;
