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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Container, Divider } from "@material-ui/core";
import {Link} from 'react-router-dom';
import Repository from "../../repository/Repository";
import { GlobalUserState } from "../../repository/Firestore/FirebaseAuth.page";


const Logout = () => {
  new Repository().signOut();
};
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
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  menuPlacement: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
  marginIcon: {
    marginRight: theme.spacing(1),
  },
  link:{
    textDecoration: 'none',
    color: 'black',
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "bottom" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menuPlacement}
    >
      <GlobalUserState.Consumer>
        {(context) => (
          <>
          <Link to="/Profile" className={classes.link}>
            <MenuItem onClick={handleMenuClose}>
              {context.profilePicture ? (
                <Avatar
                  className={classes.small}
                  alt={context.displayName}
                  src={context.profilePicture}
                />
              ) : (
                <Avatar className={classes.small} />
              )}
               Profile
            </MenuItem>
            </Link>
            <MenuItem onClick={handleMenuClose}>
              <BookmarkBorderIcon className={classes.marginIcon} />
              Saved
            </MenuItem>
            <Link to="/settings" className={classes.link}>
            <MenuItem onClick={handleMenuClose}>
              <SettingsOutlinedIcon className={classes.marginIcon} />
              Settings
            </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={(handleMenuClose, Logout)}>
              <PowerSettingsNewIcon className={classes.marginIcon} />
              Sign Out
            </MenuItem>
          </>
        )}
      </GlobalUserState.Consumer>
    </Menu>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalUserState.Consumer>
      {
            (context) => (
              <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer"  className={classes.flexBtn}>
          <Link to="/" className={classes.link}><HomeIcon/></Link>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="open drawer"  className={classes.flexBtn}>
            <SearchIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <Link to="/createposts"  className={classes.link}><AddIcon /></Link>
          </Fab>
          <div className={classes.grow}  />
          <IconButton color="inherit"  className={classes.flexBtn}>
            <FavoriteIcon />
          </IconButton>
          
          
              <IconButton edge="end" color="inherit" 
              className={classes.flexBtn} 
              aria-controls={menuId} 
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}>
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
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
            {renderMenu}
      </>
      )
          }
          </GlobalUserState.Consumer>
    </React.Fragment>
  );
}

