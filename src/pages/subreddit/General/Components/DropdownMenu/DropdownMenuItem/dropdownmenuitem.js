import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './dropdownmenuitem.styles';


/**
 * Renders a dropdown menu item with optional active styling and an icon.
 * @param {object} props The component props.
 * @param {string} props.text The display text of the item.
 * @param {Function} props.onClick Click handler for the item.
 * @param {JSX.Element} props.icon An optional icon to display alongside text.
 * @param {boolean} props.isActive Marks the item as active, altering its style.
 * @return {JSX.Element} A styled dropdown menu item.
 */
export function DropdownMenuItem({text, onClick, icon: Icon, isActive=false}) {
    return (
        <li className={classes.listItem} onClick={onClick}>
            <div
                className={`${classes.itemContainer} ${isActive ? classes.activeItem : ''}`}
            >
                <span className={classes.contentContainer}>
                    {Icon && <span className={classes.iconContainer}>{Icon}</span>}
                    <span className={classes.textContainer}>{text}</span>
                </span>
                <span>
                    {/** This span is used to apply a gap in the dropdown menu layout. */}
                </span>
            </div>
        </li>
    );
}

DropdownMenuItem.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    isHidden: PropTypes.bool,
    icon: PropTypes.element,
    isActive: PropTypes.bool,
};

