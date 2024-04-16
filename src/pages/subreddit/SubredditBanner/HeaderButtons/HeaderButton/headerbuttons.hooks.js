import {useState, useEffect, useCallback} from 'react';
import {useSubreddit} from '../../../subredditcontext.js';
import {API_ROUTES} from '../../../../../requests/routes.js';
import {axiosInstance as axios} from '../../../../../requests/axios.js';


export const useHeaderButtons = () => {
    const {about} = useSubreddit();

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
        } catch (error) {
            console.error('Failed to mute community', error);
            alert('Failed to mute community');
        }
    }, [name]);

    const unmuteCommunity = useCallback(async () => {
        try {
            await axios.delete(API_ROUTES.unmuteCommunity, {data: {subRedditName: name}});
            setIsMuted(false);
        } catch (error) {
            console.error('Failed to unmute community', error);
            alert('Failed to unmute community');
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
            await axios.patch(API_ROUTES.joinCommunity, {subRedditId: id});
            setIsSubscribed(true);
            setActiveNotificationLevel(null);
        } catch (error) {
            console.error('Failed to join community', error);
        }
    }, [id]);

    const leaveCommunity = useCallback(async () => {
        try {
            await axios.delete(API_ROUTES.leaveCommunity, {data: {subRedditId: id}});
            setIsSubscribed(false);
            if (activeNotificationLevel !== null) setActiveNotificationLevel(null);
        } catch (error) {
            console.error('Failed to leave community', error);
        }
    }, [id, activeNotificationLevel]);

    const handleJoinClick = useCallback(async (forceJoin = false) => {
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
            console.error('Failed', error);
        } finally {
            setIsJoinDisabled(false);
        }
    }, [isSubscribed, joinCommunity, leaveCommunity]);


    // favourite logic
    const setFavorite = useCallback(async () => {
        try {
            await axios.patch(API_ROUTES.setFavorite, {subRedditId: id});
            setIsFavourite(true);
        } catch (error) {
            console.error('Failed to set favorite', error);
            alert('Failed to set favorite');
        }
    }, [id]);

    const unsetFavorite = useCallback(async () => {
        try {
            await axios.patch(API_ROUTES.unsetFavorite, {subRedditId: id});
            setIsFavourite(false);
        } catch (error) {
            console.error('Failed to unset favorite', error);
            alert('Failed to unset favorite');
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
