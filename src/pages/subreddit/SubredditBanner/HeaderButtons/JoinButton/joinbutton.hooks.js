import {buttonClasses as classes} from '../../../subreddit.styles.js';
import {useSubreddit} from '../../../subredditcontext.js';

export const useJoinButton = ({handleJoinClick, isSubscribed, subscribeLabel, unSubscribeLabel}) => {
    const {about} = useSubreddit();

    if (!about) return {};

    if (about.communityDetails.isModerator) {
        return {
            handleClick: () => {
<<<<<<< HEAD
                window.open(`${about.communityDetails.name}/about/modqueue`, '_blank');
=======
                window.open(`/r/${about.communityDetails.name}/about/modqueue`, '_blank');
>>>>>>> dev
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
