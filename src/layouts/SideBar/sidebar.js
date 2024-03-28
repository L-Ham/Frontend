/* eslint-disable no-unused-vars */
import {React, useState} from 'react';
// import PropTypes from 'prop-types';
import './sidebar.css';
// import {ReactComponent as Home} from '../../assets/images/home-icon.svg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import {ReactComponent as Popular} from '../../assets/images/popular-icon.svg';
import {ReactComponent as All} from '../../assets/images/all-icon.svg';
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
            icon: <HomeOutlinedIcon />,
            label: 'Home',
            link: '/',
        },
        {
            icon: <Popular />,
            label: 'Popular',
            link: '/popular',
        },
        {
            icon: <All />,
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
