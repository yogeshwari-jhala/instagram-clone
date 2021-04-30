import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Peacock from '../../assets/peacock.jpg';
import CommentIcon from '@material-ui/icons/Comment';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Post.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: '0 auto',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cards() {
  const classes = useStyles();
  


  return (
    <div>
    <Container maxWidth="sm">
    <Card className={classes.root} id="card">
      <CardHeader className="card_header"
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <div className="hover column">
        <div>
             <figure>
             <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Peacock}
                    title="peacock"
                />
                </CardActionArea>
            </figure>
	    </div>
    </div>
        <div className="icons">
      <IconButton aria-label="add to favorites"  component="p">
          <FavoriteIcon />
        </IconButton>
        <CommentIcon className="comment" />
        </div>

      <CardContent className="caption">
        <Typography variant="body2" color="textPrimary" component="p">Username </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  
</Container>

<Container maxWidth="sm">
    <Card className={classes.root} id="card">
      <CardHeader className="card_header"
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <div className="hover column">
        <div>
             <figure>
             <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Peacock}
                    title="peacock"
                />
                </CardActionArea>
            </figure>
	    </div>
    </div>
        <div className="icons">
      <IconButton aria-label="add to favorites"  component="p">
          <FavoriteIcon />
        </IconButton>
        <CommentIcon className="comment" />
        </div>

      <CardContent className="caption">
        <Typography variant="body2" color="textPrimary" component="p">Username </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  
</Container>
<Container maxWidth="sm">
    <Card className={classes.root} id="card">
      <CardHeader className="card_header"
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <div className="hover column">
        <div>
             <figure>
             <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Peacock}
                    title="peacock"
                />
                </CardActionArea>
            </figure>
	    </div>
    </div>
        <div className="icons">
      <IconButton aria-label="add to favorites"  component="p">
          <FavoriteIcon />
        </IconButton>
        <CommentIcon className="comment" />
        </div>

      <CardContent className="caption">
        <Typography variant="body2" color="textPrimary" component="p">Username </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  
</Container>
<Container maxWidth="sm">
    <Card className={classes.root} id="card">
      <CardHeader className="card_header"
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <div className="hover column">
        <div>
             <figure>
             <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Peacock}
                    title="peacock"
                />
                </CardActionArea>
            </figure>
	    </div>
    </div>
        <div className="icons">
      <IconButton aria-label="add to favorites"  component="p">
          <FavoriteIcon />
        </IconButton>
        <CommentIcon className="comment" />
        </div>

      <CardContent className="caption">
        <Typography variant="body2" color="textPrimary" component="p">Username </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  
</Container>

<Container maxWidth="sm">
    <Card className={classes.root} id="card">
      <CardHeader className="card_header"
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <div className="hover column">
        <div>
             <figure>
             <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Peacock}
                    title="peacock"
                />
                </CardActionArea>
            </figure>
	    </div>
    </div>
        <div className="icons">
      <IconButton aria-label="add to favorites"  component="p">
          <FavoriteIcon />
        </IconButton>
        <CommentIcon className="comment" />
        </div>

      <CardContent className="caption">
        <Typography variant="body2" color="textPrimary" component="p">Username </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  
</Container>

<Container maxWidth="sm">
    <Card className={classes.root} id="card">
      <CardHeader className="card_header"
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    <div className="hover column">
        <div>
             <figure>
             <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Peacock}
                    title="peacock"
                />
                </CardActionArea>
            </figure>
	    </div>
    </div>
        <div className="icons">
      <IconButton aria-label="add to favorites"  component="p">
          <FavoriteIcon />
        </IconButton>
        <CommentIcon className="comment" />
        </div>

      <CardContent className="caption">
        <Typography variant="body2" color="textPrimary" component="p">Username </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  
</Container>
</div>
  );
}