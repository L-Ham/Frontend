import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap.js';
import {scrollButtonClasses as styles} from './gallerycarousel.styles.js';
import PropTypes from 'prop-types';

/**
 * ScrollButton component.
 * @param {string} direction - The direction of the button. (right or left)
 * @param {function} onClick - The onClick event of the button.
 * @return {JSX.Element} The ScrollButton component.
 */
function ScrollButton({direction, onClick}) {
    const Icon = getIconComponent(`${direction}-arrow`);
    return (
        <button className={styles.button}
            onClick={onClick} >

            <span className={styles.iconWrapper}>
                <span className={styles.icon}>
                    <Icon/>
                </span>
            </span>
        </button>
    );
}

ScrollButton.propTypes = {
    direction: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export {ScrollButton};
