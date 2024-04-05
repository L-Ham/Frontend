/* eslint-disable max-len */
import {React, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {sectionItemsClasses as styles} from '../sidebarsection.styles';
import PropTypes from 'prop-types';


/**
 * The sidebar community component
 * @component
 * @param {string} imgURL - The URL of the image
 * @param {string} label - The text to be displayed
 * @param {string} href - The link to be redirected to
 * @example
 * // Render the sidebar community
 * <SidebarCommunity />
 * @return {JSX.Element} The sidebar community component
 */
function CommunityItem({imgURL='https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?format=pjpg&s=16025192cd7824a5f93aaa0ed9eb4f149761e18e', label='Test', href='/test'}) {
    const [starred, setStarred] = useState(false);
    const StarIcon = getIconComponent('star', starred);
    return (
        <NavLink to={href} className={styles.root}>

            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    <img src={imgURL} alt={label} className={styles.img} />
                </span>
                <span className={styles.label}>{label}</span>
            </span>
            <button
                className={styles.button}
                onClick={(e) => {
                    e.preventDefault();
                    setStarred(!starred);
                }}
            >
                <StarIcon />
            </button>
        </NavLink>
    );
}

CommunityItem.propTypes = {
    imgURL: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
};

export {CommunityItem};
