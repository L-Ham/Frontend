import {useState, useEffect, useCallback} from 'react';
import {useSubreddit} from '../../../subredditcontext.js';
import {API_ROUTES} from '../../../../../requests/routes.js';
import {axiosInstance as axios} from '../../../../../requests/axios.js';
import {useNotifications} from '../../../../../generic components/Notifications/notificationsContext.js';


export const useHeaderButtons = () => {
    const {about} = useSubreddit();
    const {addNotification} = useNotifications();

    if (!about) return {};

    const {communityDetails: {subredditId: id, name, isMember: userIsSubscriber,
        isMuted: userIsMuted,
        isFavorite: userHasFavourited}} = about;

    // states
    const [activeNotificationLevel, setActiveNotificationLevel] = useState(null);
    const [isMuted, setIsMuted] = useState(userIsMuted);
    const [isFavourite, setIsFavourite] = useState(userHasFavourited);
    const [isSubscribed, setIsSubscribed] = useState(userIsSubscriber);
    const [isJoinDisabled, setIsJoinDisabled] = useState(false);

    const prefixedName = `r/${name}`;
    const displayName = name;

    useEffect(() => {
        setIsMuted(isMuted);
        setIsFavourite(userHasFavourited);
        setIsSubscribed(userIsSubscriber);
        setActiveNotificationLevel(null);
    }, [userIsSubscriber, isMuted, userHasFavourited]);


    // mute logic
    const muteCommunity = useCallback(async () => {
        try {
            await axios.patch(API_ROUTES.muteCommunity, {subRedditName: name});
            setIsMuted(true);
            addNotification({type: 'success', message: `muted r/${name}`});
        } catch (error) {
            addNotification({type: 'error', message: error.response.data.message});
            // console.error('Failed to mute community', error);
        }
    }, [name]);

    const unmuteCommunity = useCallback(async () => {
        try {
            await axios.delete(API_ROUTES.unmuteCommunity, {data: {subRedditName: name}});
            setIsMuted(false);
            addNotification({type: 'success', message: `unmuted r/${name}`});
        } catch (error) {
            addNotification({type: 'error', message: error.response.data.message});
        }
    }, [name]);

    const handleMuteClick = useCallback(() => {
        if (isMuted) {
            unmuteCommunity();
        } else {
            muteCommunity();
        }
    }, [isMuted, muteCommunity, unmuteCommunity]);


    // join logic
    const joinCommunity = useCallback(async () => {
        try {
            const respone = await axios.patch(API_ROUTES.joinCommunity, {subRedditId: id});
            setIsSubscribed(true);
            setActiveNotificationLevel(null);
            addNotification({type: 'success',
                message: respone.data.message});
        } catch (error) {
            addNotification({type: 'error', message: error.response.data.message});
            // console.error('Failed to join community', error);
        }
    }, [id]);

    const leaveCommunity = useCallback(async () => {
        try {
            const response = await axios.delete(API_ROUTES.leaveCommunity, {data: {subRedditId: id}});
            setIsSubscribed(false);
            if (activeNotificationLevel !== null) setActiveNotificationLevel(null);
            addNotification({type: 'success',
                message: response.data.message});
        } catch (error) {
            addNotification({type: 'error',
                message: error.response.data.message});
            // console.error('Failed to leave community', error);
        }
    }, [id, activeNotificationLevel]);

    const handleJoinClick = useCallback(async (forceJoin = false, isModerator = false) => {
        // TODO: handle moderator join/ leave
        setIsJoinDisabled(true);
        try {
            if (forceJoin) {
                if (!isSubscribed) {
                    await joinCommunity();
                }
            } else {
                if (isSubscribed) {
                    await leaveCommunity();
                } else {
                    await joinCommunity();
                }
            }
        } catch (error) {
            // console.error('Failed', error);
        } finally {
            setIsJoinDisabled(false);
        }
    }, [isSubscribed, joinCommunity, leaveCommunity]);


    // favourite logic
    const setFavorite = useCallback(async () => {
        try {
            await axios.patch(API_ROUTES.setFavorite, {subRedditId: id});
            setIsFavourite(true);
            addNotification({type: 'success', message: `added r/${name} to favorites`});
        } catch (error) {
            addNotification({type: 'failure', message: error.response.data.message});
            // console.error('Failed to set favorite', error);
        }
    }, [id]);

    const unsetFavorite = useCallback(async () => {
        try {
            await axios.patch(API_ROUTES.unsetFavorite, {subRedditId: id});
            setIsFavourite(false);
            addNotification({type: 'success', message: `removed r/${name} from favorites`});
        } catch (error) {
            addNotification({type: 'failure', message: error.response.data.message});
            // console.error('Failed to unset favorite', error);
        }
    }, [id]);

    const handleFavouriteClick = useCallback(() => {
    // If the item is a favourite, unset it as a favourite
        if (isFavourite) {
            unsetFavorite();
        }

        // If the item is not a favourite, set it as a favourite
        if (!isFavourite) {
            setFavorite();
        }

        // If the user is not subscribed, force them to join
        if (!isSubscribed) {
            handleJoinClick(true);
        }
    }, [isFavourite, isSubscribed, setFavorite, unsetFavorite, handleJoinClick]);


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
        isJoinDisabled, setIsJoinDisabled,
    };
};
