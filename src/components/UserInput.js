import React, { Component } from "react";
import TLateButton from "./TLateButton";
import TScripButton from "./TScripButton";
import BothButton from "./BothButton";

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      DNA: "",
      RNA: "",
      aminoAcids: ""
    };
  }

  create() {
    this.props.createFn({
      name: this.state.name,
      DNA: this.state.DNA,
      RNA: this.state.RNA,
      aminoAcids: this.state.aminoAcids
    });
  }
  handleDNA(val) {
    this.setState({ DNA: val.toUpperCase() });
  }

  handleName(val) {
    this.setState({ name: val });
  }

  handleTScriptClick = () => {
    this.props.tScriptFn(this.props.userObj.DNA)
    this.props.create(this.props.userObj)
}

  render() {
    return (
      <div className="userIn">
        <div className="userIns">
          <input
            className="userIn-name"
            type="text"
            onChange={e => this.handleName(e.target.value)}
            placeholder="Enter Gene Name"
          />
          <input
            className="userIn-dna"
            type="text"
            onChange={e => this.handleDNA(e.target.value)}
            placeholder="Enter DNA sequence"
          />
        </div>
        <div className="userIn-buttons">
          <TLateButton
            tLateFn={this.props.tLateFn}
            userObj={this.state}
            create={this.create}
          />
          <button onClick={() => this.handleTScriptClick()}>Transcribe DNA</button>

          {/* <TScripButton 
            tScripFn={this.props.tScripFn} 
            userObj={this.state}
            create={this.create} /> */}
          <BothButton
            tLateFn={this.props.tLateFn}
            tScripFn={this.props.tScripFn}
            userObj={this.state}
            create={this.create}
          />
        </div>
      </div>
    );
  }
}
