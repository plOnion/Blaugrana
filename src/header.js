import React from 'react';
import {
    Link
} from 'react-router-dom';
import './App.css';

class Header extends React.Component{

    render() {
        return (
                <header>
                        <div className="header-container">
                            <div className="logo">
                                <Link className="logo__trigger" to="/"></Link>
                            </div>
                            <nav id="navbar">
                                <ul className="main-menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/matches-1819">Matches</Link></li>
                                    <li><Link to="/table">Table</Link></li>
                                </ul>
                            </nav>
                        </div>
                </header>
            )
    }}

export default Header;
