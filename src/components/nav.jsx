import React from 'react';
import Logo from '../assets/movie-logo.png';
function Navigation () {
    return (
        <div className="NavBar">
            <div className="NavBar-Inner">

                <div className="Logo"><img className="Logo" src={Logo}/></div>
                {/* <Search /> */}
                <div className="LogIn">Log In</div>
                <div className="WishList">

                </div>
            </div>
        </div>
    )


}

export default Navigation;