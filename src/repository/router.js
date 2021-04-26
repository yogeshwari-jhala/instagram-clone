import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Posts from '../View/Posts/Posts.page'
import Navbar from '../Components/Navbar/Navbar.component'


export default class Router extends Component {

    constructor() {
        super();
        const currentYear = new Date(Date.now()).getFullYear();
        this.state = {
            theme: "theme-1",
            year: currentYear,
        }
        this._changeTheme = this._changeTheme.bind(this);
    }

    _changeTheme() {
        if (this.state.theme === "theme-1") {
            this.setState({
                theme: "theme-2",
            });
        } else {
            this.setState({
                theme: "theme-1",
            });
        }
    }

    render() {
        return (
            <div className={this.state.theme}>
                <div className="wrapper-main" style={{ height: "200%" }}>
                    <BrowserRouter>
                        <Navbar/>
                        <Switch>
                            {/* <Route exact path="/" component={Posts} /> */}
                            {/* <Route path="/path" component={View} /> */}
                            
                        </Switch>
                        
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}