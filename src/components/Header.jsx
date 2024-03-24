import React from "react";

const Header = () => {
    return (
        <header className="App-header">
            <div className="nav-point">
                <a href="">LogIn</a>
                <a href="">SignUp</a>
                <label htmlFor="search"><input type="search" name="search" id="search" /> - найти -</label>
                <a href="">- как использовать -</a>

            </div>
            <div className="logo_point">
                <img src="ll-logo-withe.png" className="App-logo" alt="logo" />
            </div>
        </header>
    )
}

export default Header;