import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './Story.scss';
function Story() {
    return(
    <div className="story">
    <AccountCircleRoundedIcon/>
    <span className="accountName"></span>
  </div>
    )
}
export default Story;