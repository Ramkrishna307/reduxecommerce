import React from 'react'
import user from '../../Images/user.png'
import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src={user} alt='user'/>
            </div>
          
        </div>
    );
};

export default Header;