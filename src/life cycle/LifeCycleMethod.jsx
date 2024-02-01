import React, { Component } from 'react'
import Unmount from './Unmount';

export default class LifeCycleMethod extends Component {
    constructor(){
        super();
        console.log("-----constructor-----");
        this.state={
            count:0
        };

    }

    componentDidMount(){
        console.log("----- Mount-----");
        
    }
    componentDidUpdate(){
        console.log("----- Update-----");
    }
  render() {
    console.log("-----render-----");
    return (
      <div> 
        <Unmount />
        <h1>LifeCycleMethod</h1>
        <h1>Count is{(this.state.count)}</h1>
        {/* this.setState(1) //remeber*/}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Inc</button>
        </div>
    );
  }
}
