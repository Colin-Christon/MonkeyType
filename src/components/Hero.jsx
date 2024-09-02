import React, { Component } from 'react';
import TextAreaWithRestart from './TextArea';
import Commands from './Commands';

export default class Hero extends Component {
  render() {
    return (
        <div className='hero'>
        <TextAreaWithRestart/>
        <Commands/>
        </div>
    );
  }
}
