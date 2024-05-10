import React from 'react';
import {popularCommunityClasses as styles} from './popularcommunities.style.js';
import PropTypes from 'prop-types';

/**
 * Renders the popular community component.
 * @param {string} iconUrl - The icon url.
 * @param {string} communityName - The community name.
 * @param {number} memberCount - The member count.
 * @return {JSX.Element} The PopularCommunity component.
 */
function PopularCommunity({iconUrl, communityName, memberCount}) {
    return (
        <li className={styles.listItem} data-testid={`popular-community-${communityName}`}>
            <a className={styles.link}
                href={`/r/${communityName}`}>
                <span className={styles.infoWrapper}>
                    <span className={styles.iconWrapper}>
                        <span className={styles.iconcontainer}>
                            <img
                                src={iconUrl}
                                className={styles.icon}
                                width="32"
                                height="32"
                                loading="lazy"/>
                        </span>
                    </span>
                    <span className={styles.textWrapper}>
                        <span className={styles.nameWrapper}>
                            <span className={styles.name}>
                                r/{communityName}
                            </span>
                        </span>
                        <span className={styles.memberCount}>
                            {memberCount} members
                        </span>
                    </span>
                </span>
            </a>
        </li>
    );
}

PopularCommunity.propTypes = {
    iconUrl: PropTypes.string.isRequired,
    communityName: PropTypes.string.isRequired,
    memberCount: PropTypes.number.isRequired,
};

export {PopularCommunity};
