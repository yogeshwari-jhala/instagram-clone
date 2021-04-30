import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../assets/pp1.png';
import { Container, Grid } from '@material-ui/core';
class InfoSection extends Component {
    render() { 
        return ( 
            <div>
                <Container>
                    <br/>
                    <Grid container spacing={3} style={{fontSize:'12px'}}>
                    <Grid item xs={3} >
                        <Avatar src={avatar}/>
                    </Grid>
                    <Grid item xs={6} >
                        <div><strong>Username</strong></div>
                        <div>Profile Name</div>
                     </Grid>
                     <Grid item xs={3} >
                        <div >Switch</div>
                     </Grid>
                </Grid>
                </Container>
            </div> 
        );
    }
}
 
export default InfoSection;