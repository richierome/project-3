import React, { Component } from 'react';
import "./Timer.css";

class Timer extends Component {
         constructor(props){
         super(props)
         this.state = {
        count: 0
        }
    }
    render () {
        const {count} = this.state
        return (
        <div>
            <h5>Timer: {count}</h5>
        </div>

        )
    }

    componentDidMount () {
            this.myInterval = setInterval(() => {
           this.setState({count: this.state.count + 1})
         }, 1000)
     }
}

   
export default Timer;

