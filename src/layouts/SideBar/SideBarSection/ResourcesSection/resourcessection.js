import React from 'react';
import {SectionItem} from './sectionitem';
import {SectionHeader} from '../sectionheader';
import {sectionClasses as styles} from '../sidebarsection.styles';
import {useResourcesSection} from './resources.hooks';

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
            <SectionHeader sectionName='RESOURCES' isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={rootStyles}>
                {resources.map((community, index) => (
                    <React.Fragment key={index}>
                        {community.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.listItem}>
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
