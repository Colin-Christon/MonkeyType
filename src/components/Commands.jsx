import React, { Component } from 'react';
import "../style/Commands.css";

export default class Commands extends Component {
  render() {
    return (
      <div className="commands">
          <p><span className='cmdText'> OFF</span> - restart test</p>
          <p>
              <span className='cmdText'> ESC</span>&nbsp;or&nbsp;
              <span className='cmdText'>Ctrl + C</span> - exit test
          </p>
      </div>
    );
  }
}
