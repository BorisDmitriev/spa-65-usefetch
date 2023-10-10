import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>Star Wars Charackter 2023</footer>
        </div>
    );
};

export default SharedLayout;
