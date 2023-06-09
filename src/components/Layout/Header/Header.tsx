import React, {JSX} from 'react';
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
    return (
        <header>
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/about"}>
                About
            </Link>
        </header>
    );
};

export default Header;
