import React from 'react';
import { Route, Routes } from 'react-router';
import App from '../App';

const ManiLayout = () => {
    return (
        <div>
           <Routes>
            <Route path='/' element={<App/>}/>
            </Routes> 
        </div>
    );
};

export default ManiLayout;