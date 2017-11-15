import React, { Component } from 'react';

class Clicker extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div className='clicker' onClick={this.incrementCount}>
                {this.state.count}
            </div>
        )
    }
}
export default Clicker;