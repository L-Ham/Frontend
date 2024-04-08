import {useState} from 'react';
import {buttonClasses as classes} from '../../../subreddit.styles';

export const useJoinButton = (handleJoinClick, isSubscribed, subscribeLabel, unSubscribeLabel) => {
    const [disabled, setDisabled] = useState(false);
    const buttonLabel = isSubscribed ? unSubscribeLabel : subscribeLabel;
    const buttonClasses = isSubscribed ? classes.joinButton : classes.joinedButton;

    const handleClick = () => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
            handleJoinClick();
        }, 250);
    };

    return {
        handleClick,
        disabled,
        buttonClasses,
        buttonLabel,
    };
};
