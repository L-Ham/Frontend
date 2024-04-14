import React from 'react';
import {AppBar} from '../layouts/Header/appbar';
import {SideBar} from '../layouts/SideBar/sidebar.js';
import PropTypes from 'prop-types';

/**
 * Layout with navigation component
 * @component
 * @param {object} props - The component props. Used to pass children
 * @example
 * // Render the layout with navigation
 * <LayoutWithNavigation>
 *  children
 * </LayoutWithNavigation>
 * @return {JSX.Element} The layout with navigation component
 * */
function LayoutWithNavigation(props) {
    return (
        <>
            <div className='flex justify-evenly pt-[56px]'>
                <div id='header-container' className='fixed inset-x-0 top-0 z-[4] nd:visible'>
                    <AppBar />
                </div>
                <div className='grid  w-full grid-cols-1 overflow-x-clip
                bg-[var(--color-neutral-background)] nd:grid-cols-[272px_1fr] '>
                    <div id='sidebar-container' className='isolate z-[1] order-first hidden nd:block '>
                        <SideBar />
                    </div>
                    <div id='main-container' className='block w-full flex-col'>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

LayoutWithNavigation.propTypes = {
    children: PropTypes.node,
};

export {LayoutWithNavigation};
