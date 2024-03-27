import React from 'react';
import PropTypes from 'prop-types';

/**
 * The sidebar section summary/header component
 * @component
 * @param {element} icon - The icon to be displayed
 * @param {string} label - The text to be displayed
 * @param {string} link - The link to be redirected to
 * @example
 * // Render the sidebar section summary/header
 * <SideBarSectionItem />
 * @return {JSX.Element} The sidebar section summary/header component
 */
const SideBarSectionItem = ({icon, label, link}) => {
    return (

        <a href={link} className='relative flex h-[40px] w-[228px] cursor-pointer
                    justify-between gap-2
                    rounded-[8px] bg-transparent px-[16px] py-1
                   text-black no-underline -outline-offset-1 hover:bg-[#f2f4f5] hover:no-underline active:bg-[#eaedef]'>
            <span className='flex min-w-0 shrink items-center gap-2'>
                <span className='flex size-8 shrink-0 items-center justify-center
                                    text-xl leading-4'>
                    {icon}
                </span>
                <span className='text-black'>{label}</span>
            </span>
        </a>
    );
};

SideBarSectionItem.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};


export {SideBarSectionItem};
