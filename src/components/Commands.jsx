import React, { Component } from 'react';
import "../style/Commands.css";

export default class Commands extends Component {
  render() {
    return (
      <div className="commands">
          <div className="commands-container">
            <div className="commands-header">
              <span className="off">Off</span>
              <span className="restart">Restart</span>
            </div>
            <div className="commands-list">
              <p>esc</p>
              <p>ctrl+shift+p</p>
              <p>new test</p>
            </div>
        </div>
      </div>
    );
  }
}
