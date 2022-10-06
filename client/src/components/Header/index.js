import React from 'react';
import Nav from '../Nav'
import Search from '../Search';
function Header() {

    
    return (
        <header>
            <Nav />
            <h1 className='Title'>
                <a href ="/"> U Playing!?</a>
            </h1>
            <Search />
        </header>

    )
}

export default Header;