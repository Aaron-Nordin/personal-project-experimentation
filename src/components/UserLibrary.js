import React, { Component } from "react";
import UserLibDisplay from "./UserLibDisplay"

export default class UserLibrary extends Component {
  render() {
    return (
      <div className="user-library-map">
        {this.props.userArr.map(el => (
          <UserLibDisplay
            id={el.id}
            name={el.name}
            DNA={el.DNA}
            RNA={el.RNA}
            aminoAcids={el.aminoAcids}
          />
        ))}
      </div>
    );
  }
}
