import React, { useState } from 'react';
import Cards from '../../Components/Posts/Post.component';
import Grid from '@material-ui/core/Grid';
import Stories from '../../Components/Stories/Stories';
import InfoSection from '../../Components/Posts/InfoSection';
import Suggestion from '../../Components/Posts/Suggestion';
import { firestore } from '../../repository/Firestore/Firestore.config'



class Posts extends React.Component{
    constructor () {
        super();
        this.state = {
            posts : null,
        };
    }

    async componentDidMount() {
        firestore.collection("posts").onSnapshot((snapshot) => {
          this.setState({
              posts:snapshot.docs.map((doc) => ({
                postId: doc.id,
                post: doc.data(),
              }))
          })
        });
      }
    render(){
        if(this.state.posts !== null){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={2}>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xm={12}>
                        <Stories/>
                        {this.state.posts.map((post) => {
                        <Cards key={post.postId} id={post.postId} caption={post.caption} imageUrl={post.post} timestamp={post.timestamp} username={post.uid}/>
                    })}
                    </Grid>
                    <Grid item lg={1}>
                    </Grid>
                    <Grid item lg={3} className="MnWb5" md={3} >
                        <InfoSection/>

                        <Suggestion/>
                    </Grid>
                </Grid>
            </div>
        )
        }
        return (<div/>
        )
    }
}

export default Posts