import React from 'react';
import "./Header.css";
import { Forum, Person } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <IconButton>
                <Person fontSize="large" className="header_icon" />
            </IconButton>
            <img className="header_logo" src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" alt="" />
            
            <IconButton>
                <Forum fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header;