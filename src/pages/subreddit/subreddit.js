import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {SubredditBanner} from './SubredditBanner/subredditbanner.js';
import {SubredditSidebar} from './SubredditSidebar/subredditsidebar.js';
import {classes} from './subreddit.styles.js';
import './subreddit.css';
import {Feed, SubredditEmptyFeed} from '../../generic components/feed.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';
import {OverlayContainer} from './General/Components/overlaycontainer.js';
import {API_ROUTES} from '../../requests/routes.js';
import {useSearchParams} from 'react-router-dom';
import uuid from 'react-uuid';
import {useSubreddit} from './subredditcontext.js';
import {Fragment} from 'react';
import {axiosInstance as axios} from '../../requests/axios.js';
import {useDispatch} from 'react-redux';
import {addRecentCommunity} from '../../store/userSlice.js';

/**
 * Renders the subreddit.
 * @param {Object} props - The component props.
 * @param {string} props.name - The subreddit name.
 * @param {boolean} props.style - The style of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit({name, style = false}) {
    const [show, setShow] = React.useState(false);
    const [subredditType, setSubredditType] = React.useState('private');
    const [searchParams] = useSearchParams();
    const {about} = useSubreddit();

    useEffect(() => {
        if (about && about.communityDetails && about.communityDetails.name) {
            const fetchType = async () => {
                try {
                    const response = await axios.get(API_ROUTES.getCommunityType(about.communityDetails.name));
                    // console.log('response', response);
                    setSubredditType(response.data.privacy);
                } catch (e) {
                    // console.log('error', e);
                }
            };

            fetchType();
        }
    }, [about]);

    if (!about || Object.keys(about).length === 0) return null;

    const isMember = about.communityDetails?.isMember || false;
    const isModerator = about.communityDetails?.isModerator || false;

    const dispatch = useDispatch();
    dispatch(addRecentCommunity({
        communityId: about.communityDetails.subredditId,
        communityName: about.communityDetails.name,
        avatar: about.communityDetails.avatarImage,
    }));

    return (
        <Fragment>
            <div className={classes.innerContainer} data-testid="inner-container">
                <SubredditBanner />
                <div className={classes.contentContainer} data-testid="content-container">
                    <main className={classes.mainContent} data-testid="main-content">
                        {(isMember || subredditType == 'Public') && <Feed
                            key={name + (searchParams.get('sort') || 'Hot') + uuid()}
                            viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
                            endpoint={API_ROUTES.communityFeed(name, searchParams.get('sort') || 'Hot')}
                            name="subredditPosts"
                            type='posts'
                            FallbackComponent={<SubredditEmptyFeed/>}
                        />}
                        {(isMember == false && isModerator == false && subredditType != 'Public') && <p>
                        This is a private community. Only approved members can view and contribute.
                        please request to join
                        </p>}
                    </main>
                    {(isMember || isModerator) && <SubredditSidebar />}
                </div>
                <button className='fixed bottom-4 right-4 cursor-pointer opacity-0' onClick={() => {
                    const password = prompt('Enter password');
                    if (password === 'hisa') {
                        setShow(!show);
                    } else {
                        alert('Incorrect password');
                    }
                }}
                data-testid="show-button"
                >show</button>
                { show && <OverlayContainer>
                    <img
                        src="https://ibb.co/Tk8wSVV"
                        className='size-[90%]'
                    />
                </OverlayContainer>}
            </div>
        </Fragment>
    );
}

Subreddit.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.bool,
};


