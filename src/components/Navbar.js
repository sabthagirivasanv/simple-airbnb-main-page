import React from "react";
import airBnbLogo from "../images/airbnb_logo.svg";

export default function Navbar(){
    return (
        <nav className="navBar">
            <img src={airBnbLogo} className="nav--logo"/>
        </nav>
    );
}