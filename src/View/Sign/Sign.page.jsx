import React from "react";

import "./Login.style.scss";
import '../../Components/Style/Button.style.scss'
import logo from "../../assets/instalogo.png";
import HR from '../../Components/hr/hr.component'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Link from "@material-ui/core/Link";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import Repository from "../../repository/Repository";
import {ProvidersEnum} from '../../repository/Firestore/Firestore.config'

export const useStyles = makeStyles((theme) => ({
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

const GoogleLogin = () => {
  new Repository().signInWithProvider(ProvidersEnum.google)
}

export const Login = (props) => {
  const { containerRef } = props;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = React.useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailsignin = () => {
    if(values.username && values.password)
      new Repository().signInWithEmail(values.username, values.password).then(
        data => {
          setError('login success')
        }
      ).catch(
        data => {
          setError(data.data.message)
        }
      )
    else 
      setError('Sign In credentials missing')
  }

  return (
    <div className="base-container" ref={containerRef}>
      <div className="content">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="form">
            
            <Typography variant="caption" display="block" gutterBottom>
              <Box color="error.main">{error}</Box>
            </Typography>
            
            <FormControl
              className={clsx(classes.margin, classes.textField)}
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
                    <AccountCircleIcon />
                  </InputAdornment>
                }
                labelWidth={40}
              />
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
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
          <button className="submit-btn" onClick={emailsignin}>Sign In</button>
          
          <HR text="OR"/>
          <button className="Google-btn" onClick={GoogleLogin}>Continue With Google</button>
          <br/>
          <Link href="#"  style={{fontSize:"12px", color:'#0042f6'}} color="inherit">Forgot Password?</Link>
          
        </div>
      </div>
    </div>
  );
};

export const Register = (props) => {
  const { containerRef } = props;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    name: '',
    password: '',
    cnfpassword: '',
    showPassword: false,
  });
  const [error, setError] = React.useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const emailsignup = () => {
    if(values.name && values.email && values.password)
      new Repository().signInWithEmail(values.name, values.email, values.password).then(
        data => {
          setError('login success')
        }
      ).catch(
        data => {
          setError(data.data.message)
        }
      )
    else 
      setError('Please fill all required fields')
  }
  return (
    <div className="base-container" ref={containerRef}>
      <div className="content">
        <img src={logo} alt="" />
        <div className="login-text">Sign up to see photos and videos from your friends.</div>
          <button className="Google-btn" onClick={GoogleLogin}>Sign In With Google</button>
        <br/>
        <HR text="OR"/>
        <div className="form">
        <Typography variant="caption" display="block" gutterBottom>
          <Box color="error.main">{error}</Box>
        </Typography>
          {/* Email */}
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email" 
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              endAdornment={<InputAdornment position="end"><AlternateEmailIcon/></InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          
          {/* Fullname  */}
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            size="small"
          >
            <InputLabel htmlFor="fullname">
              Fullname
            </InputLabel>
            <OutlinedInput
              id="fullname"
              type="text"
              value={values.name}
              onChange={handleChange("fullname")}
              endAdornment={<InputAdornment position="end"><AccountCircleIcon/></InputAdornment>}
              labelWidth={70}
            />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            size="small"
          >
            <InputLabel htmlFor="password">
              Password
            </InputLabel>
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
              labelWidth={70}
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
              id="cnfpassword"
              type="password"
              value={values.cnfpassword}
              onChange={handleChange("cnfpassword")}
              endAdornment={
                <InputAdornment position="end">
                  
                </InputAdornment>
              }
              labelWidth={120}
            />
          </FormControl>
          <button className="submit-btn">Sign Up</button>
          <div className="agree-text">
            By signing up, you agree to our Terms , Data Policy and Cookies Policy .
          </div>
        </div>
      </div>
    </div>
  );
};
