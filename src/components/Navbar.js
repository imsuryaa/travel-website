import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        TRAVEL APP <i className='fas fa-globe-americas' />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
