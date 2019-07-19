import React, { Component } from "react";

export default class UserLibDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.obj.name,
      DNA: this.props.obj.DNA,
      RNA: this.props.obj.RNA,
      aminoAcids: this.props.obj.aminoAcids,
      editing: false
    };
  }

  togEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleDNA(val) {
    this.setState({ DNA: val })
  }

  handleName(val) {
    this.setState({ name: val });
  }

  save() {
    this.props.saveFn(this.props.obj.id, { name: this.state.name });
    this.togEdit();
  }

  render() {
    return (
      <div className="user-Lib-Display">
        <div className="user-Lib-Dis-Name">
          {this.state.editing ? (
            <div>
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.handleName(e.target.value)}
              />
              <button onClick={() => this.save()}>Save</button>
              <button onClick={() => this.togEdit()}>Cancel</button>
            </div>
          ) : (
            <h2 onClick={() => this.togEdit()}>{this.props.obj.name}</h2>
          )}
          {/* <button onClick={() => this.props.deleteFn(this.props.obj.id)}>
            Delete Entry
          </button> */}
        </div>
        <div className="user-Lib-Dis-DNA">
          {this.state.editing ? (
            <div>
              <input
                type="text"
                value={this.state.DNA}
                onChange={e => this.handleDNA(e.target.value)}
              />
              <button onClick={() => this.save()}>Save</button>
              <button onClick={() => this.togEdit()}>Cancel</button>
            </div>
          ) : (
            <h2 onClick={() => this.togEdit()}>{this.props.obj.DNA}</h2>
          )}
          <button onClick={() => this.props.deleteFn(this.props.obj.id)}>
            Delete Entry
          </button>
        </div>
      </div>
    );
  }
}
