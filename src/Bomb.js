// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {

    if (this.state.secondsLeft === 0) {
      return (<h1>Boom!</h1>)
    }
    else {
    return (
      <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    )
  }
}
}
