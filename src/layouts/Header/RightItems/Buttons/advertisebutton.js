import React from 'react';
import {advertiseButtonClasses as styles} from './buttons.styles.js';
import {useAdvertiseButton} from './buttons.hooks.js';

/**
 * Advertise button component
 * @component
 * @example
 * // Render the advertise button
 * <AdvertiseButton />
 * @return {JSX.Element} The advertise button component
 */
function AdvertiseButton() {
    const {AddvertiseIcon, href} = useAdvertiseButton();
    return (
        <a className={styles.root} href={href} data-testid="advertise-button">
            <span className={styles.iconContainer}>
                <AddvertiseIcon />
            </span>
        </a>
    );
}

export {AdvertiseButton};
