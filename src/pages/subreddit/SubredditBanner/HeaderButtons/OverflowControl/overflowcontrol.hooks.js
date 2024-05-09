import {useState} from 'react';
import {useSubreddit} from '../../../subredditcontext.js';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';

export const useOverflowControl = ({isMuted, onMuteClick, isFavourite, onFavouriteClick,
    handleJoinClick,
    isSubscribed}) => {
    const {about} = useSubreddit();
    const [isOtherOptionsVisible, setIsOtherOptionsVisible] = useState(false);

    const handleOtherOptionsClick = () => {
        setIsOtherOptionsVisible(!isOtherOptionsVisible);
    };

    const {communityDetails: {name, isModerator}} = about;
    const prefixedName = `r/${name}`;

    const menuItems = [
        {
            content: {
                text: (isFavourite ? 'Remove from favorites' : 'Add to favorites'),
            },
            onClick: () => {
                onFavouriteClick();
                setIsOtherOptionsVisible(false);
            },
        },
        {
            content: {
                text: (isMuted ? `Unmute ${prefixedName}` : `Mute ${prefixedName}`),
            },
            onClick: () => {
                onMuteClick();
                setIsOtherOptionsVisible(false);
            },
        },
    ];


    if (isModerator) {
        menuItems.push({
            content: {
                text: isSubscribed ? 'Leave' : 'Join',
            },
            onClick: () => {
                handleJoinClick(false, true);
                setIsOtherOptionsVisible(false);
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
