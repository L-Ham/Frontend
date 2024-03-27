import React from 'react';
import {SideBarSectionTab} from './sidebarsectiontab';
import PropTypes from 'prop-types';

/**
 * Main application component
 * @component
 * @param {array} tabs - The tabs to be displayed
 * @example
 * // Render the application
 * <SideBarSection tabs={tabs} />
 * @return {JSX.Element} The main application component
 */

const SideBarSection = ({tabs}) => {
    return (
        <div>
            {tabs.map((tab, index) => (
                // console.log(tab),
                <div key={index} className='relative flex h-[40px] w-[228px] cursor-pointer
                    justify-between gap-2
                    rounded-[8px] bg-transparent px-[16px] py-1
                   text-black no-underline -outline-offset-1 hover:bg-[#f2f4f5] hover:no-underline active:bg-[#eaedef]'>
                    {/* <div key={index} className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300
                    cursor-pointer hover:bg-slate-300 text-black'> */}
                    <SideBarSectionTab key={index} icon={tab.icon} text={tab.text} link={tab.link}/>
                </div>
            ))}
        </div>
    );
};

SideBarSection.propTypes = {
    tabs: PropTypes.array.isRequired,
};

export {SideBarSection};
