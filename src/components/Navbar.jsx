import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }
            >
                Home
            </NavLink>
            {"   "}
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }
            >
                About
            </NavLink>
            {"   "}
            <NavLink
                to="/starwarsCharacter"
                className={({ isActive }) =>
                    isActive ? "link active" : "link"
                }
            >
                Starwars Character
            </NavLink>
        </nav>
    );
};

export default Navbar;
