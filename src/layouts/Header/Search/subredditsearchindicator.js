/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import {RemoveButton} from './removebutton.js';
import PropTypes from 'prop-types';
import {API_ROUTES} from '../../../requests/routes.js';
import {axiosInstance as axios} from '../../../requests/axios.js';

/**
 *
 * @return {JSX.Element} The SubredditSearchIndicator component
 */
function SubredditSearchIndicator({setSearchSubreddit, imgSrc}) {
    const handleClearClick = (e) => {
        e.preventDefault();
        setSearchSubreddit(false);
    };
    const [avatarImage, setAvatarImage] = useState('https://placehold.co/400');

    let subredditName = null;
    if (window.location.pathname.includes('/r/')) {
        subredditName = window.location.pathname.split('/')[2];
    } else {
        const queryParams = new URLSearchParams(window.location.search);
        subredditName = queryParams.get('subredditName');
    }
    useEffect(() => {
        const fetchSubreddit = async () => {
            try {
                const subredditResponse = await axios.get(API_ROUTES.communityDetails(subredditName));
                setAvatarImage(subredditResponse.data.communityDetails.avatarImage || 'https://placehold.co/400');
                subredditName = subredditResponse.data.communityDetails.name;
            } catch (error) {
                // console.error(error);
            }
        };
        fetchSubreddit();
    }, []);
    return (
        <span className="relative mr-[var(--spacer-xs)] inline-flex max-w-full grow">
            <button className="inline-flex h-8 items-center justify-center
                    rounded-[16px] border-2 border-solid border-[var(--color-secondary-background-selected)]
                    bg-[var(--color-secondary-background-selected)] px-[var(--rem10)]">
                <span className="flex items-center justify-center overflow-hidden">
                    <span className="mr-2 flex">
                        <span className="inline-flex items-center justify-center">
                            <span className="relative inline-block size-5 rounded-full [&>:first-child]:mb-0 [&>:first-child]:rounded-full">
                                <div className="flex size-full items-center justify-center">
                                    <img
                                        height="16"
                                        width="16"
                                        className="overflow-hidden rounded-full"
                                        src={avatarImage}/>
                                </div>
                            </span>
                        </span>
                    </span>
                    <span className="flex items-center gap-2 overflow-hidden">
                        <span className="mr-[calc(var(--size-button-sm-h)-var(--rem10)-0.0625rem)] inline-block truncate">
                            <span>
                                {`r/${decodeURIComponent(subredditName)}`}
                            </span>
                        </span>
                    </span>
                </span>
            </button>
            <span className='absolute right-0 top-1/2 inline-flex -translate-y-1/2'>
                <RemoveButton
                    handleClearClick={handleClearClick}
                    iconFill={true}
                />
            </span>
        </span>
    );
}

SubredditSearchIndicator.propTypes = {
    setSearchSubreddit: PropTypes.func,
    subredditName: PropTypes.string,
    imgSrc: PropTypes.string,
};

export {SubredditSearchIndicator};
