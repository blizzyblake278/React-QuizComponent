import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
    handleClick(buttonText) {
        if (buttonText == this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
    }
    render() {

        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">

                    {/*itterates through each of the ?'s properties (answer options) by using a map that captures 
                    the answer_option and index as local variables*/}
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_options, index) => {
                            return <QuizQuestionButton key={index} button_text={answer_options} />
                        }, onClick(this.handleClick.bind(this)))}

                    </ul>
                </section>
            </main >);
    }
}


export default QuizQuestion