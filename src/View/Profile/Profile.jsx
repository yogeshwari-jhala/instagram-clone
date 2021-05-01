import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image1 from '../../assets/d1.jpg'
import image2 from '../../assets/d2.jpg'
import image3 from '../../assets/d3.jpg'
import image4 from '../../assets/d4.jpg'
import image5 from '../../assets/d5.jpg'
import image6 from '../../assets/d6.jpg'
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
                   <img style={{width:"160px",height:"160px",borderRadius:"120px"}}
                    src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
                </div>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", width:"50%"}}>
                <div>
                    <h1>Yogeshwari Jhala</h1>
                </div>
                <div style={{display:"flex",flexDirection:"row", margin:"2%"}}>
                        <h2 style={{padding:"5%"}}>20 Posts</h2>
                        <h2 style={{padding:"5%"}}>20 Followers</h2>
                        <h2 style={{padding:"5%"}}>20 Following</h2>
                    </div>
                    </div>
            </div>
            <div>
         <GridList cellHeight={600} cellWidth={600} className={classes.gridList}>
         <GridListTile key="Subheader" cols={2} style={{ height: '100%' }}>
          <ListSubheader component="div">December</ListSubheader>
         </GridListTile>
            {tileData.map((tile) => (
             <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      </div>
    </div>
        // <div style={{maxWidth:"400x",margin:"0px auto"}}>
        //     <div style={{display:"flex", justifyContent:"space-around", margin:"18px 10px", borderBottom:"1px solid grey"}}> 
        //         <div>
        //             <img style={{width:"160px",height:"160px",borderRadius:"120px"}}
        //             src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        //         </div>
        //         <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", width:"50%"}}>
        //         <div>
        //             <h1>Yogeshwari Jhala</h1>
        //         </div>
        //         <div style={{display:"flex",flexDirection:"row", margin:"2%"}}>
        //                 <h2 style={{padding:"5%"}}>20 Posts</h2>
        //                 <h2 style={{padding:"5%"}}>20 Followers</h2>
        //                 <h2 style={{padding:"5%"}}>20 Following</h2>
        //             </div>
        //             </div>
        //     </div>
        // <div className="gallery" style={{display: "flex", flexWrap: "wrap",justifyContent: "space-around"}}>
        //     <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        //     <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        //     <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        //     <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        //     <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        //     <img id="image" style={{ width: "20%"}} src="https://yt3.ggpht.com/ytc/AAUvwnhFY3d8qOpu-KNOALIzsq4ECnGwTPwWmVVpkdM9Fg=s900-c-k-c0x00ffffff-no-rj"/>
        // </div>
        // </div>
    )

}