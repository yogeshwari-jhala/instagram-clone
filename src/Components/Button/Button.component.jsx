import React from 'react'
import './Button.style.scss'

const BtnPrimary = props =>{
    return (
        <button className="submit-btn">{props.text}</button>
    );
}

const BtnGoogle = props =>{
    return(
        <button className="Google-btn">{props.text}</button>
    );
}

const BtnGoogleOutline = props => {
    return(
        <button className="Google-btn-outline">{props.text}</button>
    );
}

export {BtnPrimary, BtnGoogle, BtnGoogleOutline}