import React, { Component } from "react";
import UserLibDisplay from "./UserLibDisplay"

export default class UserLibrary extends Component {
  render() {
    return (
      <div className="user-library-map">
        {this.props.userArr.map(el => (
          <UserLibDisplay
            key={el.id}
            obj={el}
            saveFn={this.props.saveFn}
            deleteFn={this.props.deleteFn}
          />
        ))}
      </div>
    );
  }
}
