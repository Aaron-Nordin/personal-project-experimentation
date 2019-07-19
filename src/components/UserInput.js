import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import "./UserInput.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

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
    primary: green
  }
});

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
  }

  async handleTScriptClick() {
    let rna = this.props.tScriptFn(this.state.DNA);
    await this.setState({ RNA: rna });
    this.props.createFn(this.state);
  }

  async handleBothClick() {
    let aa = this.props.tLateFn(this.state.DNA);
    let rna = this.props.tScriptFn(this.state.DNA);
    await this.setState({ aminoAcids: aa, RNA: rna });
    this.props.createFn(this.state);
  }

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
            />
            <TextField
              className={classes.margin}
              label="Enter DNA Sequence"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={e => this.handleDNA(e.target.value)}
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
