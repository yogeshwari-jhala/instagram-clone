import { Avatar, Container, Grid } from '@material-ui/core';
import React, {Component} from 'react';
import avatar from '../../assets/pp1.png';
class Suggestion extends Component {
    render() { 
        return (  
            <Container>
                    <br/>
                    <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={9} >
                        Suggestions for You
                    </Grid>
                     <Grid item xs={3} >
                        <div >See All</div>
                     </Grid>
                     </Grid>
                     <br/>
                    <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Follow</div>
                     </Grid>
                </Grid>
                </Container>
        );
    }
}
 
export default Suggestion;