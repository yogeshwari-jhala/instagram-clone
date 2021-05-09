import React, { useState, useEffect, useContext, useTheme } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Paper, Grid, Avatar, Card, Button } from "@material-ui/core";
import { firestore } from "../../repository/Firestore/Firestore.config";
import Repository from "../../repository/Repository";
import { GlobalUserState } from "../../repository/Firestore/FirebaseAuth.page";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <p>{children}</p>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "150%",
  },
  number: {
    paddingRight: "8%",
    fontSize: "115%",
    fontWeight: "bold",
  },
  g1: {
    display: "flex",
    flexDirection: "row",
    padding: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },
}));
export default function Profile() {
  const user = useContext(GlobalUserState);
  const [posts, setposts] = useState([]);
  const [following, setfollowing] = useState("");
  const [followers, setfollowers] = useState("");
  const [saved, setsaved] = useState([]);
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  useEffect(() => {
    firestore
      .collection("posts")
      .where("uid", "==", user.id)
      .onSnapshot((snapshot) => {
        setposts(snapshot.docs.map((document) => document));
      });

    firestore
      .collection("users/" + user.id + "/followers/")
      .onSnapshot((snapshot) => {
        setfollowers(snapshot.docs.map((document) => document));
      });

    firestore
      .collection("users/" + user.id + "/followings/")
      .onSnapshot((snapshot) => {
        setfollowing(snapshot.docs.map((document) => document));
      });

    firestore
      .collection("users/" + user.id + "/saved/")
      .onSnapshot((snapshot) => {
        setsaved(snapshot.docs.map((document) => document));
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Grid className={classes.g1}>
          <Grid>
            {user.profilePicture ? (
              <Avatar className={classes.avatar} src={user.profilePicture} />
            ) : (
              <Avatar className={classes.avatar} />
            )}
          </Grid>
          <Grid style={{ margin: "0 auto" }}>
            <Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <h3 style={{ marginTop: "-3px" }}>{user.username}</h3>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="inherit" size="small">
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid container>
                <Grid item>
                  <Button>{posts.length} Posts</Button>
                </Grid>
                <Grid item>
                  <Button>{followers.length} Followers</Button>
                </Grid>
                <Grid item>
                  <Button>{following.length} Following</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <AppBar position="static" color="inherit">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
            centered
          >
            <Tab label="Posts" {...a11yProps(0)} />
            <Tab label="Saved" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <GridList cellHeight={160} cols={3}>
            {posts.map((post) => (
              <GridListTile key={post.data().post} cols={1}>
                <img src={post.data().post} alt={post.data().caption} />
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Saved
        </TabPanel>
      </div>
    </div>
  );
}
