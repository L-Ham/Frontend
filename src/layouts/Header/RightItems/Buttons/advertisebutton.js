import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {advertiseButtonClasses as styles} from './buttons.styles';
import PropTypes from 'prop-types';
/**
 * Advertise button component
 * @component
 * @prop {string} href - The link to be redirected to
 * @example
 * // Render the advertise button
 * <AdvertiseButton />
 * @return {JSX.Element} The advertise button component
 */
function AdvertiseButton({href = '#'}) {
    const AddvertiseIcon = getIconComponent('advertise', false);
    return (
        <a className={styles.root} href={href}>
            <span className={styles.iconContainer}>
                <AddvertiseIcon />
            </span>
        </a>
    );
}

AdvertiseButton.propTypes = {
    href: PropTypes.string,
};

export {AdvertiseButton};
