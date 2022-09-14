import React from "react";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navbar__links'>
                <Link to="/passedposts">Rate</Link> <br/>
                <Link to="/posts">Quiz!</Link>
            </div>
        </div>
    );
};

export default Navbar;