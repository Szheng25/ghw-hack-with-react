import React, {useState} from 'react';
import '../stylesheets/App.css';
import bar from '../assets/hamburgerBar.png';
import glass from '../assets/magnifyingGlass.png';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <nav className="Navbar">
            <div className='leftSide'>
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                        <div className='imgBar'>
                            <img src={bar} alt="webpages"></img>
                        </div>
                </button>
            </div>
            <div className='rightSide'>
                <input type="text" placeholder="search"></input>
                <button className='search-button'>
                    <div className='imgGlass'>
                        <img src={glass} alt="search"></img>
                    </div>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;