import React from 'react'
import '../styles/NewQuiz.css'

function NewQuiz(props) {
    return (
        <div className="intro_quiz">
                <h1 className="intro_quiz__heading">Quizicall </h1>
                <p className="intro_quiz__description">Some description if needed</p>
                <button className='intro_quiz__button button' onClick={props.runQuiz}>Start Quiz</button>
        </div>
    )
}
export default NewQuiz;