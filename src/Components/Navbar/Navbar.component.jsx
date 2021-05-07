import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

import { GlobalUserState } from "../../repository/Firestore/FirebaseAuth.page";

export const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  flexBtn: {
    flex: 'auto',
  },
  small:{
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer"  className={classes.flexBtn}>
            <HomeIcon/>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="open drawer"  className={classes.flexBtn}>
            <SearchIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow}  />
          <IconButton color="inherit"  className={classes.flexBtn}>
            <FavoriteIcon />
          </IconButton>
          <GlobalUserState.Consumer>
          {
            (context) => (
              <IconButton edge="end" color="inherit" className={classes.flexBtn}>
                {context.profilePicture ? (
                <Avatar
                  className={classes.small}
                  alt={context.displayName}
                  src={context.profilePicture}
                />
              ) : (
                <Avatar className={classes.small} />
              )}
              </IconButton>
            )
          }
          </GlobalUserState.Consumer>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

