import React from 'react';
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
import { Avatar, Card, IconButton } from '@material-ui/core';
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
    width:"100px",
    height:"100px",
    borderRadius:"120px",
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
     ];
export default function Profile(){
    const classes = useStyles();
    return(

        <div className={classes.root}>
        <div style={{display:"flex", justifyContent:"space-around", margin:"18px 10px", borderBottom:"1px solid grey"}}>  
                  <div>
                   <Avatar className={classes.avatar}/>
                   </div>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", width:"50%"}}>
                <div style={{fontSize: "30px"}}>
                    Yogeshwari Jhala
                </div>
                <div style={{display:"flex",flexDirection:"row", margin:"1%"}}>
                        <h3 style={{paddingRight:"5%"}}>20 Posts</h3>
                        <h3 style={{paddingRight:"5%"}}>20 Followers</h3>
                        <h3 style={{paddingRight:"5%"}}>20 Following</h3>
                    </div>
                    </div>
            </div>
            <div>
         <GridList cols={3} className={classes.gridList}>
         {tileData.map((tile) => (
         <GridListTile key={tile.img} style={{ height: '300px', width:'400px' }}>
           
           <img src={tile.img} alt={tile.title} style={{ height: '300px', width:'400px' }}/>
          </GridListTile>
        ))}
      </GridList>
      </div>
    </div>
    )

}