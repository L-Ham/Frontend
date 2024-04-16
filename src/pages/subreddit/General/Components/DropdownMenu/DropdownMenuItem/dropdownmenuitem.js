import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './dropdownmenuitem.styles.js';


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
        <li className={classes.listItem} onClick={onClick} data-testid="list-item">
            <div
                className={`${classes.itemContainer} ${isActive ? classes.activeItem : ''}`}
                data-testid="item-container"
            >
                <span className={classes.contentContainer} data-testid="content-container">
                    {Icon && <span className={classes.iconContainer} data-testid="icon-container">{Icon}</span>}
                    <span className={classes.textContainer} data-testid="text-container">{text}</span>
                </span>
                <span data-testid="gap-span">
                    {/** This span is used to apply a gap in the dropdown menu layout. */}
                </span>
            </div>
        </li>
    );
}

DropdownMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isHidden: PropTypes.bool,
    icon: PropTypes.element,
    isActive: PropTypes.bool,
};

