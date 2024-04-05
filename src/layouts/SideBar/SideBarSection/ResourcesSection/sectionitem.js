import React from 'react';
import {NavLink} from 'react-router-dom';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {sectionItemsClasses as styles} from '../sidebarsection.styles';
import PropTypes from 'prop-types';

/**
 * The generic sidebar section item component
 * consists of an icon and a label with a link and onClick event
 * @component
 * @param {string} icon - The icon to be displayed
 * @param {string} label - The text to be displayed
 * @param {string} href - The link to be redirected to
 * @example
 * // Render the generic sidebar section item
 * <SectionItem />
 * @return {JSX.Element} The generic sidebar section item component
 */
function SectionItem({icon, label, href='/test'}) {
    const Icon = getIconComponent(icon, false);
    return (

        <NavLink to={href} className={styles.root}>
            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    <Icon />
                </span>
                <span className={styles.label}>{label}</span>
            </span>
        </NavLink>
    );
}

SectionItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
};

export {SectionItem};
