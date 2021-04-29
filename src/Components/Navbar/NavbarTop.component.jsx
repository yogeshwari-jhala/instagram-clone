import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ChatIcon from '@material-ui/icons/Chat';
import { Container, Divider  } from "@material-ui/core";
import instagram from '../../assets/instalogo.png'

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import Repository from '../../repository/Repository'

const Logout = () =>{
  new Repository().signOut()
}
const useStyles = makeStyles((theme) => ({
  navbarcolor: theme.palette.type,
  root: {
    flexGrow: 1,
  },
  title: {
    width:90,
    height: 30
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(.7, .7, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  flexBtn: {
    flex: 'auto',
  },
  offset: theme.mixins.toolbar,
  containerClass:{
    maxWidth: '65%',
  },
  small:{
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  menuPlacement:{
    marginRight:theme.spacing(2),
    marginTop:theme.spacing(5)
  },
  marginIcon:{
    marginRight: theme.spacing(1),
  }
}));

export default function NavbarTop() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menuPlacement}
    >
      <MenuItem onClick={handleMenuClose}><AccountCircleOutlinedIcon className={classes.marginIcon}/>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}><BookmarkBorderIcon className={classes.marginIcon}/>Saved</MenuItem>
      <MenuItem onClick={handleMenuClose}><SettingsOutlinedIcon className={classes.marginIcon}/>Settings</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose, Logout}><PowerSettingsNewIcon className={classes.marginIcon}/>Sign Out</MenuItem>

    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color={classes.navbarcolor}>
        <Container className={classes.containerClass}>
        <Toolbar variant="dense">
          <img src={instagram} alt="" className={classes.title} style={{ margin: 0,padding: 2}}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.root}/>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" className={classes.flexBtn}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" className={classes.flexBtn}>
              <ChatIcon />
            </IconButton>
            <IconButton color="inherit" className={classes.flexBtn}>
              <FavoriteIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" className={classes.flexBtn} 
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}>
              <Avatar className={classes.small}/>
            </IconButton>
          </div>
        </Toolbar>

        </Container>
      </AppBar>
      <div className={classes.offset} />
      {renderMenu}
    </div>
  );
}
