import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../data.js';
import {MetadataCard} from './MetadataCard/metadatacard.js';
import {BackButton} from './BackButton/back.js';
import {creditBarClasses} from './creditbar.styles.js';
import {useCreditBar} from './creditbar.hooks.js';
/**
 * CreditBar component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function CreditBar({
    postId,
    viewContext,
}) {
    const {
        handleSubredditRedirect,
        rootClassNames,
        DefaultSubredditIcon,
        SubredditIcon,
        icon,
        subredditId,
        authorId,
        created,
    } = useCreditBar({postId, viewContext});
    return (
        <div className={creditBarClasses.wrapper} data-testid={`creditbar-${postId}`}>
            <div className={rootClassNames}>
                {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && <BackButton postId={postId}/>}
                <div className={creditBarClasses.base} onClick={handleSubredditRedirect}>
                    {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
                <div className={creditBarClasses.icon} data-testid={`subreddit-icon-${postId}`}>
                    {icon ? (
                        SubredditIcon
                    ) : (
                        <DefaultSubredditIcon width="32" height="32"/>
                    )}
                </div>}
                    <MetadataCard
                        postId={postId}
                        subredditId={subredditId}
                        authorId={authorId}
                        viewContext={viewContext}
                        created={created}
                    />
                </div>
            </div>
        </div>
    );
}

CreditBar.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
