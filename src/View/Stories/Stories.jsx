import React from 'react';
import './Stories.scss';
import HorizontalScroll from "react-scroll-horizontal";
function Stories(){
    return(
        <div className="stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
    )
}

export default Stories