import React from 'react';
import PropTypes from 'prop-types';

/**
 * DropdownMenu component.
 * @param {Object} props - Component props.
 * @param {Array} props.menuItems - Array of menu items.
 * @param {string} props.activeItem - Active item in the dropdown menu.
 * @return {JSX.Element} DropdownMenu component.
 */
export function DropdownMenu({
    menuItems,
    activeItem,
},
) {
    console.log(menuItems);
    return (
        <div className="absolute -bottom-20 right-0 z-10 flex flex-col overflow-hidden rounded-lg bg-[#1f1700]">
            {menuItems.map((item) => {
                const {text, icon: IconComponent} = item.content;
                const isActive = (activeItem && activeItem === text);
                return (
                    <div
                        className={
                            `flex cursor-pointer flex-row items-center px-4 py-2 ${(isActive) ?
                                'bg-[#251c00]' : ''} hover:bg-[#2f2401]`
                        }
                        key={item.content.text}
                        onClick={item.onClick}
                    >
                        {IconComponent ? IconComponent : null}
                        <span className='whitespace-nowrap'>{item.content.text}</span>
                    </div>
                );
            })}
        </div>
    );
}

DropdownMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string,
        }).isRequired,
        onClick: PropTypes.func.isRequired,
    })).isRequired,
    activeItem: PropTypes.string,
    icons: PropTypes.object.isRequired,
};
