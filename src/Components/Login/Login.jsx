import React from 'react';
import LoginImage from "../../assets/instalogo.png";

export class Login extends React.Component{
    constructor(props)
    {
        super(props);
    }
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