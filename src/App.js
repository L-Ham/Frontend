/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {SideBar} from './layouts/SideBar/sidebar';
import {AppBar} from './layouts/Header/appbar';
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
        <div>
            <div className='flex justify-evenly pt-[56px]'>
                <div id='header-container' className='fixed inset-x-0 top-0 z-[4] nd:visible'>
                    <AppBar />
                </div>
                <div className='m:grid-cols-[272px_1fr] grid grid-cols-1'>
                    <div id='sidebar-container' className='isolate order-first hidden nd:block'>
                        <SideBar visible={true} />
                    </div>
                    <div id='main-container' className='block h-[calc(100vh-56px)] w-full flex-col'>
                        <Router>
                            <Routes>
                                <Route path='/' element={<div>Home</div>} />
                                <Route path='/popular' element={<div>Popular</div>} />
                                <Route path='/all' element={<div>All</div>} />
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
