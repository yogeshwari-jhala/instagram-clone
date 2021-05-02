import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Box } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CommentIcon from "@material-ui/icons/Comment";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Post.scss";
import Repository from '../../repository/Repository'
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "600px",
    minWidth: "300px",
    margin: "0 auto",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export const Post = (props) => {
  const classes = useStyles();
  const { id, doc } = props;
  const [user, setUser] = useState(false)

  useEffect(() => {
    new Repository().getDocumentSnapshot('users/'+doc.uid).then(
      collectionRefData => {
        collectionRefData.docRef.onSnapshot(snapshot => {
          setUser(snapshot.data())
        })
      }
    ).catch(
      data => {
        console.log(data);
      }
    )
  }, [])

  const likePost = () =>{
    
  }

  const commentPost = () =>{
    
  }

  const savepost = () =>{
    
  }

  if(user)
  return (
    <div>
      <Card className={classes.root} id="card" key={id}>
        <CardHeader
          className="card_header"
          avatar={
            <Avatar aria-label="post" className={classes.avatar} src={user.profilePicture}/>
          }
          title={user.displayName}
        />
        <div className="hover column">
          <div>
            <figure>
              <CardActionArea onDoubleClick={likePost}>
                <CardMedia className={classes.media} image={doc.post}/>
              </CardActionArea>
            </figure>
          </div>
        </div>

        <CardContent>
          <Typography variant="p" color="initial">
            <IconButton aria-label="add to favorites" component="p" onClick={likePost}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites" component="p"  onClick={commentPost}>
              <CommentIcon className="comment" />
            </IconButton>
            <IconButton aria-label="save image" component="p"  onClick={savepost}>
              <BookmarkIcon />
            </IconButton>
          </Typography>
          <Typography variant="p">
            <Box fontStyle="oblique" m={1}>
              {doc.caption}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
  return <div/>
}
