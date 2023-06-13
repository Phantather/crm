import React, {JSX} from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
