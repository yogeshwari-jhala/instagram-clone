import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Avatar, Grid, GridListTileBar, IconButton } from "@material-ui/core";
import './stories.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6px 6px',
    maxWidth: "600px",
    minWidth: "300px",
    marginTop: 0,
    marginBottom: "5px",
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const Stories = (props) => {
  const classes = useStyles();

  return (
      <Container className='margintop'>
        <Paper className={classes.root}>
            <Avatar className={classes.avatar}/>
        </Paper>
      </Container>
  );
};
export default Stories;
