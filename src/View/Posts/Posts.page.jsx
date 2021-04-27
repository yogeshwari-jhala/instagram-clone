import React from 'react';
import Cards from './Post.component';
class Posts extends React.Component{
    constructor (props) {
        super(props)
        
    }

    render(){
        return(
            <div>
                Here will be our posts
                <Cards/>
            </div>
        )
    }
}

export default Posts