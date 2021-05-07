import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Container, Grid } from "@material-ui/core";
import { GlobalUserState } from "../../repository/Firestore/FirebaseAuth.page"

class InfoSection extends Component {
  render() {
    return (
      <div>
        <GlobalUserState.Consumer>
          {(context) => (
            <Container>
              <Grid container spacing={3} style={{ fontSize: "12px" }}>
                <Grid item xs={3}>
                  <Avatar src={context.profilePicture} />
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <strong>{context.username}</strong>
                  </div>
                  <div>{context.displayName}</div>
                </Grid>
                <Grid item xs={3}>
                  <div>Switch</div>
                </Grid>
              </Grid>
            </Container>
          )}
        </GlobalUserState.Consumer>
      </div>
    );
  }
}

export default InfoSection;
