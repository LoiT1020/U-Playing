import React from 'react';
import {Link} from 'react-router-dom'
import Auth from '../../utils/auth'


function Nav() {
function showNavigation () {
    if (Auth.loggedIn()) {
        return (
            <ul className='flex-row'>
                <li className='mx-1'>
                    < a href ='/' onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
    }else {
        return (
            <ul className='flex-row'>
                <li className='mx-1'>
                    <Link to ="/login">
                        Login
                    </Link>
                </li>
                <li className='mx-1'>
                    <Link to ="/signup">
                        Signup
                    </Link>
                </li>
                
            </ul>
    )
}
} 
    return (
        <div>
            {showNavigation()}
        </div>
    )
    
}

export default Nav;