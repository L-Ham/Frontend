import React from 'react';
import {sectionHeaderClasses as styles} from './sidebarsection.styles.js';
import {useSectionHeader} from './sectionheader.hooks.js';
import PropTypes from 'prop-types';

/**
 * The sidebar section header component
 * responsible for openning and closing the section
 * @component
 * @param {string} sectionName - The section name
 * @param {boolean} isOpen - The state of the section
 * @param {function} setIsOpen - The function to set the state of the section
 * @example
 * // Render the sidebar section header
 * <SideBarSectionItem />
 * @return {JSX.Element} The sidebar section header component
 */
function SectionHeader({sectionName, isOpen, setIsOpen}) {
    const {
        ArrowUpRoundedIcon,
        arrowIconContainerStyles,
    } = useSectionHeader({isOpen});
    return (
        <div
            tabIndex='-1'
            className={styles.root}
            onClick={() => setIsOpen(!isOpen)}
            data-testid={`section-header-${sectionName}`}
        >
            <span className={styles.sectionHeaderWrapper}>
                <span className={styles.sectionNameWrapper}>
                    <span className={styles.sectionNameText}>
                        <span className={styles.sectionNameSubText}>
                            {sectionName}
                        </span>
                    </span>
                </span>
            </span>
            <span className={styles.sectionHeaderIconWrapper}>
                <span className={arrowIconContainerStyles}>
                    <ArrowUpRoundedIcon className={styles.arrowIcon}/>
                </span>
            </span>
        </div>
    );
}

SectionHeader.propTypes = {
    sectionName: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
};

export {SectionHeader};
