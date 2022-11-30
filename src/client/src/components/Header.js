import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="item">Hd Control</div>
            <div className="left menu">
                <Link to='/' className="item">Location</Link>
                <Link to='/hds' className="item">HDs</Link>
            </div>
            
        </div>
    );
}

export default Header;