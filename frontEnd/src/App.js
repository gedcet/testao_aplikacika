import './App.css';
import AddQuestion from './components/AddQuestion.jsx';
import ShowQuestions from './components/showQuestions';

const App = function ()
{
  return (
    <div className="App">
      <AddQuestion></AddQuestion>
      <ShowQuestions></ShowQuestions>
    </div>
  );
}

export default App;
