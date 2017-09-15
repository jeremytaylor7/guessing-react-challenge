import React, { Component } from 'react';
import Form from './form.js';
import './App.css';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(1, 100))


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 0,
      recent: 0,
      answer: 20,
      history: [],
      currentFeedback: '',
      feedbackOptions: [{
        msg: 'cold'
      },
      {
        msg: 'hot'
      },
      {
        msg: 'WINNAR!'
      }
      ]
    }
  }
  checkAnswer() {
    console.log(this.state);
    const guess = Number.parseInt(this.state.input);
    const winner = this.state.answer;
    this.state.history.push(guess);
    this.setState({ recent: guess });
    if (guess === winner) {
      this.setState({ currentFeedback: this.state.feedbackOptions[2].msg })
    }
    else {
      alert('wrong answer!');
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Guessing Game</h2>
          <h3>{this.state.currentFeedback}</h3>
        </div>
        <p className="App-intro">
          choose any integer from 1 - 100!
        </p>
        <Form changeInput={text => { this.setState({ input: text }) }}
          submitGuess={() => { this.checkAnswer() }} />
      </div>
    );
  }
}


