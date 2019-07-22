import React, { Component } from "react";
import UserLibDisplay from "./UserLibDisplay";

export default class UserLibrary extends Component {
  render() {
    console.log(this.props.userArr)
    return (
      <div className="user-library-map">
        {this.props.userArr[0] !== null
          ? this.props.userArr.map(el => (
              <UserLibDisplay
                key={el.id}
                obj={el}
                saveFn={this.props.saveFn}
                deleteFn={this.props.deleteFn}
              />
            ))
          : "No results found"}
      </div>
    );
  }
}
