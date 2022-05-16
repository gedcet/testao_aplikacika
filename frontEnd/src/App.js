import { useState } from 'react';


import './App.css';
import AddQuestion from './components/AddQuestion.jsx';
import ShowQuestions from './components/showQuestions';
import WindowEditQuestion from './components/WindowEditQuestion';

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

  return (
    <div className="App">
      
      <button onClick={() => {setShowWindow("AddQuestion")}}>Prideti klausima </button>
      <button onClick={() => {setShowWindow(null)}}>Uzdaryti langa </button>

      {showWindow === "AddQuestion" ?
      <AddQuestion />
        :
        null
      }

      {showWindow === "WindowEditQuestion" ?
        <WindowEditQuestion
          setShowWindow={setShowWindow}
          state={stateWindowEditQuestion}
          setState={setStateWindowEditQuestion}
        />
        :
        null
      }

      <ShowQuestions setStateWindowEditQuestion={setStateWindowEditQuestion} setShowWindow={setShowWindow} />
    </div>
  );
}

export default App;
