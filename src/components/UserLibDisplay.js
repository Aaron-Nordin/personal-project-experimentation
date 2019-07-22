import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "./UserLibDisplay.css";
import KoalaFacts from "./KoalaFacts";

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
    let { name, DNA, RNA, aminoAcids } = this.state;
    return (
      <div className="user-Lib-Display">
        <div className="search" />
        <div className="user-Lib-Dis-Name">
          {this.state.editing ? (
            <div className="edit">
              <KoalaFacts/>
              <input
                className="input-name-edit"
                type="text"
                value={name}
                onChange={e => this.handleName(e.target.value)}
              />
              <button id="save-button" onClick={() => this.save()}>
                Save
              </button>
              <button id="cancel-button" onClick={() => this.togEdit()}>
                Cancel
              </button>
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
          <h3 className="titles">DNA Sequence</h3>
          <h2 className="DNA-block">{DNA}</h2>
          <h3 className="titles">RNA Sequence</h3>
          <h2 className="RNA-block">{RNA}</h2>
          <h3 className="titles">Amino Acid Sequence</h3>
          <h2 className="AA-block">{aminoAcids}</h2>
          <div id="delete-button">
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
