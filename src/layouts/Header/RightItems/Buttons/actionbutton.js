import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import PropTypes from 'prop-types';
import {actionButtonClasses as styles} from './buttons.styles.js';
import '../../appbar.css';

/**
 * Button component used on the right side of the header
 * @component
 * @prop {string} icon - The icon to display in the button
 * @prop {function} onClick - The function to call when the button is clicked
 * @example
 * // Render the button
 * <ActionButton />
 * @return {JSX.Element} The button component
 */
function ActionButton({icon, onClick}) {
    const Icon = getIconComponent(icon, false);
    return (
        <button className={styles.root} onClick={onClick} data-testid={`action-button-${icon}`}>
            <span className={styles.iconContainer}>
                <Icon />
            </span>
        </button>
    );
}

ActionButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export {ActionButton};
