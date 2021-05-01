import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import firebase from "firebase";
import { Button, OutlinedInput, LinearProgress, FormControl } from "@material-ui/core";
import { storage, firestore} from "../../repository/Firestore/Firestore.config";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 5),
  },
  input:{
     marginTop: 30,
},
input1:{
    marginTop:40,
}
}));

export default function CreatePosts() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    console.log("upload");
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "statechanged",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            firestore.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setImage(null);
          });
      }
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <Button
       type="button" onClick={handleOpen}>
        Upload Story
        </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <FormControl>

             <center><h1>Upload Story</h1></center >
            <OutlinedInput className={classes.input} type="file" onChange={handleChange} />
            <LinearProgress variant="determinate" value={progress} className={classes.input1} max="100"/>
            <Button className={classes.input} onClick={handleUpload}>Upload</Button>
            </FormControl>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}