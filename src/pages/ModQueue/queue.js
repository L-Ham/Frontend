
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';
import {Feed} from '../../generic components/feed';
import {API_ROUTES} from '../../requests/routes';
import {VIEW_CONTEXTS} from '../../generic components/Post/data';
/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Queue({name, tab}) {
    const tabConfig = {
        'unmoderated': {
            isremoved: false,
            isreported: false,
            endpoint: API_ROUTES.unmoderatedPosts,
            name: 'unmoderatedPosts',
        },
        'reports': {
            isremoved: false,
            isreported: true,
            endpoint: API_ROUTES.reportedPosts,
            name: 'reportedPosts',
        },
        'spam': {
            isremoved: true,
            isreported: false,
            endpoint: API_ROUTES.removedPosts,
            name: 'removedPosts',
        },
        'edited': {
            isremoved: false,
            isreported: false,
            endpoint: API_ROUTES.editedPosts,
            name: 'editedPosts',
        },
    };
    tab = tab || 'unmoderated';
    const modPostProps = {subredditName: name, ...tabConfig[tab]};
    return (
        <Feed
            key={tab + name}
            viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
            endpoint={tabConfig[tab].endpoint(name)}
            type='posts'
            name={tabConfig[tab].name}
            FallbackComponent={<div>No Posts</div>}
            WrapperComponent={Modpost}
            wrapperProps={modPostProps}
        />
    );
}

Queue.propTypes = {
    name: PropTypes.string,
    tab: PropTypes.string,
};

export {Queue};
