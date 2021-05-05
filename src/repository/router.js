import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

import Posts from "../View/Posts/Posts.page";
import Navbar from "../Components/Navbar/Navbar.component";
import NavbarTop from "../Components/Navbar/NavbarTop.component";
import { Container } from "@material-ui/core";
import Profile from '../View/Profile/Profile';
import CreatePosts from '../Components/CreatePosts/CreatePosts';
import CreateStories from '../Components/CreatePosts/CreateStories';
import Settings from '../View/Settings/Settings';
import ProfileImageUpload from "../Components/ProfileImageUpload/ProfileImageUpload";

let theme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});


export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    theme = responsiveFontSizes(theme);
    const {width, height} = this.state
    return (
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
          {(width > 700) ? <NavbarTop /> : <Navbar /> }
            {/* <NavbarTop /> */}
            <Container>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route path="/profile" component={Profile} />
                <Route path="/createposts" component={CreatePosts} />
                <Route path="/createstories" component={CreateStories} />
                <Route path="/profileimageupload" component={ProfileImageUpload}/>
                <Route path="/settings" component={Settings}/>
              </Switch>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}
