import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="footer_container">
                    <div className="footer_copy">Copyright 2018 | All Rights Reserved - Onion</div>
                    <div className="foot_logo"><Link className="logo__trigger" to="/"></Link></div>
                </div>
            </footer>
        )
    }
}

export default Footer;
