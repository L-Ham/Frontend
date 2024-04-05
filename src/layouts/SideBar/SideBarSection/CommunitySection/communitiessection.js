import {React, useState} from 'react';
import {CommunityItem} from './communityitem';
import {CreateCommunityItem} from './createcommunityitem';
import {SectionHeader} from '../sectionheader';
import {sectionClasses as styles} from '../sidebarsection.styles';

/**
 * The sidebar recent communities section component
 * @component
 * @example
 * // Render the sidebar recent communities section
 * <RecentCommunitiesSection />
 * @return {JSX.Element} The sidebar recent communities section component
 */
function CommunitiesSection() {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${styles.root} ${styles.open}` : `${styles.root} ${styles.close}`;
    const Communities = [
        {
            // eslint-disable-next-line max-len
            imgURL: 'https://styles.redditmedia.com/t5_323oy/styles/communityIcon_wqodb68q5gca1.jpg?format=pjpg&s=41993445a49aa828a9f9996e00867bb94fb03269',
            label: 'r/CasualConversation',
            href: 'https://www.reddit.com/r/CasualConversation/',
        },
        {
            imgURL: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png',
            label: 'r/AskReddit',
            href: 'https://www.reddit.com/r/AskReddit/',
        },
    ];
    return (
        <>
            <SectionHeader sectionName='COMMUNITIES' isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={rootStyles}>
                <CreateCommunityItem />
                {Communities.map((community, index) => (
                    <CommunityItem key={index} {...community} />
                ))}
            </div>
        </>
    );
}

export {CommunitiesSection};
