import React from "react";
import "./Login.style.scss";
import logo from "../../assets/instalogo.png";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Button from '@material-ui/core/Button';

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

export const Login = (props) => {
  const { containerRef } = props;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

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
    <div className="base-container" ref={containerRef}>
      <div className="content">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="form">
          <div className="my-1">
            <FormControl
              className={
                (clsx(classes.margin, classes.textField)
                )
              }
              variant="outlined"
              size="small"
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type={values.showusername ? "text" : "username"}
                value={values.username}
                onChange={handleChange("username")}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircleIcon/>
                  </InputAdornment>
                }
                labelWidth={40}
              />
            </FormControl>
          </div>
          <div className="my-1">
            <FormControl
              className={
                (clsx(classes.margin, classes.textField))
              }
              variant="outlined"
              size="small"
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </div>
          <div className="my-1">
            <Button style={{ width: '90%' }}>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Register = props => {
  const {containerRef} = props
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return(
    <div className="base-container" ref={containerRef}>
      <div className="content">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="form">
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" 
              size="small">
          <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            type={values.showusername ? 'text' : 'username'}
            value={values.username}
            onChange={handleChange('username')}
            endAdornment={
              <InputAdornment position="end">

              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined"
              size="small">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type={values.showemail ? 'text' : 'email'}
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">

              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined"
              size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          </div>
      </div>
    </div>
  )
}
