import React, { Component } from "react";

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

  handleTLateClick()  {
    let aa = this.props.tLateFn(this.state.DNA)
    this.setState({aminoAcids: aa})
    this.props.createFn(this.state)
  }

  handleTScriptClick () {
    let rna = this.props.tScriptFn(this.state.DNA);
    this.setState({RNA: rna})
    this.props.createFn(this.state);
  };

  handleBothClick() {
    let aa = this.props.tLateFn(this.state.DNA)
    let rna = this.props.tScriptFn(this.state.DNA);
    this.setState({aminoAcids: aa, RNA: rna})
    this.props.createFn(this.state)
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
          <button onClick={() => this.handleTLateClick()}>Translate DNA</button>
          <button onClick={() => this.handleTScriptClick()}>Transcribe DNA</button>
          <button onClick={() => this.handleBothClick()}>Both</button>
          />
        </div>
      </div>
    );
  }
}
