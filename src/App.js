import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route element={<Home />} path="/" exact />
                    <Route element={<Products />} path="/products" exact />
                </Route>
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
