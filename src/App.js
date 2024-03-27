/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {SideBar} from './layouts/SideBar/sidebar';
import {AppBar} from './layouts/Header/appbar';
import {LayoutWithNavigation} from './generic components/layoutwithnavigation';
import './App.css';

/**
 * Main application component
 * @component
 * @example
 * // Render the application
 * <App />
 * @return {JSX.Element} The main application component
 */
function App() {
    return (
        <LayoutWithNavigation>
            <Router>
                <Routes>
                    <Route path='/' element={<div>Home</div>} />
                    <Route path='/popular' element={<div>Popular</div>} />
                    <Route path='/all' element={<div>All</div>} />
                </Routes>
            </Router>
        </LayoutWithNavigation>
    );
}

export default App;
