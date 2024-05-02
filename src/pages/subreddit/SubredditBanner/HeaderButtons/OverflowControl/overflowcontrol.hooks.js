import {useState} from 'react';
import {useSubreddit} from '../../../subredditcontext.js';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';

export const useOverflowControl = ({isMuted, onMuteClick, isFavourite, onFavouriteClick,
    handleJoinClick}) => {
    const {about, isModerator} = useSubreddit();
    const [isOtherOptionsVisible, setIsOtherOptionsVisible] = useState(false);

    const handleOtherOptionsClick = () => {
        setIsOtherOptionsVisible(!isOtherOptionsVisible);
    };

    const {communityDetails: {name}} = about;
    const prefixedName = `r/${name}`;

    const menuItems = [
        {
            content: {
                text: (isFavourite ? 'Remove from favorites' : 'Add to favorites'),
            },
            onClick: onFavouriteClick,
        },
        {
            content: {
                text: (isMuted ? `Unmute ${prefixedName}` : `Mute ${prefixedName}`),
            },
            onClick: onMuteClick,
        },
    ];

    const {communityDetails: {isMember}} = about;

    if (isModerator) {
        menuItems.push({
            content: {
                text: isMember ? 'Leave' : 'Join',
            },
            onClick: () => {
                handleJoinClick(false, true);
            },
        });
    }

    const OverflowHorizontalIcon = getIconComponent('overflow-horizontal', false);

    return {
        isOtherOptionsVisible,
        handleOtherOptionsClick,
        menuItems,
        OverflowHorizontalIcon,
    };
};
