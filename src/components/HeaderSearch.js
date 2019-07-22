import React from "react";
import "./Header.css";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";

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

//---------------------------FUNCTIONS----------------------------------//

function HeaderSearch(props) {
  const classes = useStyles;
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Search"
          variant="outlined"
          id="header-searchbar"
          onChange={e => props.searchFn(e.target.value)}
        />
      </ThemeProvider>
    </div>
  );
}
export default HeaderSearch;
