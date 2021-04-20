import './App.css'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React ,{useEffect, useState} from 'react';
import { Button, Input } from '@material-ui/core';

import Logo from './assets/instalogo.png'
import Post from './Components/Posts/Post.component.jsx'

import {auth, db} from './repository/Firestore/config.firebase';
import ImageUpload from './Components/ImageUpload/ImageUpload.component';

import { Login } from "./Components/Login/index";
function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle]= useState(getModalStyle);
  const [posts, setPosts] =useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser]= useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user has logged in...
        setUser(authUser);

      } else {
        // if user has logged out... 
        setUser(null);
      }
      
    })

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, [user, username]);
  useEffect(() => {
    // This is where the code runs
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // every time a new post is added, this code fires up
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
}, []);

const signUp = (event) => {

  // This is to prevent the page from refreshing when we submit the form
  event.preventDefault();
  auth.createUserWithEmailAndPassword(email, password)
  .then((authUser) => {
    return authUser.user.updateProfile({
      displayName: username
    })
  })
  .catch((error) => alert(error.message));

  // Set user so that footer changes accordingly
  

  // Close modal
  setOpen(false);
}

const signIn = (event) => {
  event.preventDefault();
  auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message));
  
  // Close modal
  setOpenSignIn(false);
}
  return (
    <div className="App">
      <Login/>
      {user?.displayName?(
        <ImageUpload username={user.displayName}/>):
        (
          <h3>Sorry Login to upload</h3>
      )}
      
      <Modal  
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img 
                className="app__headerImage"
                height="40px;"
                src={Logo}
                alt=""
              />
            </center>

            <Input 
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> 
            <Input 
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>Sign Up</Button>

          </form>

        </div>
      </Modal>

      <Modal  
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img 
                className="app__headerImage"
                src={Logo}
                height="40px;"
                alt=""
              />
            </center>

            <Input 
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>Sign In</Button>

          </form>

        </div>
      </Modal>
      <div className="app__header">
        <img className="app__headerImage" src={Logo} alt="InstagramLogo"/>
        {user? (
        <Button onClick={() => auth.signOut()}>LogOut</Button>
        ):
        (
          <div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>)}
        </div>
        
        <h1>Hello welcome to my instagram</h1>
        {
          posts.map(({id, post} ) =>(
            <Post key={id} postId={id} username={post.username}  caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }
    </div>
    
  );
}

export default App