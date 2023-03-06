import './App.css';
import React, {useState} from 'react'
import NewQuiz from './components/NewQuiz';
import Quiz from './components/Quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [numberOfQuestions, setNumberOfQuestions] = useState(5)
  const [selectedCategory, setSelectedCategory] = useState('10');

  function runQuiz(numOfQuestions) {
    setQuizStarted(true)
  }

  function newQuiz() {
    setQuizStarted(false)
  }


  function handleSetNumberOfQuestions(numOfQuestions) {
    setNumberOfQuestions(numOfQuestions)
  }

  function handleSetCategory(category) {
    setSelectedCategory(category)
  }


  return (
    <div className="App">
      {quizStarted ?  
      <Quiz newQuiz={newQuiz} 
      numberOfQuestions={numberOfQuestions}
      selectedCategory={selectedCategory}/> 
      : 
      <NewQuiz runQuiz={runQuiz} 
        handleSetNumberOfQuestions={handleSetNumberOfQuestions} 
        numOfQuestions={numberOfQuestions}
        handleSetCategory={handleSetCategory}
        selectedCategory={selectedCategory}  />}  
    </div>
  );
}

export default App;
