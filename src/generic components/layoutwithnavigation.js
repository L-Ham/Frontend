import React from 'react';
import {AppBar} from '../layouts/Header/appbar';
import {SideBar} from '../layouts/SideBar/sidebar';
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
        <div>
            <div className='flex justify-evenly pt-[56px]'>
                <div id='header-container' className='fixed inset-x-0 top-0 z-[4] nd:visible'>
                    <AppBar />
                </div>
                <div className='grid grid-cols-1 nd:grid-cols-[272px_1fr]'>
                    <div id='sidebar-container' className='isolate order-first hidden nd:block'>
                        <SideBar visible={true} />
                    </div>
                    <div id='main-container' className='block h-[calc(100vh-56px)] w-full flex-col'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

LayoutWithNavigation.propTypes = {
    children: PropTypes.node,
};

export {LayoutWithNavigation};
