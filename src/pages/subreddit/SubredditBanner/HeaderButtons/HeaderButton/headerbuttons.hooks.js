import {useState, useEffect} from 'react';
import {useSubreddit} from '../../../subredditcontext.js';

export const useHeaderButtons = () => {
    // states
    const [activeNotificationLevel, setActiveNotificationLevel] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const {about} = useSubreddit();
    if (!about) return {};

    const {data: {id, display_name_prefixed: prefixedName, display_name: displayName}} = about;

    useEffect(() => {
        if (about) {
            const {
                data: {
                    user_is_subscriber: userIsSubscriber,
                    user_is_muted: userIsMuted,
                    user_has_favourited: userHasFavourited,
                    notification_level: notificationLevel,
                },
            } = about;

            setIsMuted(userIsMuted);
            setIsFavourite(userHasFavourited);
            setIsSubscribed(userIsSubscriber);
            setActiveNotificationLevel(notificationLevel);
        }
    }, [about]);

    // handlers
    const handleMuteClick = () => {
        setIsMuted((prevState) => !prevState);
    };

    const handleFavouriteClick = () => {
        if (!isFavourite && !isSubscribed) {
            handleJoinClick(true);
        }
        setIsFavourite((prevState) => !prevState);
    };

    const handleJoinClick = (forceJoin = false) => {
        if (forceJoin === true) {
            if (isSubscribed !== true) {
                setIsSubscribed(true);
                setActiveNotificationLevel(null);
            }
            return;
        }

        if (isSubscribed) {
            if (activeNotificationLevel!== null) setActiveNotificationLevel(null);
        }

        setIsSubscribed((prevState) => !prevState);
    };

    return {
        id,
        prefixedName,
        displayName,
        activeNotificationLevel,
        setActiveNotificationLevel,
        isMuted,
        handleMuteClick,
        isFavourite,
        handleFavouriteClick,
        isSubscribed,
        handleJoinClick,
    };
};
