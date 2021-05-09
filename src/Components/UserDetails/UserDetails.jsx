import React, { useState , useContext} from 'react';
import { Paper, Button, TextField, FormControl, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { GlobalUserState } from "../../repository/Firestore/FirebaseAuth.page"
import {Link} from 'react-router-dom';
import {firestore} from '../../repository/Firestore/Firestore.config'
import ProfileImageUpload from '../../Components/ProfileImageUpload/ProfileImageUpload';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      minWidth : 200,
      margin : theme.spacing(2),
      padding : theme.spacing(2),
    },
      formControl: {
        minWidth: 100,
      },
      outlined:{
         margin : '20px',
      },
      selectEmpty: {
        marginTop: theme.spacing(1),
      },
  }));
function UserDetails(){
    const classes = useStyles();
    const user = useContext(GlobalUserState);
    const [name , setName] = useState('');
    const [uname , setUname]= useState('');
    const [countryname , setCountryname] = useState('');
    const [cityname , setCityname] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gnder, setGender] =useState('');
    const handleChange =() =>{
      firestore 
      .collection("users/")
      .doc(user.id)
      .update({
        displayName : name,
        username : uname,
        gender : gnder,
        country : countryname,
        phoneNumber : phone,
        city : cityname,
        dateOfBirth : dob,
      })
    }
    return(
        <div>
          <Container fluid>
            <Paper className={classes.paper} >
              <center > <p style={{fontSize: "150%"}}>User Details</p>
              <Link to="/profileimageupload" style={{textDecoration:'none'}}><Button onClick={<ProfileImageUpload/>}>Upload Profile Picture</Button></Link>
              <div>
            <FormControl variant="outlined"className={classes.formControl}>
            <TextField 
            className={classes.outlined} 
            label="Display Name" 
            type="text" 
            variant="outlined" 
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <TextField 
            className={classes.outlined} 
            label="User Name" 
            type="text" 
            variant="outlined" 
            value={uname}
            onChange={e => setUname(e.target.value)}
            />
            <TextField 
            className={classes.outlined} 
            label="Phone Number" 
            type="tel" 
            variant="outlined" 
            value={phone}
            onChange={e => setPhone(e.target.value)}
            />
            <TextField 
            className={classes.outlined} 
            label="DOB" 
            type="text" 
            variant="outlined" 
            value= {dob}
            onChange={e => setDob(e.target.value)}
            />
            <TextField 
            className={classes.outlined} 
            label="City" 
            type="text" 
            variant="outlined" 
            value={cityname}
            onChange={e => setCityname(e.target.value)}
            />
            <TextField 
            className={classes.outlined} 
            label="Country" 
            type="text" 
            variant="outlined" 
            value ={countryname}
            onChange={e => setCountryname(e.target.value)}
            />
          
          <FormControl variant="outlined" className={classes.formControl}>
           <InputLabel id="demo-simple-select-outlined-label" className={classes.outlined}>Gender</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={gnder}
                className={classes.outlined}
                onChange={e => setGender(e.target.value)}
                label="Gender"
             >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
            <Button onClick={handleChange}>Save</Button>
            </FormControl>
            </div>
            </center>
            </Paper>
            </Container>
        </div>
    )
}
export default UserDetails;