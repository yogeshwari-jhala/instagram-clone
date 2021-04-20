import React from 'react'
import SignInPage from './Sign.page'

class Page extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            // page: SignInPage
        }
    }

    // togglePage(){
    //     this.setState({page: this.state.page===SignInPage ? SignUpPage : SignInPage})
    // }

    render(){
        return(
            <SignInPage/>
        )
    }
}

export default Page