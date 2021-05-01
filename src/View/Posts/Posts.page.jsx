import React from 'react';
import Cards from '../../Components/Posts/Post.component';
import Grid from '@material-ui/core/Grid';
import Stories from '../../Components/Stories/Stories';
import InfoSection from '../../Components/Posts/InfoSection';
import Suggestion from '../../Components/Posts/Suggestion';

class Posts extends React.Component{
    constructor (props) {
        super(props)
        
    }

    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={2}>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xm={12}>
                        <Stories/>
                        <Cards/>
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
}

export default Posts