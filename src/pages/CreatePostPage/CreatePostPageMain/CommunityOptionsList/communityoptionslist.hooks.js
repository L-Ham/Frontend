import {useState} from 'react';
import {useCreatePostPage} from '../../createpostpage.context.js';
import defaultAvatar from '../../../../assets/icons/default-subreddit.svg';
import {getIconComponent} from '../../../../generic components/iconsmap.js';

export const useCommunityOptions = () => {
    const {about} = useCreatePostPage();
    const [isCommunityOptionsListOpen, setIsCommunityOptionsListOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('r/');

    // Initialize search input based on about data
    if (about && searchInput === 'r/' && about.communityDetails.name) {
        setSearchInput('r/' + about.communityDetails.name);
    }

    const avatarImage = about?.communityDetails?.avatarImage;
    const CarretDownIcon = getIconComponent('caret-down', false);
    const SearchIcon = getIconComponent('search');
    const Tag = isCommunityOptionsListOpen ? SearchIcon : 'img';
    const tagProps = Tag === 'img' ? {
        style: {backgroundColor: 'rgb(170, 150, 85)'},
        alt: 'Subreddit Icon',
        src: avatarImage || defaultAvatar,
    } : {};

    // Event handlers
    const handleListClick = (event) => {
        event.preventDefault();
        if (event.type === 'focus') {
            event.target.select();
            if (!isCommunityOptionsListOpen) {
                setIsCommunityOptionsListOpen(true);
            }
            return;
        }
        setIsCommunityOptionsListOpen(!isCommunityOptionsListOpen);
    };

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    return {searchInput, handleSearchInput, handleListClick, isCommunityOptionsListOpen, Tag, tagProps, CarretDownIcon};
};
