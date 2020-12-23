import React, { Component } from 'react';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import Endgame from './components/Endgame';
import './App.css';


const games = [
  { word: `CODE`, hint: `programming` },
  { word: `LION`, hint: `king of the jungle` },
  { word: `SUN`, hint: `yellow center` }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      index: 0,
      solution: games[0],
      score: 100,

    }
  }
  newGame = () => {
    this.setState({
      index: this.state.index + 1,
      solution: games[this.state.index + 1],
      letterStatus: this.generateLetterStatuses()
    })
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i <= 90; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  selectLetter = (letter) =>{
    let letterStatus = { ...this.state.letterStatus }
    letterStatus[letter] = true
    this.setState({letterStatus})
    if (this.state.solution.word.indexOf(letter) >= 0) {
      this.setState({
        letterStatus,
        score: this.state.score + 5
      })
    }
    else {
      this.setState({
        letterStatus,
        score: this.state.score - 20
      })
    }
  }
 

  render() {
    return (
      <div>
        <Score score={this.state.score}/>
        <Solution letters={this.state.letterStatus} solution={this.state.solution}/>
        <Letters letters={this.state.letterStatus} selectLetter={this.selectLetter}/>
        <Endgame score={this.state.score} letterStatus={this.state.letterStatus} solution={this.state.solution} newGame={this.newGame} />
      </div>
    )
  }
}

export default App;
