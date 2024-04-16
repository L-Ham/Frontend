import {buttonClasses as classes} from '../../../subreddit.styles.js';

export const useJoinButton = ({handleJoinClick, isSubscribed, subscribeLabel, unSubscribeLabel}) => {
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
