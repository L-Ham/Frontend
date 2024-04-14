/* eslint-disable max-len */
import React from 'react';
import {usePopularCommunities} from './popularcommunities.hooks.js';
import {popularCommunitiesClasses as styles} from './popularcommunities.style.js';

/**
 * Renders the popular communities component in right side bar.
 * @return {JSX.Element} The rendered component.
 */
function PopularCommunities() {
    const {popularCommunities, handleClick, buttonLabel} = usePopularCommunities();
    return (
        <aside className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <div>Popular Communities</div>
                    </h2>
                </div>
                <li className={styles.listItem}>
                    <ul className={styles.list} data-testid="popular-communities-list">
                        {popularCommunities}
                        <button className={styles.button} onClick={handleClick}
                            data-testid="popular-communities-button">
                            {buttonLabel}
                        </button>
                    </ul>
                </li>

            </div>
        </aside>
    );
}

export {PopularCommunities};
