import React from 'react';
import Nav from '../Nav'
import Search from '../Search';

function Header() {

    
    return (
        <header>
            <Nav />
            <h1 className='Title'>
                <a href ="/"> Home</a>
            </h1>
            <Search />
        </header>

    )
}

export default Header;