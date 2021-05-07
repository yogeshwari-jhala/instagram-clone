import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  CardActionArea,
  Menu,
  MenuItem,
  Modal,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { Comments } from "./Comment.component";
import "./Post.scss";
import Repository from "../../repository/Repository";

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
  colorpink: {
    color: "#ec1f85",
  },
  cardFooter: {
    marginTop: "-20px",
    marginBottom: "10px",
    height: "4vh",
  },
}));

export const Post = (props) => {
  const classes = useStyles();
  const { id, doc, luser } = props;
  const [user, setUser] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [liked, setLiked] = useState(false);
  const [saved, setsaved] = useState(false);

  const [modalOpen, setModal] = useState(false);

  useEffect(() => {
    new Repository()
      .getDocumentSnapshot("users/" + doc.uid)
      .then((collectionRefData) => {
        collectionRefData.docRef.onSnapshot((snapshot) => {
          setUser(snapshot.data());
        });
      })
      .catch((data) => {
        console.log(data);
      });

      // .Post saved or not
    new Repository()
      .getDocumentSnapshot("users/" + luser + "/saved/" + id)
      .then((collectionRefData) => {
        collectionRefData.docRef.onSnapshot((snapshot) => {
          if (snapshot.data() == undefined) setsaved(false);
          else setsaved(true);
        });
      })
      .catch((data) => {
        console.warn("Error : " + data);
      });

      // .Post liked or not
      new Repository()
      .getDocumentSnapshot("users/" + luser + "/postLiked/" + id)
      .then((collectionRefData) => {
        collectionRefData.docRef.onSnapshot((snapshot) => {
          if (snapshot.data() == undefined) setLiked(false);
          else setLiked(true);
        });
      })
      .catch((data) => {
        console.warn("Error : " + data);
      });
  }, []);

  const likePost = () => {
    setLiked(!liked);
    if (liked) {
      new Repository().deleteDocument("users/" + luser + "/postLiked/", id);
      new Repository().deleteDocument("posts/" + id + "/likedBy/", luser);
    } else {
      new Repository().createDocumentExistingUID(
        "users/" + luser + "/postLiked",
        {},
        id
      );
      new Repository().createDocumentExistingUID(
        "posts/" + id + "/likedBy/",
        {},
        luser
      );
    }
  };

  const savepost = () => {
    setsaved(!saved);
    if (saved) {
      new Repository().deleteDocument("users/" + luser + "/saved/", id);
    } else {
      new Repository().createDocumentExistingUID(
        "users/" + luser + "/saved",
        {},
        id
      );
    }
  };

  const handleoptionMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleModal = () => setModal(!modalOpen)

  const menuId = "primary-option-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "bottom" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menuPlacement}
    >
      <MenuItem>Go to post</MenuItem>
      <MenuItem>Unfollow</MenuItem>
      <MenuItem>Delete Post</MenuItem>
    </Menu>
  );
  if (user)
    return (
      <div>
        <Card className={classes.root} id="card" key={id}>
          <CardHeader
            className="card_header"
            avatar={
              <Avatar
                aria-label="post"
                className={classes.avatar}
                src={user.profilePicture}
              />
            }
            action={
              <IconButton
                aria-label="options"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleoptionMenuOpen}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={user.displayName}
          />
          <div className="hover column">
            <figure>
              <CardActionArea onDoubleClick={likePost}>
                <CardMedia className={classes.media} image={doc.post} />
              </CardActionArea>
            </figure>
          </div>

          <CardContent>
            <div className={classes.cardFooter}>
              <IconButton
                aria-label="add to favorites"
                component="p"
                onClick={likePost}
              >
                <FavoriteIcon className={liked ? classes.colorpink : ""} />
              </IconButton>

              <IconButton
                aria-label="add to favorites"
                component="p"
                onClick={toggleModal}
              >
                <CommentIcon className="comment" />
              </IconButton>
              <IconButton
                aria-label="save image"
                component="p"
                onClick={savepost}
              >
                {saved ? <BookmarkIcon /> : <BookmarkBorderIcon/> }
                
              </IconButton>
            </div>
            <div>
              <div style={{ marginLeft: 15 }}>
                <b>{user.displayName} </b> {doc.caption}
              </div>
            </div>
          </CardContent>
        </Card>
        <Modal
          open={modalOpen}
          onClose={toggleModal}
          aria-labelledby="comment-modal"
        >   
          <Comments id="comment-modal" post={id} usestyling={true} loginuser={luser}/>
        </Modal>
        {renderMenu}
      </div>
    );
  return <div />;
};
