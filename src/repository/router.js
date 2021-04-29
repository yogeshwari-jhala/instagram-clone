import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core'

import Posts from '../View/Posts/Posts.page'
import Navbar from '../Components/Navbar/Navbar.component'
import NavbarTop from '../Components/Navbar/NavbarTop.component'


let theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      fontFamily: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });
  
export default class Router extends Component {

    constructor() {
        super();
        
    }

    render() {
        
        theme = responsiveFontSizes(theme);
        return (
            <div>
                                
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <NavbarTop/>
                        <Switch>
                            {/* <Route exact path="/" component={Posts} /> */}
                            {/* <Route path="/path" component={View} /> */}
                            
                        </Switch>
                        
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        );
    }
}