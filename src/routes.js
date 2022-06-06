import React from 'react';
import App from './Components/App';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </App>
)

export default AppRoutes;