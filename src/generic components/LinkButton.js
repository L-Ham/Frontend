import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from './DropdownMenu';
import {ReactComponent as CaretDownIconOutline} from '../assets/icons/caret-down-outline.svg';
import {ReactComponent as MessageIconOutline} from '../assets/icons/message-outline.svg';

/**
 * Renders a LinkButton.
 * @param {Object} data - The data for the LinkButton.
 * example:
 * {
 *   buttonText: 'google',
 *   targetOptions: [
 *      {
 *         text: 'Google',
 *        targetURL: 'https://www.google.com',
 *    },
 *   {
 *     text: 'Google Images',
 *   targetURL: 'https://www.google.com/imghp',
 * },
 * ],
 * }
 * @param {string} icon - The icon for the LinkButton.
 * @return {JSX.Element} The rendered component.
 */
export function LinkButton({data}) {
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
    const icon = data.icon === 'email' ? 'email' : null;
    const IconComponent = icon === 'email' ? MessageIconOutline : null;
    const isSingleOption = data.targetOptions.length === 1;


    // Toggles the visibility of the options.
    const toggleOptionsVisibility = () => setIsOptionsVisible((prevState) => !prevState);

    /*
        * Handles the click event for the LinkButton.
        * If the LinkButton has only one target option, it opens the target URL in a new tab.
        * If the LinkButton has multiple target options, it toggles the visibility of the options.
        */
    const handleClick = isSingleOption ?
        () => window.open(data.targetOptions[0].targetURL, '_blank') :
        toggleOptionsVisibility;


    // Create the menu items for the dropdown menu.
    const menuItems = [];
    data.targetOptions.forEach((option) => {
        menuItems.push({
            content: {text: option.text},
            onClick: () => {
                window.open(option.targetURL, '_blank');
            },
        });
    });

    return (
        <li
            key={data.buttonText}
            onClick={handleClick}
            className={`list-none flex flex-row items-center justify-center py-2 px-0 w-full cursor-pointer text-white 
        text-sm mb-2 relative ${
        !isSingleOption ? 'bg-[#2f2401] hover:bg-[#3b2d01]' : 'bg-[#2f2401] hover:bg-[#3b2d01] hover:underline'
        } rounded-full`}
        >
            {icon && <IconComponent className='mr-1'/>}
            <span className='hover:underline'>{data.buttonText}</span>
            {!isSingleOption && <CaretDownIconOutline className='ml-1'/>}
            <div>
                {isOptionsVisible && <DropdownMenu menuItems={menuItems}/>}
            </div>
        </li>
    );
}

LinkButton.propTypes = {
    data: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
};
