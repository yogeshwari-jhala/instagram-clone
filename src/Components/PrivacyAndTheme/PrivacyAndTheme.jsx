import React from 'react';
import { Paper, FormControl, FormGroup, Switch, FormControlLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    minWidth : 200,
    margin : theme.spacing(2),
    padding : theme.spacing(2),
  },
    formControl: {
      minWidth: 120,
    },
    outlined:{
       margin : '20px',
    }
  }));
function PrivacyAndTheme(){
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                
                <FormGroup>
                <center> <p style={{fontSize: "150%"}}>Privacy And Theme</p></center>
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
        </div> 
    )
}
export default PrivacyAndTheme;