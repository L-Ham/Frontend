import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenuItem} from './DropdownMenuItem/dropdownmenuitem';
import {classes} from './dropdownmenu.styles';
import {useDropdownMenu} from './dropdownmenu.hooks';

/**
 * DropdownMenu component
 * @param {string} className - additional classes
 * @param {string} position - position of the dropdown menu
 * @param {array} items - array of items to display in the dropdown menu
 * @param {boolean} isHidden - whether the dropdown menu is hidden
 * @param {string} activeItem - the active item in the dropdown menu
 * @return {JSX.Element}
 * @example
 * const items = [
 *    {content: {text: 'Hot', icon: 'hot'}, onClick: () => console.log('Hot clicked')},
 *   {content: {text: 'New', icon: 'new'}, onClick: () => console.log('New clicked')},
 *  {content: {text: 'Top', icon: 'top'}, onClick: () => console.log('Top clicked')},
 * ];
 *
 * <DropdownMenu
 *   className="w-32"
 *  position="top-0 right-0"
 * items={items}
 * isHidden={false}
 * activeItem="Hot"
 * />
 */
export function DropdownMenu({className = '', position, items, isHidden = true, activeItem = null}) {
    const {processedItems} = useDropdownMenu({items, activeItem});

    return (
        <div className={`${className} ${classes.container} ${position}`}>
            <ul className={classes.list} hidden={isHidden}>
                {processedItems && processedItems.map(({text, onClick, icon, isActive}) => (
                    <DropdownMenuItem
                        key={text}
                        text={text}
                        onClick={onClick}
                        icon={icon}
                        isActive={isActive}
                    />
                ))}
            </ul>
        </div>
    );
}

DropdownMenu.propTypes = {
    className: PropTypes.string,
    position: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isHidden: PropTypes.bool,
    activeItem: PropTypes.string,
};
