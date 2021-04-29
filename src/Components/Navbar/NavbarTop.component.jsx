import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  navbarcolor: theme.palette.type,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    padding: theme.spacing(1, 1, 1, 0),
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
  }
}));

export default function NavbarTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={classes.navbarcolor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Instagram
          </Typography>
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
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" className={classes.flexBtn}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" className={classes.flexBtn}>
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit" className={classes.flexBtn}>
              <Avatar />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
