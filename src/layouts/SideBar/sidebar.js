import {React, useState} from 'react';
// import PropTypes from 'prop-types';
import './sidebar.css';
import {ReactComponent as Home} from '../../assets/images/home-icon.svg';
import {ReactComponent as Popular} from '../../assets/images/popular-icon.svg';
import {ReactComponent as All} from '../../assets/images/all-icon.svg';
import {SideBarSection} from './sidebarsection';

/**
 * Main application component
 * @component
 * @example
 * // Render the application
 * <App />
 * @return {JSX.Element} The main application component
 */
function SideBar() {
    const tabs = [
        {
            icon: <Home/>,
            text: 'Home',
            link: '/',
        },
        {
            icon: <Popular/>,
            text: 'Popular',
            link: '/popular',
        },
        {
            icon: <All/>,
            text: 'All',
            link: '/all',
        },
    ];
    const [testState, setTestState] = useState(false);
    return (

        <div className='styled-scrollbars fixed left-0 top-[56px] box-border
                block h-[calc(100vh-56px)] w-[272px] overflow-hidden border-0
                border-r-[0.0625rem] border-solid border-r-[#00000033] bg-white px-4 pt-4 hover:overflow-y-scroll'>

            <button className='w-full py-2 text-left' onClick={() => setTestState(!testState)}>Toggle</button>
            <div className={`block transition-[max-height] duration-300 ease-in-out overflow-hidden 
             ${testState? 'max-h-0': 'max-h-full'}`}>
                <SideBarSection tabs={tabs} />
            </div>
            <hr className='my-4 border-t-DEFAULT border-[#eaedef]' />
            <SideBarSection tabs={tabs} />
            <hr className='my-4 border-t-DEFAULT border-[#eaedef]' />


        </div>
    );
}

export {SideBar};
