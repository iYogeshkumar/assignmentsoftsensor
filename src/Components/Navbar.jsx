import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>

            <Link className='navhead' to="/"><h1>Fresh Stock</h1></Link>
            <Link className='navcart' to="/cart">Cart</Link>
        </nav>
    );
};

export default Navbar;