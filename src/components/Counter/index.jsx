import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);

    this.state={
      value:0
    }
  }
  clickplus=()=>{
    const {value}=this.state;

    this.setState({
        value:value+1
    })
  }
  clickminus=()=>{
    const {value}=this.state;

    this.setState({
        value:value-1
    })
  }
  render() {
    const {value}=this.state;
    return (
      <div>
        <h1>Count: {value}</h1>
        <button onClick={this.clickplus}>+</button>
        <button onClick={this.clickminus}>-</button>

      </div>
    );
  }
}

export default Counter;
