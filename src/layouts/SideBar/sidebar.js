/* eslint-disable no-unused-vars */
import {React, useState} from 'react';
// import PropTypes from 'prop-types';
import './sidebar.css';
import {SideBarSection} from './SideBarSection/sidebarsection';


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
            icon: 'home',
            label: 'Home',
            link: '/',
        },
        {
            icon: 'popular',
            label: 'Popular',
            link: '/popular',
        },
        {
            icon: 'all',
            label: 'All',
            link: '/all',
        },
    ];
    return (

        <div className='styled-scrollbars fixed left-0 top-[56px] box-border
                block h-[calc(100vh-56px)] w-[272px] overflow-hidden border-0
                border-r-[0.0625rem] border-solid border-r-[#00000033] bg-white px-4 pt-4 hover:overflow-y-scroll'>

            <SideBarSection tabs={tabs} collapsible={false}/>
            <hr className='my-4 border-t-DEFAULT border-[#eaedef]' />

            <SideBarSection tabs={tabs} collapsible={true} sectionName='RECENT' />
            <hr className='my-4 border-t-DEFAULT border-[#eaedef]' />

            <SideBarSection tabs={tabs} collapsible={true} sectionName='RECENT' />
            <hr className='my-4 border-t-DEFAULT border-[#eaedef]' />

            <SideBarSection tabs={tabs} collapsible={true} sectionName='RECENT' />
            <hr className='my-4 border-t-DEFAULT border-[#eaedef]' />

        </div>
    );
}

export {SideBar};
