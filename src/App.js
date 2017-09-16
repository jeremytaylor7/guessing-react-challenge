import React, { Component } from 'react';
import Form from './form.js';
import './App.css';
import Button from './button.js'

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
      answer: Math.floor(Math.random() * 100) + 1,
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
  gameReset = () => {
    this.setState({
      history: [],
      currentFeedback: 'Good Luck',
      answer: Math.floor(Math.random() * 100) + 1
    })
  }
  checkAnswer = () => {
    console.log(this.state);
    const guess = Number.parseInt(this.state.input);
    const winner = this.state.answer;
    this.state.history.push(guess);
    const difference = Math.abs(guess - this.state.answer);

    this.setState({ recent: guess });
    if (difference >= 30) {
      this.setState({ currentFeedback: this.state.feedbackOptions[0].msg })
    }
    else if (difference >= 1) {
      this.setState({ currentFeedback: this.state.feedbackOptions[1].msg })
    }
    else if (guess === winner) {
      this.setState({ currentFeedback: this.state.feedbackOptions[2].msg })
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
        <p>{this.state.history.join(' ')}</p>
        <Button reset={this.gameReset} />
      </div>
    );
  }
}


