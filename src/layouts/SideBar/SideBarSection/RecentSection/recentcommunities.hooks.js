import {useState} from 'react';
import {sectionClasses} from '../sidebarsection.styles.js';
import {useSelector} from 'react-redux';

// recent communities section hooks
export const useRecentCommunitiesSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${sectionClasses.root} ${sectionClasses.open}` :
        `${sectionClasses.root} ${sectionClasses.close}`;

    const recentCommunities = useSelector((state) => state.user.recentCommunities) || {};

    return {
        isOpen,
        setIsOpen,
        rootStyles,
        recentCommunities,
    };
};
