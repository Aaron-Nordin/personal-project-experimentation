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
    this.createFn = this.createFn.bind(this);
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
    let codons = dna.match(/.{1,3}/g)
    console.log(codons)
    return codons.map(c => codonDict[c])

    // let aa = "";
    // for (let i = 0; i < dna.length; i+3) {
    //   let codon = dna.charAt(i, i+1, i+2)
    //   console.log(codon)
    //   aa = aa + codonDict[codon]
    //   console.log(codon)
    //   console.log(aa)
    // }
    // return aa
  }

  //Fn for translate button in TLateButton.js
  tScripFn(dna) {
    return dna.split("").map(x => (x === "T" ? (x = "U") : null)).join("");
  }

  //---------------------AXIOS PROMISES-------------------------------------//

  deleteFn(id) {
    axios.delete(`/api/geneticmaterial/${id}`).then(res => {
      this.setState({ userArr: res.data });
    });
  }

  createFn(body) {
    console.log(body)
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
          tScriptFn={this.tScripFn}
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
