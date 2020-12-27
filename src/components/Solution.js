import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
        let blankSpace = []
        let word = this.props.solution.word
        for (let letter of word){
            if(this.props.letters[letter.toUpperCase()])
             blankSpace.push(letter)
             else
             blankSpace.push('_ ')
        }
        return (
            <div>
                <div>{blankSpace.map(l => <Letter letter={l} />)}</div>
                <div>{this.props.solution.hint}</div>
            </div>
        );
    }
}

export default Solution;