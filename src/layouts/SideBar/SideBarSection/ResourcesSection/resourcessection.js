import React from 'react';
import {useState} from 'react';
import {SectionItem} from './sectionitem';
import {SectionHeader} from '../sectionheader';
import {sectionClasses as styles} from '../sidebarsection.styles';

/**
 * The sidebar resources section component
 * @component
 * @example
 * // Render the sidebar resources section
 * <ResourcesSection />
 * @return {JSX.Element} The sidebar resources section component
 */
function ResourcesSection() {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${styles.root} ${styles.open}` : `${styles.root} ${styles.close}`;
    const resources = [
        [
            {
                icon: 'admin',
                label: 'About Reddit',
                href: 'https://www.redditinc.com/',
            },
            {
                icon: 'topic-activism',
                label: 'Advertise',
                href: 'https://www.redditinc.com/advertising',
            },
            {
                icon: 'help',
                label: 'Help ',
                href: 'https://www.reddit.com/r/help/',
            },
            {
                icon: 'topic-reading',
                label: 'Blog ',
                href: 'https://www.redditblog.com/',
            },
            {
                icon: 'topic-career',
                label: 'Careers',
                href: 'https://www.redditinc.com/careers',
            },
            {
                icon: 'author',
                label: 'Press',
                href: 'https://www.redditinc.com/press',
            },
        ],
        [
            {
                icon: 'community',
                label: 'Communities',
                href: 'https://www.reddit.com/best/communities/1/',
            },
            {
                icon: 'topic-history',
                label: 'Best of reddit',
                href: 'https://www.reddit.com/posts/2023/',
            },
            {
                icon: 'topic',
                label: 'Topics',
                href: 'https://www.reddit.com/topics/a-1/',
            },
        ],
        [
            {
                icon: 'topic-ethics',
                label: 'Content Policy',
                href: 'https://www.redditinc.com/policies/content-policy',
            },
            {
                icon: 'topic-law',
                label: 'Privacy Policy',
                href: 'https://www.redditinc.com/policies/privacy-policy',
            },
            {
                icon: 'rules',
                label: 'User Agreement',
                href: 'https://www.redditinc.com/policies/user-agreement',
            },
        ],
    ];
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
