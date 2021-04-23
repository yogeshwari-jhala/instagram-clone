import React from 'react'
import Grid from '@material-ui/core/Grid';

const HR = props => {
    return (
        <Grid container spacing={1} style={{marginTop: "2px", marginBottom:"2px"}}>
            <Grid item sm={5} >
                <hr style={{color:"#607d8b", width:"90%",}}/>
            </Grid>
            <Grid item sm={2} style={{color:"#607d8b"}}>
                {props.text}
            </Grid>
            <Grid item sm={5} className="left" >
                <hr  style={{color:"#607d8b", width:"90%"}}/>
            </Grid>
        </Grid>
    )
}
export default HR;