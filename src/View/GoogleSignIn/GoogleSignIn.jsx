import React from "react";

import logo from "../../assets/instalogo.png";
import "../Sign/Login.style.scss";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  }));
const GoogleSignIn = (props) => {
    return (
      <div className="base-container" >
        <div className="content">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="form">
            <div className="my-1">
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br/>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
            </div>
            <button className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };


export default GoogleSignIn