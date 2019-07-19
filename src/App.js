import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Transcription from "./components/Transcription";
import Translation from "./components/Translation";
import UserLibrary from "./components/UserLibrary";
import { codonDict } from "./components/CodonDict";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userArr: [],
      userInput: {
        name: "Default",
        DNA: "Please add DNA bases",
        RNA: "Please transcribe your DNA",
        aminoAcids: "Please translate your DNA"
      }
    };
    this.tLateFn = this.tLateFn.bind(this);
    this.tScripFn = this.tScripFn.bind(this);
    this.saveFn = this.saveFn.bind(this);
    this.deleteFn = this.deleteFn.bind(this);
  }

  //--------------------COMPONENTDIDMOUNT()------------------------------//

  componentDidMount() {
    //Gets [] from server/userLib
    axios.get("./api/geneticmaterial").then(res => {
      this.setState({ userArr: res.data });
    });
  }

  //-----------------------FUNCTIONS-------------------------------------//

  resetUserInput() {
    this.setState({
      userInput: {
        name: "Default",
        DNA: "Please add DNA bases",
        RNA: "Please transcribe your DNA",
        aminoAcids: "Please translate your DNA"
      }
    });
  }

  //Fn for translate button in TLateButton.js
  tLateFn(dna) {
    let codon = "";
    let aa = "";
    while (dna.length > 2) {
      codon = dna.splice(0, 3);
      aa = aa + codonDict(codon);
    }
    return aa
  }

  //Fn for translate button in TLateButton.js
  tScripFn(dna) {
    return dna.map(x => (x === "T" ? (x = "U") : null));
  }

  //---------------------AXIOS PROMISES-------------------------------------//

  deleteFn(id) {
    axios.delete(`/api/geneticmaterial/${id}`).then(res => {
      this.setState({ userArr: res.data });
    });
  }

  createFn(body) {
    axios.post("/api/geneticmaterial/", body).then(res => {
      this.setState({ userArr: res.data });
    });
  }

  saveFn(id, body) {
    axios.put(`/api/geneticmaterial/${id}`, body).then(res => {
      this.setState({ userArr: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserInput
          userArr={this.state.userArr}
          tLateFn={this.tLateFn}
          tScripFn={this.tScripFn}
          createFn={this.createFn}
        />
        <Transcription userArr={this.state.userArr} />
        <Translation userArr={this.state.userArr} />
        <UserLibrary
          userArr={this.state.userArr}
          saveFn={this.saveFn}
          deleteFn={this.deleteFn}
        />
      </div>
    );
  }
}

export default App;
