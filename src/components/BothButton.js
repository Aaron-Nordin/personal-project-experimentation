import React, { Component } from "react";

export default class BothButton extends Component {
    handleClick = () => {
        this.props.tLateFn(this.props.userObj.DNA)
        this.props.tScripFn(this.props.userObj.DNA)
        this.props.create(this.props.userObj)
    }
  
    render() {
    return (
      <button
        onClick={() => this.handleClick()}>Both</button>
    );
  }
}

        //   userObj.name !== null || userObj.DNA !== null
            // ? (tLateFn() tScripFn() create())
            // : alert("Please Enter Name and DNA sequence")
