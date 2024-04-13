import React from 'react';
import {SectionItem} from './sectionitem.js';
import {SectionHeader} from '../sectionheader.js';
import {sectionClasses as styles} from '../sidebarsection.styles.js';
import {useResourcesSection} from './resources.hooks.js';
import uuid from 'react-uuid/uuid.js';

/**
 * The sidebar resources section component
 * @component
 * @example
 * // Render the sidebar resources section
 * <ResourcesSection />
 * @return {JSX.Element} The sidebar resources section component
 */
function ResourcesSection() {
    const {
        isOpen,
        setIsOpen,
        rootStyles,
        resources,
    } = useResourcesSection();
    return (
        <>
            <SectionHeader sectionName='RESOURCES' isOpen={isOpen} setIsOpen={setIsOpen}
                data-testid='resources-section-header' />
            <div className={rootStyles}>
                {resources.map((community, index) => (
                    <React.Fragment key={index}>
                        {community.map((item) => (
                            <li key={uuid()} className={styles.listItem}>
                                <SectionItem {...item} />
                            </li>
                        ))}
                        {index < resources.length - 1 &&
                        <hr className={styles.divider} />}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}

export {ResourcesSection};
