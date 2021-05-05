import React from 'react';
import { Paper, Button, TextField, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(5, 5, 5),
      margin: theme.spacing(1,1,1),
    },
      formControl: {
        minWidth: 120,
      },
      outlined:{
         margin : '20px',
      }
  }));
function PasswordChange(){
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.paper}>
              <center style={{fontSize: "150%"}}>Password Change</center>
            <FormControl variant="outlined"className={classes.formcontrol}>
            <TextField className={classes.outlined} label="Password" type="password" variant="outlined" />
            <TextField className={classes.outlined} label="Confirm Password" type="password" variant="outlined" />
            <center> <Button>Change</Button></center>
            </FormControl>
            </Paper>
        </div>
    )
}
export default PasswordChange;