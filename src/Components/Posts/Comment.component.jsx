import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  InputAdornment,
  TextField,
  Fab,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase, { firestore } from "../../repository/Firestore/Firestore.config";
import Repository from "../../repository/Repository";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70vh",
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #504e4e",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  inputtext: {
    width: "100%",
  },
  fabicon: {
    position: "absolute",
    marginLeft: "100%",
    marginBottom: "50%",
    transform: "translate(-100%, -80%)",
  },
  hidden: {
    display: "none",
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Comments = (props) => {
  const { post, usestyling, loginuser } = props;
  const [allComments, setComment] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  const [newComment, setNewComment] = useState("");
  const [addorview, setaddorview] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    firestore
      .collection("posts/" + post + "/Comments/")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComment(snapshot);
      });
  }, []);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleShow = () => setaddorview(!addorview);
  /**
   * @returns Input box for adding comment
   */

  const CommentBy = (props) => {
    const [user, setUser] = useState();
    const [image, setImage] = useState(false);
    useEffect(() => {
      new Repository()
        .getDocumentSnapshot("users/" + props.id)
        .then((collectionRefData) => {
          collectionRefData.docRef.onSnapshot((snapshot) => {
            if (snapshot.data() !== undefined) {
              if (snapshot.data().displayName)
                setUser(snapshot.data().displayName);
              else setUser(snapshot.data().email);
              setImage(snapshot.data().profilePicture);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.small} src={image ? image : ""} />
        </ListItemAvatar>
        <ListItemText primary={user} secondary={props.Comment} />
      </ListItem>
    );
  };

  const Savecomment = () => {
    new Repository().createDocument("posts/" + post + "/Comments/", {
      Comment: newComment.trim(),
      uid: loginuser,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setNewComment('')
    handleShow()
  }

  if (!allComments.empty && allComments.docs)
    return (
      <div
        className={usestyling ? classes.paper : ""}
        style={usestyling ? modalStyle : ""}
      >
        <div className={classes.fabicon}>
          <Fab color="primary" aria-label="add" onClick={handleShow}>
            {addorview ? <CloseIcon /> : <AddIcon />}
          </Fab>
        </div>
        <div className={addorview ? classes.hidden : ""}>
          <List component="nav" aria-label="comments">
            {allComments.docs.map((document) => {
              return (
                <CommentBy
                  id={document.data().uid}
                  Comment={document.data().Comment}
                  key={document.id}
                />
              );
            })}
          </List>
        </div>
        <div className={!addorview ? classes.hidden : ""}>
          <List component="nav" aria-label="comments">
            <Grid container spacing={1}>
              <Grid item sm={12} md={10}>
                <TextField
                  className={classes.inputtext}
                  id="new-comment"
                  label="Comment Here"
                  value={newComment}
                  onInput={handleChange}
                />
              </Grid>
              <Grid item sm={12} md={2}>
                {newComment.trim().length > 0 ? (
                  <Fab color="secondary" size="small" onClick={Savecomment}>
                    <AddIcon />
                  </Fab>
                ) : (
                  <Fab color="secondary" size="small" disabled>
                    <AddIcon />
                  </Fab>
                )}
              </Grid>
            </Grid>
          </List>
        </div>
      </div>
    );
  return (
    <div
      className={usestyling ? classes.paper : ""}
      style={usestyling ? modalStyle : ""}
    >
      <div className={classes.fabicon}>
        <Fab color="primary" aria-label="add" onClick={handleShow}>
          {addorview ? <AddIcon /> : <CloseIcon />}
        </Fab>
      </div>
      <Grid container spacing={1}>
        <Grid item sm={12} md={10}>
          <TextField
            className={classes.inputtext}
            id="new-comment"
            label="Comment Here"
            value={newComment}
            onInput={handleChange}
          />
        </Grid>
        <Grid item sm={12} md={2}>
          {newComment.trim().length > 0 ? (
            <Fab color="secondary" size="small" onClick={Savecomment}>
              <AddIcon />
            </Fab>
          ) : (
            <Fab color="secondary" size="small" disabled>
              <AddIcon />
            </Fab>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export { Comments };
