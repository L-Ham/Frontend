import {useState} from 'react';
import {sectionClasses} from '../sidebarsection.styles.js';

// recent communities section hooks
export const useRecentCommunitiesSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${sectionClasses.root} ${sectionClasses.open}` :
        `${sectionClasses.root} ${sectionClasses.close}`;
    const recentCommunities = [
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
    return {
        isOpen,
        setIsOpen,
        rootStyles,
        recentCommunities,
    };
};
