import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "./UserLibDisplay.css";

//--------------------------STYLE (MAT UI)---------------------------//

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

//-------------------------------------------------------------------//
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

  //---------------------------FUNCTIONS----------------------------------//

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

  //----------------------------RENDER-----------------------------------//

  render() {
    const classes = useStyles; //For MatUI stuffs
    let {name, DNA, RNA, aminoAcids} = this.state
    return (
      <div className="user-Lib-Display">
        <div className="search" />
        <div className="user-Lib-Dis-Name">
          {this.state.editing ? (
            <div>
              <input
                className="input-name-edit"
                type="text"
                value={name}
                onChange={e => this.handleName(e.target.value)}
              />
            </div>
          ) : (
            <h2>
              {this.props.obj.name}
              <span>
                <button id="edit-name-button" onClick={() => this.togEdit()}>
                  Edit Name
                </button>
              </span>
            </h2>
          )}
        </div>
        <div className="user-Lib-Dis-DNA">
          {this.state.editing ? (
            <div className="edit">
              <input
                className="input-DNA-edit"
                type="text"
                value={this.state.DNA}
                onChange={e => this.handleDNA(e.target.value)}
              />
              <button onClick={() => this.save()}>Save</button>
              <button onClick={() => this.togEdit()}>Cancel</button>
            </div>
          ) : (
            <>
              <h3 className="titles">DNA Sequence</h3>
              <h2 className="DNA-block" onClick={() => this.togEdit()}>
                {this.props.obj.DNA}
              </h2>
            </>
          )}
          <h3 className="titles">DNA Sequence</h3>
          <h2 className="DNA-block">{DNA}</h2>
          <h3 className="titles">RNA Sequence</h3>
          <h2 className="RNA-block">{RNA}</h2>
          <h3 className="titles">Amino Acid Sequence</h3>
          <h2 className="AA-block">{aminoAcids}</h2>
          <div>
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
      </div>
    );
  }
}
