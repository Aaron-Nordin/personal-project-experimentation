import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

//----------------------STYLE (MAT UI)-----------------------//
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

//----------------------------------------------------------//
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
    this.setState({ DNA: val });
  }

  handleName(val) {
    this.setState({ name: val });
  }

  save() {
    this.props.saveFn(this.props.obj.id, {
      name: this.state.name,
      DNA: this.state.DNA
    });
    this.togEdit();
  }

  render() {
    const classes = useStyles; //For MatUI stuffs
    return (
      <div className="user-Lib-Display">
        <div className="search" />
        <div className="user-Lib-Dis-Name">
          {this.state.editing ? (
            <div>
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.handleName(e.target.value)}
              />
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
          <h2>{this.props.obj.RNA}</h2>
          <h2>{this.props.obj.aminoAcids}</h2>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.deleteFn(this.props.obj.id)}
          >
            Delete Entry
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </div>
      </div>
    );
  }
}
