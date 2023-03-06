import React from 'react'
import '../styles/NewQuiz.css'

function NewQuiz(props) {

    function handleOptionChange(event) {
        props.handleSetNumberOfQuestions(event.target.value)
    }


    function handleRadioChange(event) {
        console.log(event.target.value)
        props.handleSetCategory(event.target.value);
      };

    return (
        <div className="intro_quiz">
                <h1 className="intro_quiz__heading">Quizicall </h1>
                <p className="intro_quiz__description">Welcome to our quiz of general knowledge app! Test your knowledge and challenge yourself with a wide range of subjects including history, science, literature, art, geography, politics, current events, sports and more. Play individually or with friends and family, and see how you stack up against other players. Are you ready to become a trivia master? Let's begin!</p>
                <button className='intro_quiz__button button' onClick={props.runQuiz}>Start Quiz</button>

         <div>
            <label htmlFor="my-list">Number of questions: </label>
            <select id="my-list" value={props.numOfQuestions} onChange={handleOptionChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
            </select>
           
            <br />
 


            <label>
                Select a category:
                <br />
           
                <input
                type="radio"
                value="10"
                checked={props.selectedCategory === '10'}
                onChange={handleRadioChange}
                />
                Books
                <br />
                <input
                type="radio"
                value="23"
                checked={props.selectedCategory === "23"  }
                onChange={handleRadioChange}
                />
                History
                <br />
                <input
                type="radio"
                value="24"
                checked={props.selectedCategory === '24'}
                onChange={handleRadioChange}
                />
                 Politics
                 <br />
                <input
                type="radio"
                value="9"
                checked={props.selectedCategory === '9'}
                onChange={handleRadioChange}
                />
                 General knowledge
            </label>

        </div>

     

        </div>
    )
}
export default NewQuiz;