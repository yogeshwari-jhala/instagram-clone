import React from 'react';
import './Stories.scss';
import Story from './Story';
function Stories(){
    return(
        <div className="stories">
      <div className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
    )
}

export default Stories