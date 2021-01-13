import React, { Component } from 'react';
import CounterModel from '../models/counter.model.js'

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2']
    };

    onClick() {
        let person = new CounterModel();
        console.log(person);
        person.value = 5;
        console.log(person);
    }
    
    render() { 
        return (
        <div>
            <span>{ this.formatCount() }</span>
            <h1>Hello World</h1>
            <button onClick={this.onClick} className='btn btn-primary m-2'>Click me</button>
        </div>);
    }

    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;