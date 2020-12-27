import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {


    render() {
        let letters = []
        for (let obj in this.props.letters)
            letters.push(obj)

        return (
            <div>
                Avaliable Letters:
                <div>{letters.map(l => this.props.letters[l] ? <span className="selected"><Letter letter={l}/> </span> : <span><Letter letter={l} selectLetter={this.props.selectLetter}/> </span>)}</div>
            </div>
        );
    }
}

export default Letters;