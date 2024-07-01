import React from "react";
import style from './Header.module.css';
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    return (
        <header className={style.header}>
            <Link to="/">
                <div className="logo_point">
                    <img src="ll-logo-withe.png" className="App-logo" alt="logo" />
                </div>
            </Link>
            <Link to="/about">About</Link>
            <Link to="/letslearn">Learn</Link>

            <label htmlFor="search"><input type="search" name="search" id="search" className="search" /> - search -</label>

            <div className="nav-point">
                <a href="#">LogIn</a>
                <a href="#">SignUp</a>
            </div>

        </header>
    )
}

)

export default Header;