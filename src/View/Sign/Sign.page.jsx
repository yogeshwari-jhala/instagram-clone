import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LoginImage from "../../../OldComponent/assets/instalogo.png";
import './Login.style.scss'
class SignUpPage extends React.Component{
    render(){
        return(
            <div className="base_container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={LoginImage} alt="instagramImage"/>
                    </div>
                    <div className="form">
                        <div className="form_group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form_group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

class SignInPage extends React.Component{
    render(){
        return(
            <div/>
        )
    }
}

export {SignInPage, SignUpPage}