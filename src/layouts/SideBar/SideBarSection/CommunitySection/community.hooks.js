import {useState} from 'react';
import {sectionClasses} from '../sidebarsection.styles';
// import {sectionItemsClasses} from '../sidebarsection.styles';
import {getIconComponent} from '../../../../generic components/iconsmap';

// communities section hooks
export const useCommunitiesSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${sectionClasses.root} ${sectionClasses.open}` :
        `${sectionClasses.root} ${sectionClasses.close}`;
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
    return {
        isOpen,
        setIsOpen,
        rootStyles,
        Communities,
    };
};

// community item hooks
export const useCommunityItem = () => {
    const [starred, setStarred] = useState(false);
    const StarIcon = getIconComponent('star', starred);

    /**
     * Handles the star button click
     * @param {Object} e - The event object
     * @return {undefined}
     * */
    function handleStar(e) {
        e.preventDefault();
        setStarred(!starred);
    }

    return {
        handleStar,
        StarIcon,
    };
};

// create community item hooks
export const useCreateCommunityItem = () => {
    const Icon = getIconComponent('add', false);

    /**
     * Handles the create community click event
     * @param {Object} e - The event object
     * @return {undefined}
     * */
    function onClick(e) {
        e.preventDefault();
        alert('Create Community');
    }

    return {
        Icon,
        onClick,
    };
};
