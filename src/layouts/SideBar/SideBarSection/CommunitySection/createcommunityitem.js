import React from 'react';
import {sectionItemsClasses as styles} from '../sidebarsection.styles';
import {useCreateCommunityItem} from './community.hooks';
import PropTypes from 'prop-types';

/**
 * The Create Community Item in the sidebar section
 * consists of an icon and a label with a onClick event
 * @component
 * @param {string} icon - Name of the icon to be displayed
 * @param {string} label - The text to be displayed
 * @example
 * // Render the generic sidebar section item
 * <SectionItem />
 * @return {JSX.Element} The generic sidebar section item component
 */
function CreateCommunityItem({icon, label}) {
    const {Icon, onClick} = useCreateCommunityItem();

    return (

        <div className={styles.root} onClick={onClick}>
            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    <Icon />
                </span>
                <span className={styles.label}>{label}</span>
            </span>
        </div>
    );
}

CreateCommunityItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

export {CreateCommunityItem};
