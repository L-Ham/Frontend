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
 * @param {object} userData
 * @param {object} subredditData
 * @param {string} createdAt
 * @param {string} viewContext
 * @return {React.Component}
 */
export function CreditBar({
    postId,
    userData,
    subredditData,
    createdAt,
    viewContext,
}) {
    const {
        handleRedirect,
        rootClassNames,
        Icon,
    } = useCreditBar({subredditData, userData, viewContext});
    return (
        <div className={creditBarClasses.wrapper} data-testid={`creditbar-${postId}`}>
            <div className={rootClassNames}>
                {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && <BackButton postId={postId}/>}
                <div className={creditBarClasses.base} onClick={handleRedirect}>
                    {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
                    <div className={creditBarClasses.icon} data-testid={`subreddit-icon-${postId}`}>
                        {Icon}
                    </div>}
                    <MetadataCard
                        postId={postId}
                        userData={userData}
                        subredditData={subredditData}
                        viewContext={viewContext}
                        createdAt={createdAt}
                    />
                </div>
            </div>
        </div>
    );
}

CreditBar.propTypes = {
    postId: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
    subredditData: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
