import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";
import "./UserInput.css";

//-------------------------------UI---------------------------------------//

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

//------------------------------------------------------------------------//

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      DNA: "",
      RNA: "",
      aminoAcids: ""
    };
  }

  //---------------------------FUNCTIONS----------------------------------//

  create() {
    this.props.createFn({
      name: this.state.name,
      DNA: this.state.DNA,
      RNA: this.state.RNA,
      aminoAcids: this.state.aminoAcids
    });
  }
  handleDNA(val) {
    this.setState({ DNA: val.toUpperCase() });
  }

  handleName(val) {
    this.setState({ name: val });
  }

  async handleTLateClick() {
    let aa = this.props.tLateFn(this.state.DNA);
    await this.setState({ aminoAcids: aa });
    this.props.createFn(this.state);
    this.setState({ name: "", DNA: "", RNA: "", aminoAcids: "" });
  }

  async handleTScriptClick() {
    let rna = this.props.tScriptFn(this.state.DNA);
    await this.setState({ RNA: rna });
    this.props.createFn(this.state);
    this.setState({ name: "", DNA: "", RNA: "", aminoAcids: "" });

  }

  async handleBothClick() {
    let aa = this.props.tLateFn(this.state.DNA);
    let rna = this.props.tScriptFn(this.state.DNA);
    await this.setState({ aminoAcids: aa, RNA: rna });
    this.props.createFn(this.state);
    this.setState({ name: "", DNA: "", RNA: "", aminoAcids: "" });
  }

  //----------------------------RENDER-----------------------------------//

  render() {
    const classes = useStyles;
    return (
      <div className="userIn">
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.margin}
              label="Enter Gene Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={e => this.handleName(e.target.value)}
              value={this.state.name}
            />
            <TextField
              className={classes.margin}
              label="Enter DNA Sequence"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={e => this.handleDNA(e.target.value)}
              value={this.state.DNA}
            />
          </ThemeProvider>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup
                  id="tri-button"
                  variant="contained"
                  color="primary"
                  aria-label="Full-width contained primary button group"
                >
                  <Button onClick={() => this.handleTScriptClick()}>
                    Transcribe DNA
                  </Button>
                  <Button onClick={() => this.handleTLateClick()}>
                    Translate DNA
                  </Button>
                  <Button onClick={() => this.handleBothClick()}>Both</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
