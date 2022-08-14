import React from 'react';
import '../stylesheets/App.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <div className='leftSide'>
                    <div className='links'>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/contact'>Contact</a>
                    </div>
                </div>
            </div>
            <div>
                <div className='rightSide'>
                    <input type="text" placeholder="search"></input>
                    <button className='search-button'>Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;