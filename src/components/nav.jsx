import React from 'react';
import Logo from '../assets/movie-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import Search from './search';

function Navigation () {
    return (
        <div className="NavBar">
            <div className="NavBar-Inner">

                <div className="Logo"><img className="Logo" src={Logo}/></div>
                {/* <Search /> */}
                <div className="menuRight">
                    <Search />
                    <div className="LogIn">Log In</div>
                    <div className="WishList">
                        <GiHamburgerMenu size={25} />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Navigation;