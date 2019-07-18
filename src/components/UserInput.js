import React, { Component } from "react";
import TLateButton from "./TLateButton";
import TScripButton from "./TScripButton";

export default class UserInput extends Component {
  render() {
    return (
      <div className="userIn">
        <div className="userIns">
            <input
              className="userIn-name"
              type="text"
              onChange={e => this.props.handleName(e.target.value)}
            />
            <input
              className="userIn-dna"
              type="text"
              onChange={e => this.props.handleDNA(e.target.value)}
            />
        </div>
        <div className="userIn-buttons">
          <TLateButton tLateFn={this.props.tLateFn} />
          <TScripButton tScripFn={this.props.tScripFn} />
        </div>
      </div>
    );
  }
}
