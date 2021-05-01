import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../assets/pp1.png'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      height: 100,
      marginBottom: 20,
      marginTop: 10,
      
    },
    avatar:{
        overflowX: 'scroll',
        overflowY: 'hidden',
        display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
},
large: {
    border: '3px solid red',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large1: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: 'grey',
  },
  username:{
    fontSize: 10,
  }
}
));
function Stories() {
    const classes = useStyles();

return(
    <Container maxWidth="sm">
    <Card className={classes.root}>
      
    <div className={classes.avatar}>
       
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>
      <div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
      <div className={classes.username}>ProfileName</div>
      </div>

    </div>
    </Card>
    </Container>
);
}
export default Stories;