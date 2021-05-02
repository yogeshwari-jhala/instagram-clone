import React, { useState } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import Stories from "../../Components/Stories/Stories";
import InfoSection from "../../Components/Posts/InfoSection";
import Suggestion from "../../Components/Posts/Suggestion";
import { firestore } from "../../repository/Firestore/Firestore.config";

import {Post} from '../../Components/Posts/Post.component'
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: null,
    };
  }

  async componentDidMount() {
    firestore
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        this.setState({
          posts: snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          })),
        });
      });
  }
  render() {
    if (this.state.posts !== null) {
      return (
        <div>
          <Grid container spacing={2}>
            <Grid item lg={2} md={2}></Grid>
            <Grid item lg={6} md={6} sm={12} xm={12} className="MnWb4">
              <Stories />

              <Container maxWidth="sm">
                {this.state.posts.map((post) => {
                    return <Post key={post.id} id={post.id} doc={post.post}/>
                })}
              </Container>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item lg={3} className="MnWb5" md={3}>
              <Paper>
                <InfoSection />
                <Suggestion />
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    }
    return <div />;
  }
}

export default Posts;
