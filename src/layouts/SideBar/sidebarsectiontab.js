import React from 'react';
import PropTypes from 'prop-types';

/**
 * Main application component
 * @component
 * @param {icon} props - The icon to be displayed
 * @param {text} props - The text to be displayed
 * @param {link} props - The link to be redirected to
 * @example
 * // Render the application
 * <SideBarSectionTab />
 * @return {JSX.Element} The main application component
 */

const SideBarSectionTab = ({icon, text, link}) => {
    return (
        <>
            <a href={link}>
                <span className='flex min-w-0 shrink items-center gap-2'>
                    <span className='flex size-8 shrink-0 items-center justify-center
                                    text-xl leading-4'>
                        {icon}
                    </span>
                    <span className='text-black'>{text}</span>
                </span>
            </a>
        </>
    );
};

SideBarSectionTab.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export {SideBarSectionTab};
