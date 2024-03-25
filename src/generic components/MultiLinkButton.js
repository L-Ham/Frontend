import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from './DropdownMenu';
import {getIconComponent} from './iconsMap';

/**
 * Renders a MultiLinkButton.
 * @param {Object} data - The data for the MultiLinkButton.
 * @return {JSX.Element} The rendered component.
 */
export function MultiLinkButton({data}) {
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);

    const {icon: IconComponent, groupName, links} = data;
    const isSingleOption = !groupName;
    const CaretDownIcon = getIconComponent('caret-down', false);


    // Toggles the visibility of the options.
    const toggleOptionsVisibility = () => setIsOptionsVisible((prevState) => !prevState);

    /*
        * Handles the click event for the MultiLinkButton.
        * If the MultiLinkButton has only one target option, it opens the target URL in a new tab.
        * If the MultiLinkButton has multiple target options, it toggles the visibility of the options.
        */
    const handleClick = isSingleOption ?
        () => window.open(links[0].URL, '_blank') :
        toggleOptionsVisibility;


    // Create the menu items for the dropdown menu.
    const menuItems = [];
    links.forEach((link) => {
        const {name, URL} = link;
        menuItems.push({
            content: {text: name},
            onClick: () => {
                window.open(URL, '_blank');
            },
        });
    });

    return (
        <li
            key={groupName}
            onClick={handleClick}
            className={`list-none flex flex-row items-center justify-center py-2 px-0 w-full cursor-pointer text-white 
        text-sm mb-2 relative ${
        !isSingleOption ? 'bg-[#2f2401] hover:bg-[#3b2d01]' : 'bg-[#2f2401] hover:bg-[#3b2d01] hover:underline'
        } rounded-full`}
        >
            {IconComponent ? IconComponent : null}
            <span className='hover:underline'>{links[0].name}</span>
            {!isSingleOption && <CaretDownIcon className='ml-1' />}
            <div>
                {isOptionsVisible && <DropdownMenu menuItems={menuItems} className='inset-x-1/2 '/>}
            </div>
        </li>
    );
}

MultiLinkButton.propTypes = {
    data: PropTypes.object.isRequired,
};
