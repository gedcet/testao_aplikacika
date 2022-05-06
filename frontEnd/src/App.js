import './App.css';
import AddQuestion from './components/AddQuestion.jsx';
import ShowQuestion from './components/showQuestions';

const App = function ()
{
  return (
    <div className="App">
      <AddQuestion></AddQuestion>
      <ShowQuestion></ShowQuestion>
    </div>
  );
}

export default App;
