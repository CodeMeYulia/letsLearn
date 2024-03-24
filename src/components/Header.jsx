import React from "react";

const Header = () => {
    return (
        <header className="App-header">
            <div className="logo_point">
                <img src="../public/ll-logo-withe" className="App-logo" alt="logo" />
            </div>

            <div className="nav-point">
                <label htmlFor="search"><input type="search" name="search" id="search" /> - найти -</label>
                <a href="">- как использовать -</a>
                <a href="">LogIn</a>
                <a href="">SignUp</a>

                <label htmlFor="en">en
                    <input type="radio" name="lang" id="en" placeholder="en" />
                </label>
                <label htmlFor="ru">ru
                    <input type="radio" name="lang" id="ru" placeholder="ru" />
                </label>

            </div>
        </header>
    )
}

export default Header;