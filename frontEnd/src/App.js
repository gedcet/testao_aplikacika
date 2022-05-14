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

  return (
    <div className="App">

      <AddQuestion />

      <WindowEditQuestion
        state={stateWindowEditQuestion}
        setState={setStateWindowEditQuestion}
      />

      <ShowQuestions setStateWindowEditQuestion={setStateWindowEditQuestion} />
    </div>
  );
}

export default App;
