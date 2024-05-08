import React from 'react';
import {Selectors} from './Selectors/selectors.js';
import {Content} from './Selectors/Content/content.js';
import PropTypes from 'prop-types';
import {Empty} from './Empty/empty.js';
import {profilebodyClasses} from './profilebody.styles.js';
import {Header} from './Header/header.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';
import {Feed} from '../../../generic components/feed.js';
/**
 * Profile Body component
 * @return {React.Component}
 * @param {string} section
 */
export function ProfileBody({name, section}) {
    const sectionAPI = {
        upvoted: API_ROUTES.userUpvotedPosts(name),
        saved: API_ROUTES.userSavedPosts(name),
        downvoted: API_ROUTES.userDownvotedPosts(name),
        hidden: API_ROUTES.userHiddenPosts(name),
        posts: API_ROUTES.userAllPosts(name),
        comments: API_ROUTES.userComments(name),
    };
    const sectionName = {
        upvoted: 'upvotedPosts',
        saved: 'savedPosts',
        downvoted: 'downvotedPosts',
        hidden: 'hiddenPosts',
        posts: 'userPosts',
        comments: 'comments',
    };
    return (
        <div className={profilebodyClasses.root} data-testid={`profile-body`}>
            <Header username={name}/>
            <Selectors username={name}/>
            {(section === undefined &&<Content />) ||
            (<div className={profilebodyClasses.div}></div>)}
            <hr className={profilebodyClasses.hr}></hr>
            {section !== 'comments' ?
                <Feed
                    key={section + name}
                    viewContext={VIEW_CONTEXTS.AGGREGATE_FEED}
                    endpoint={section ? sectionAPI[section]: sectionAPI.posts}
                    type='posts'
                    FallbackComponent={<Empty name={name} section={section}/>}
                    name={section ? sectionName[section]: sectionName.posts}
                />:
                <Empty name={name} section={section}/>}
        </div>
    );
}
ProfileBody.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
