import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from './DropdownMenu';
import {getIconComponent} from './icons';

/**
 * Renders a MultiLinkButton.
 * @param {Object} data - The data for the MultiLinkButton.
 * example:
 * {
 *   icon : <Icon>
 *   buttonText: 'google',
 *   targetOptions: [
 *      {
 *         text: 'Google',
 *        targetURL: 'https://www.google.com',
 *         icon : <Icon>
 *    },
 *   {
 *     text: 'Google Images',
 *   targetURL: 'https://www.google.com/imghp',
 *  icon : <Icon>
 * },
 * ],
 * }
 * @return {JSX.Element} The rendered component.
 */
export function MultiLinkButton({data}) {
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);

    const {icon: IconComponent, buttonText, targetOptions} = data;
    const isSingleOption = targetOptions.length === 1;
    const CaretDownIcon = getIconComponent('caret-down', false);


    // Toggles the visibility of the options.
    const toggleOptionsVisibility = () => setIsOptionsVisible((prevState) => !prevState);

    /*
        * Handles the click event for the MultiLinkButton.
        * If the MultiLinkButton has only one target option, it opens the target URL in a new tab.
        * If the MultiLinkButton has multiple target options, it toggles the visibility of the options.
        */
    const handleClick = isSingleOption ?
        () => window.open(data.targetOptions[0].targetURL, '_blank') :
        toggleOptionsVisibility;


    // Create the menu items for the dropdown menu.
    const menuItems = [];
    targetOptions.forEach((option) => {
        menuItems.push({
            content: {text: option.text},
            onClick: () => {
                window.open(option.targetURL, '_blank');
            },
        });
    });

    return (
        <li
            key={buttonText}
            onClick={handleClick}
            className={`list-none flex flex-row items-center justify-center py-2 px-0 w-full cursor-pointer text-white 
        text-sm mb-2 relative ${
        !isSingleOption ? 'bg-[#2f2401] hover:bg-[#3b2d01]' : 'bg-[#2f2401] hover:bg-[#3b2d01] hover:underline'
        } rounded-full`}
        >
            {IconComponent ? IconComponent : null}
            <span className='hover:underline'>{data.buttonText}</span>
            {!isSingleOption && <CaretDownIcon className='ml-1' />}
            <div>
                {isOptionsVisible && <DropdownMenu menuItems={menuItems} />}
            </div>
        </li>
    );
}

MultiLinkButton.propTypes = {
    data: PropTypes.object.isRequired,
};
