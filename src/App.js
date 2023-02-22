import './App.css';
import React, {useState, useEffect} from 'react'
import NewQuiz from './components/NewQuiz';
import Quiz from './components/Quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false)

  function runQuiz() {
    setQuizStarted(true)
  }


  function newQuiz() {
    console.log("Dsf")
    setQuizStarted(false)
  }

  return (
    <div className="App">
      {quizStarted ?  <Quiz newQuiz={newQuiz}/> : <NewQuiz runQuiz={runQuiz}  />}  
    </div>
  );
}

export default App;
