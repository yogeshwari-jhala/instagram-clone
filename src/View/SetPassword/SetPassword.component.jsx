import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";

import logo from "../../assets/instalogo.png";
import '../../Components/Style/Button.style.scss'
import { useStyles } from "../Sign/Sign.page";
import "./SetPassword.style.scss";

import Repository from '../../repository/Repository'


const SetPassword = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    cnfpassword: "",
  });
  const [error, setError] = React.useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="app1">
      <div className="login1">
        <div className="conatiner1">
          <div className="base-container1">
            <div className="content1">
              <div className="image1">
                <img className="img1" src={logo} alt="" />
              </div>
              <div className="form1">
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  size="small"
                  >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password1"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  size="small"
                  >
                  <InputLabel htmlFor="cnfpassword">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="cnfpassword1"
                    type="password"
                    value={values.cnfpassword}
                    onChange={handleChange("cnfpassword")}
                    endAdornment={
                      <InputAdornment position="end"><LockIcon/></InputAdornment>
                    }
                    labelWidth={110}
                  />
                </FormControl>
                <button onClick={() => {new Repository().signOut()}}>Set Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
