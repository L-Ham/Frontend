import {React, useState} from 'react';
import {SideBarSectionItem} from './sidebarsectionitem';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PropTypes from 'prop-types';

/**
 * Main application component
 * @component
 * @param {array} tabs - The tabs to be displayed
 * @param {boolean} collapsible - Whether or not the section is collapsible
 * @param {string} sectionName - The section name
 * @example
 * // Render the application
 * <SideBarSection tabs={tabs} />
 * @return {JSX.Element} The main application component
 */

const SideBarSection = ({tabs, collapsible = false, sectionName = ''}) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            {collapsible && (
                <div tabIndex='-1' className='relative flex cursor-pointer
                justify-between gap-2 bg-transparent py-1
                pl-4 pr-[16px] text-[#0f1a1c]
                -outline-offset-1  hover:bg-[#f2f4f5] hover:no-underline s:rounded-[8px]'
                onClick={() => setIsOpen(!isOpen)}
                >
                    <span className='flex min-w-0 shrink items-center gap-2'>
                        <span className='flex min-w-0 shrink flex-col justify-center py-1.5'>
                            <span className='text-sm'>
                                <span className='text-xs tracking-widest text-[#576f76]'>
                                    {sectionName}
                                </span>
                            </span>
                            {/* <span className='text-xs text-[#576f76]'>
                                test
                            </span> */}
                        </span>
                    </span>
                    <span className='flex shrink-0 items-center'>
                        <span className={`flex h-6 items-center justify-center ${isOpen ? 'rotate-0' : '-rotate-180'} 
                                transition-transform duration-300 ease-in-out`}>
                            <KeyboardArrowUpRoundedIcon height={20} width={20}/>
                        </span>
                    </span>
                </div>
            )}
            <div className={`overflow-hidden transition-[max-height,opacity]
                            duration-300 ease-in-out 
                            ${isOpen? 'max-h-full opacity-100': 'max-h-0 opacity-0'}`}
            >

                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index}>
                            <SideBarSectionItem {...tab} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

SideBarSection.propTypes = {
    tabs: PropTypes.array.isRequired,
    collapsible: PropTypes.bool,
    sectionName: PropTypes.string,
};

export {SideBarSection};
