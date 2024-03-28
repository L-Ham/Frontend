import React from 'react';
import PropTypes from 'prop-types';
// components
import {DropdownMenu} from '../../generic components/dropdownmenu';
// icons
import {getIconComponent} from '../../generic components/iconsmap';

/**
 * Renders a MultiLinkButton.
 * @param {Object} data - The data for the MultiLinkButton.
 * @return {JSX.Element} The rendered component.
 */
export function MultiLinkButton({data}) {
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
    const {icon: IconComponent, text, url, children} = data;
    const isSingleOption = !children;
    const CaretDownIcon = getIconComponent('caret-down', false);


    /**
     * Toggles the visibility of the options.
     * @return {void}
     * */
    function toggleOptionsVisibility() {
        setIsOptionsVisible((prevState) => !prevState);
    }

    /*
        * Handles the click event for the MultiLinkButton.
        * If the MultiLinkButton has only one target option, it opens the target url in a new tab.
        * If the MultiLinkButton has multiple target options, it toggles the visibility of the options.
        */
    let handleClick;
    if (isSingleOption) {
        handleClick = function() {
            window.open(url, '_blank');
        };
    } else {
        handleClick = toggleOptionsVisibility;
    }

    // Create the menu items for the dropdown menu.
    const menuItems = [];
    !isSingleOption && children.forEach((item) => {
        const {text, url} = item;
        menuItems.push({
            content: {text: text},
            onClick: () => {
                window.open(url, '_blank');
            },
        });
    });

    return (
        <li
            key={text}
            onClick={handleClick}
            className={`list-none flex flex-row items-center justify-center py-2 px-0 w-full 
            cursor-pointer text-black bg-[#fee5b4] 
            hover:bg-[#fede99]
            text-sm mb-2 relative ${!isSingleOption ? '' : 'hover:underline'} rounded-full`}
        >
            {IconComponent ? IconComponent : null}
            <span className='hover:underline'>{text}</span>
            {!isSingleOption && <CaretDownIcon className='ml-1' />}
            <div>
                {isOptionsVisible && <DropdownMenu menuItems={menuItems} className='bottom-[70px] right-1/2'/>}
            </div>
        </li>
    );
}

MultiLinkButton.propTypes = {
    data: PropTypes.object.isRequired,
};
