import React from 'react';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
// import Outlet

const Root = () => {
    return (
        <>
            <Navigation/>
            {/* Add an Outlet*/}
            <Outlet />
        </>
    );
};

export default Root;