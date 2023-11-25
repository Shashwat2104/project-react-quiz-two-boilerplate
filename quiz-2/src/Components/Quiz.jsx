import { Component } from "react";
import "./Quiz.css";
import quizData from "../Components/resources/quizQuestion.json";
export default class Quiz extends Component {
  state = {
    currentQuestionIndex: 0,
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  };

  handlePreviousClick = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1,
    }));
  };

  render() {
    const { currentQuestionIndex } = this.state;
    const currentQuestion = quizData[currentQuestionIndex];

    return (
      <div className="parent-div">
        <div className="main-container">
          <div className="question-container">
            <div className="question-number">
              {currentQuestionIndex + 1} of {quizData.length}
            </div>
            <h3>Question</h3>
            <p>{currentQuestion.question}</p>
          </div>
          <div className="option-container">
            <div className="option-parent">
              {[currentQuestion.optionA, currentQuestion.optionB].map(
                (option, index) => (
                  <div key={index} className="option">
                    {option}
                  </div>
                )
              )}
            </div>
            <div className="option-parent">
              {[currentQuestion.optionC, currentQuestion.optionD].map(
                (option, index) => (
                  <div key={index} className="option">
                    {option}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="button-container">
            <button
              className="previous"
              onClick={this.handlePreviousClick}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={this.handleNextClick}
              disabled={currentQuestionIndex === quizData.length - 1}
            >
              Next
            </button>
            <button className="quit" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
