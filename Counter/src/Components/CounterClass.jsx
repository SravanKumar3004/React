import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    
    Increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    
    Decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        return (
            <>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </>
        );
    }
}

export default Counter;