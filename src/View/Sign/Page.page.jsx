import React from 'react'
import {SignInPage, SignUpPage} from './Sign.page'

class Sign extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            page: SignInPage
        }
    }

    togglePage(){
        this.setState({page: this.state.page===SignInPage ? SignUpPage : SignInPage})
    }

    render(){
        return(
            <div/>
        )
    }
}

export default Sign