import React, { Component } from 'react'
import Quiz from './Quiz.js'

class QuizQuestion extends Component{

    render(){
        <main>
        <section>
          <p>
              {this.props.quiz_question.instrucitons_text[0]}
          </p>
        </section>
        <section className="buttons">
          <ul>
            <li>
                {this.props.quiz_question.answer_options[0]}
            </li>
          </ul>
        </section>
      </main>
    }
}

export default QuizQuestion