import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }
    showNextQuestion()
    render() {
        this.setState(quiz_position, this.state + 1)
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
        //sends data for the 1st question over to tthe QuizQuestion comp. 
        return <div>
            {isQuizEnd ? <QuizEnd />: 
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)}/>}           
        
        
        </div>
    }

};
export default Quiz;


