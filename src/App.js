import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import TLateButton from "./components/TLateButton"
import TScripButton from "./components/TScripButton"


class App extends Component {
  constructor() {
    super()
    this.state = {
      userArr: []
    }
    this.tLateFn = this.tLateFn(this)
    this.tScripFn = this.tScripFn(this)
  }

  tLateFn() {
    return "tLateFn temp"
  }
  
  tScripFn() {
    return "tScripFn temp"
  }
    
  render() {
    return (
      <div className="App">
        <Header/>
        <TLateButton tLateFn={this.tLateFn}/>
        <TScripButton tScripFn={this.tScripFn}/>
      </div>
    );
  }
}

export default App;
