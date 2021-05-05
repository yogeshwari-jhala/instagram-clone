import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import image1 from '../../assets/d1.jpg'
import image2 from '../../assets/d2.jpg'
import image3 from '../../assets/d3.jpg'
import image4 from '../../assets/d4.jpg'
import image5 from '../../assets/d5.jpg'
import image6 from '../../assets/d6.jpg'
import ProfileImage from '../../assets/d4.jpg'
import {Paper,Grid, Avatar, Card, Button } from '@material-ui/core';
import { firestore } from "../../repository/Firestore/Firestore.config";
import Repository from '../../repository/Repository';
import { GlobalUserState } from "../../repository/Firestore/FirebaseAuth.page";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  avatar:{
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  number:{
    paddingRight: '8%',
    fontSize: '115%',
    fontWeight: 'bold',
  },
  g1:{
    display:"flex", 
    flexDirection:"row", 
    padding:'5%', 
    margin:'5%'

  }
}));
const tileData = [
       {
         img: image1,
       },
       {
         img : image2,
       },
       {
        img : image3,
      },
      {
        img : image4,
      },
      {
        img : image5,
      },
      {
        img : image6,
      },
      {
        img: image1,
      },
     ];
export default function Profile(){
    const classes = useStyles();
      
    return(
      <div>
      <Paper>
        <Grid className={classes.g1}>
          <Grid>
            <GlobalUserState.Consumer>{
              (context) => (
                 context.profilePicture ? (
                  <Avatar className={classes.avatar} src={user.profilePicture}/>
                ):(
                  <Avatar className={classes.avatar}/>
                )
             )
            }
          </GlobalUserState.Consumer>
            </Grid>
          <Grid style={{ margin :'0 auto'}}>
            <Grid style={{ fontSize:'300%'}}>Yogeshwari Jhala
            <Button
            variant="contained"
            color="primary"
            className={classes.input}
          > Follow</Button>
            </Grid>
            <Grid style={{display:"flex", flexDirection:"row"}}>
            <p className={classes.number}>20 Posts</p>
            <p className={classes.number}>20 Followers</p>
            <p className={classes.number}>20 Following</p>
            </Grid>
          </Grid>
        </Grid>

      </Paper>
        <Paper>
         <GridList cols={3} className={classes.gridList}>
         {tileData.map((tile) => (
         <GridListTile key={tile.img} style={{ height: '300px', width:'400px' }}>
           
           <img src={tile.img} alt={tile.title} style={{ height: '300px', width:'400px' }}/>
          </GridListTile>
        ))}
      </GridList>
      </Paper>
    </div>
    )

}