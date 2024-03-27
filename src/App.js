import React from 'react';
import './App.css';
import {SideBar} from './layouts/SideBar/sidebar';
import {AppBar} from './layouts/Header/appbar';

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
        <div className='App'>

            <div className='flex justify-evenly'>
                <div id='header-container' className='theme-beta fixed inset-x-0 top-0 z-[4] nd:visible'>
                    {/* <h1>Header</h1> */}
                    <AppBar />
                </div>
                <div id='sidebar-container' className='left-sidebar theme-rpl
                    isolate order-first hidden nd:block'>

                    <SideBar visible={true} />
                </div>
            </div>
        </div>
    );
}

export default App;
