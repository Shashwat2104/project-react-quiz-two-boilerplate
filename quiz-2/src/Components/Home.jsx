import { Component } from "react";
import Quiz from "./Quiz";
import "./Home.css";

export default class Home extends Component {
  state = {
    isQuizStarted: false,
  };

  handlePlay = () => {
    this.setState({
      isQuizStarted: true,
    });
  };

  renderContent = () => {
    const { isQuizStarted } = this.state;

    return isQuizStarted ? (
      <Quiz />
    ) : (
      <button onClick={this.handlePlay}>Play</button>
    );
  };
  render() {
    return (
      <div className="homepage">
        <h2>Quiz App</h2>
        {this.renderContent()}
      </div>
    );
  }
}
