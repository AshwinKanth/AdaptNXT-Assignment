import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from "./components/Home"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />} />
                <Route path='/dashboard' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;