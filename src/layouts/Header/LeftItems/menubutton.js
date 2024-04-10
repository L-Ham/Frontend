import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap.js';
import {menuButtonStyles as styles} from './leftitems.styles.js';
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
        <button className={styles.button} type="button" onClick={onClick} data-testid="menu-button">
            <span className={styles.buttonIconWrapper}>
                <span className={styles.buttonIcon}>
                    <MenuIcon />
                </span>
            </span>
        </button>
    );
}

MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export {MenuButton};
