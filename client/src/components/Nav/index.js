import React from 'react';
import {Link} from 'react-router-dom'


function Nav() {

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

export default Nav;