import React from 'react';
import PropTypes from 'prop-types';

/**
 * DropdownMenu component.
 * @param {Object} props - Component props.
 * @param {Array} props.menuItems - Array of menu items.
 * @param {string} props.activeItem - Active item in the dropdown menu.
 * @param {string} props.className - Additional classes for styling.
 * @return {JSX.Element} DropdownMenu component.
 */
export function DropdownMenu({
    menuItems,
    activeItem,
    className,
},
) {
    return (
        <div className={`absolute -bottom-20 right-0 z-10 flex flex-col overflow-hidden rounded-lg bg-[#ffffff] 
        ${className}`}>
            {menuItems.map((item) => {
                const {text, icon: IconComponent} = item.content;
                const isActive = (activeItem && activeItem === text);
                return (
                    <div
                        className={
                            `flex cursor-pointer flex-row items-center px-4 py-2 ${(isActive) ?
                                'bg-[#ffe1fe]' : ''} hover:bg-pink-200`
                        }
                        key={text}
                        onClick={item.onClick}
                    >
                        {IconComponent ? IconComponent : null}
                        <span className='whitespace-nowrap'>{text}</span>
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
    className: PropTypes.string,
};

DropdownMenu.defaultProps = {
    activeItem: '',
    className: '',
};
