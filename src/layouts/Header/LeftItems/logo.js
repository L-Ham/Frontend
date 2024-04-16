import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap.js';
import {logoStyles as styles} from './leftitems.styles.js';

/**
 * The Reddit logo component
 * @component
 * @example
 * // Render the Reddit logo
 * <RedditLogo />
 * @return {JSX.Element} The Reddit logo component
 */
function Logo() {
    const RedditLogo = getIconComponent('reddit-logo', false);
    const RedditName = getIconComponent('reddit-name', false);
    return (
        <div className={styles.logoContainer} data-testid="logo-container">
            <a href='/' className={styles.logoLink} data-testid="logo-link">
                <span className={styles.logoIconWrapper} data-testid="logo-icon-wrapper">
                    <RedditLogo/>
                </span>
                <span className={styles.logoNameWrapper} data-testid="logo-name-wrapper">
                    <RedditName className={styles.logoName} />
                </span>
            </a>
        </div>
    );
}

export {Logo};
