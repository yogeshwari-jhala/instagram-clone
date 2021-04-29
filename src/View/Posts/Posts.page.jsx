import React from 'react';
import Cards from './Post.component';
import Grid from '@material-ui/core/Grid';
import Stories from '../../Components/Stories/Stories';
class Posts extends React.Component{
    constructor (props) {
        super(props)
        
    }

    render(){
        return(
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={5}>
                        <Stories/>
                    <Cards/>
                    </Grid>
                    <Grid item xs={3}>
                        <h1>hii</h1>
                    </Grid>
                    <Grid item xs={1}>
                        <h1>hii</h1>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default Posts