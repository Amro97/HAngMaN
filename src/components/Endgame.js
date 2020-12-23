import React, { Component } from 'react';

class Endgame extends Component {

    render() {
        let score = this.props.score
        let word = this.props.solution.word
        let letters = word.split("")

        if (letters.every(l => this.props.letterStatus[l] === true)) {
            return <div>
                <div>Congratulations! You've Won :)</div>
                <button onClick={this.props.newGame}>Play Again?</button>
            </div>
        }
        if (score < 0) {
            return <div>
                <div>Sorry! You've lost :( The word is {word}</div>
                <button onClick={this.props.newGame}>Play Again?</button>
            </div>
        }
       else return null
    }
}

export default Endgame