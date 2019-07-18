import React from 'react';
import './App.css';
import Header from "./components/Header"
import TLateButton from "./components/TLateButton"
import TScripButton from "./components/TScripButton"


function App() {
  return (
    <div className="App">
      <Header/>
      <TLateButton/>
      <TScripButton/>
    </div>
  );
}

export default App;
