import { FormGroup, Paper } from '@material-ui/core';
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField, FormControl, FormControlLabel, Switch } from "@material-ui/core";
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
function Settings(){
  const classes = useStyles();
    return(
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <Paper className={classes.paper}>
              <center style={{fontSize: "150%"}}>User Details</center>
            <FormControl variant="outlined"className={classes.formcontrol}>
            <TextField className={classes.outlined} label="Display Name" type="text" variant="outlined" />
            <TextField className={classes.outlined} label="Email" type="email" variant="outlined" />
            <TextField className={classes.outlined} label="Phone Number" type="tel" variant="outlined" />
            <TextField className={classes.outlined} label="City" type="text" variant="outlined" />
            <TextField className={classes.outlined} label="Country" type="text" variant="outlined" />
            <center><Button>Save</Button></center>
            </FormControl>
            </Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>
              <center style={{fontSize: "150%"}}>Password Change</center>
            <FormControl variant="outlined"className={classes.formcontrol}>
            <TextField className={classes.outlined} label="Password" type="password" variant="outlined" />
            <TextField className={classes.outlined} label="Confirm Password" type="password" variant="outlined" />
            <center> <Button>Change</Button></center>
            </FormControl>
            </Paper>
            </Grid>
            <Grid item xs={4}> 
              <Paper className={classes.paper}>
              <FormControl component="fieldset">
                
                <FormGroup>
                <center style={{fontSize: "150%"}}>Privacy And Theme</center>
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Private"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Dark Theme"
                    labelPlacement="start"
                  />
                </FormGroup>
             </FormControl>
              </Paper>
            </Grid>
            </Grid> 
      </div>
    )
}
export default Settings;