import {buttonClasses as classes} from '../../../subreddit.styles.js';
import {useSubreddit} from '../../../subredditcontext.js';

export const useJoinButton = ({handleJoinClick, isSubscribed, subscribeLabel, unSubscribeLabel}) => {
    const {about} = useSubreddit();

    if (!about) return {};

    if (about.communityDetails.isModerator) {
        return {
            handleClick: () => {
                window.open(`${about.communityDetails.name}/about/modqueue`, '_blank');
            },
            buttonClasses: classes.joinedButton,
            buttonLabel: 'Mod Tools',
        };
    }

    const buttonLabel = isSubscribed ? unSubscribeLabel : subscribeLabel;
    const buttonClasses = isSubscribed ? classes.joinButton : classes.joinedButton;

    const handleClick = () => {
        handleJoinClick();
    };

    return {
        handleClick,
        buttonClasses,
        buttonLabel,
    };
};
