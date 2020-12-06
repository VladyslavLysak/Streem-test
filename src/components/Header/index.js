import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-name'>
                <Link to='/'>
                    <h1>Streem test</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header;