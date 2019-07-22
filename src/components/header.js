import React, { Component } from "react";
import "./Header.css";
import HeaderSearch from "./HeaderSearch";

export default class Header extends Component {
  render() {
    return (
      <div className="header-elements">
        <header className="header">
          {"DNA Transcription & Translation Tool"}
          <HeaderSearch id="header-search" searchFn={this.props.searchFn} />
        </header>
      </div>
    );
  }
}
