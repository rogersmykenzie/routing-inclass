import React from 'react';
import {Link} from 'react-router-dom'

function Shop() {
    return (
        <div>
            <h1>Shop</h1>
            <Link to='/profile/7'><button>Profile</button></Link>
        </div>
    )
}

export default Shop;