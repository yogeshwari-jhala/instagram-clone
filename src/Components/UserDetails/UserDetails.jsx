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
function UserDetails(){
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.paper} >
              <center style={{fontSize: "150%"}}>User Details</center>
            <FormControl variant="outlined"className={classes.formControl}>
            <TextField className={classes.outlined} label="Display Name" type="text" variant="outlined" />
            <TextField className={classes.outlined} label="Email" type="email" variant="outlined" />
            <TextField className={classes.outlined} label="Phone Number" type="tel" variant="outlined" />
            <TextField className={classes.outlined} label="City" type="text" variant="outlined" />
            <TextField className={classes.outlined} label="Country" type="text" variant="outlined" />
            <center><Button>Save</Button></center>
            </FormControl>
            </Paper>
        </div>
    )
}
export default UserDetails;