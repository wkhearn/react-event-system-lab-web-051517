// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  buddyFocus = () => {
    console.log('Good!');
  }

  buddyNotFocus = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button type='password' onFocus={this.buddyFocus} onBlur={this.buddyNotFocus}></button>
    )
  }
}
