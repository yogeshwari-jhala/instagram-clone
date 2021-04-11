import React from 'react'
// import Suresh from './reactlogo.jpg'
import './Post.scss'
import Avatar from "@material-ui/core/Avatar"
// import Ramesh from './insta.png'
const Post = (props) => {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
            className="post__avatar"
            alt='Yogeshwari'
            src="/static/images/avatar/1.jpg" />
            <h3>{props.username}</h3>
            </div>
            <img className="post__image" src={props.imageUrl}/>
            <h4 className="post__text"><strong>{props.username}</strong>{props.caption}</h4>
            
        </div>
    )
}

export default Post