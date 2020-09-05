import React, { Component } from 'react';
import quizService from "../quizService";
import QuestionBox from "./questionbox";
import Result from "./Result"

class QuestionBank extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };
  getQuestion =() => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  }

  computeAnswer = (answer, correctAnswer) =>{
    if (answer === correctAnswer){
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    })
  }
  playAgain=() => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0
    })
  }
  
  componentDidMount(){
    this.getQuestion();
  }

  render() {
    return (
      <div>
        {this.state.questionBank.length > 0 && this.state.responses < 5 && this.state.questionBank.map(
          ({question, answers, correct, questionID}) => (
            <QuestionBox 
              question={question} 
              options={answers} 
              key={questionID} 
              selected = {answer => this.computeAnswer(answer, correct)} 
            />
          )
        )}
        {this.state.responses === 5 ? (<Result score={this.state.score} responses={this.state.responses} playAgain={this.playAgain} />) : null }
      </div>
    )
  }
}

export default QuestionBank
