import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Transcription from "./components/Transcription";
import Translation from "./components/Translation";
import UserLibrary from "./components/UserLibrary";
import { codonDict } from "./components/CodonDict";
// import {ToastContainer, toast} from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      userArr: []
    };
    this.tLateFn = this.tLateFn.bind(this);
    this.tScripFn = this.tScripFn.bind(this);
    this.saveFn = this.saveFn.bind(this);
    this.deleteFn = this.deleteFn.bind(this);
    this.createFn = this.createFn.bind(this);
    this.searchFn = this.searchFn.bind(this);
  }
  // notify = () => toast("wow")

  //--------------------COMPONENTDIDMOUNT()------------------------------//

  componentDidMount() {
    //Gets [] from server/userLib
    axios.get("./api/geneticmaterial").then(res => {
      this.setState({ userArr: res.data });
    });
  }

  //-----------------------FUNCTIONS-------------------------------------//

  //Fn for translate button in TLateButton.js
  tLateFn(dna) {
    let codons = dna.match(/.{1,3}/g);
    return codons.map(c => codonDict[c]);
  }

  //Fn for translate button in TLateButton.js
  tScripFn(dna) {
    return dna.replace(/T/gi, "U");
  }

  //---------------------AXIOS PROMISES-------------------------------------//

  deleteFn(id) {
    axios
      .delete(`/api/geneticmaterial/${id}`)
      .then(res => {
        this.setState({ userArr: res.data });
      })
      .catch(() => alert("Nope"));
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

  //QUERY
  searchFn(name) {
    if (name.length > 0)
      axios
        .get(`/api/geneticmaterialname?name=${name}`)
        .then(res => {
          this.setState({ userArr: res.data });
        })
        .catch(() => alert("Nah"));
  }

  //----------------------------RENDER-----------------------------------//

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.notify("wow")}>wowz</button>
        <ToastContainer containerId={'A'}/> */}
        <Header searchFn={this.searchFn} />
        <UserInput
          userArr={this.state.userArr}
          tLateFn={this.tLateFn}
          tScriptFn={this.tScripFn}
          createFn={this.createFn}
          searchFn={this.searchFn}
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
