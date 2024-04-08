import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * The menu button component, responsible for toggling the sidebar
 * @component
 * @param {function} onClick - The function to be called when the button is clicked
 * @example
 * // Render the menu button
 * <MenuButton />
 * @return {JSX.Element} The menu button component
 */
function MenuButton({onClick}) {
    const MenuIcon = getIconComponent('menu', false);
    return (
        <button className="button-medium inline-flex size-10 items-center
                            justify-center rounded-full px-2 hover:bg-[#e2e7e9] active:bg-[#d2dadd]
                            nd:hidden " id="navbar-menu-button" type="button" onClick={onClick}>
            <span className="flex items-center justify-center">
                <span className="flex">
                    <MenuIcon />
                </span>
            </span>
        </button>
    );
}

MenuButton.propTypes = {
    onClick: PropTypes.func,
};

export {MenuButton};
