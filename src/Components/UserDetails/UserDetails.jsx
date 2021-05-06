import React from 'react';
import { Paper, Button, TextField, FormControl, Container } from "@material-ui/core";
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
function UserDetails(){
    const classes = useStyles();
    return(
        <div>
          <Container fluid>
            <Paper className={classes.paper} >
              <center > <p style={{fontSize: "150%"}}>User Details</p>
            <FormControl variant="outlined"className={classes.formControl}>
            <TextField className={classes.outlined} label="Display Name" type="text" variant="outlined" />
            <TextField className={classes.outlined} label="Email" type="email" variant="outlined" />
            <TextField className={classes.outlined} label="Phone Number" type="tel" variant="outlined" />
            <TextField className={classes.outlined} label="City" type="text" variant="outlined" />
            <TextField className={classes.outlined} label="Country" type="text" variant="outlined" />
            <Button>Save</Button>
            </FormControl>
            </center>
            </Paper>
            </Container>
        </div>
    )
}
export default UserDetails;