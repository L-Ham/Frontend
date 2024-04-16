import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from './TopBar/topbar.js';
import {Stats} from './Stats/stats.js';
import {FollowButtons} from './FollowButton/follow.js';
import {ChatButton} from './ChatButton/chat.js';
import {InfoButton} from './InfoButton/info.js';
import {overlayClasses, overlayStyles} from './useroverlay.styles.js';
import {useUserOverlay} from './useroverlay.hooks.js';
/**
 * UserOverlay component
 * @param {function} openOverlay
 * @param {function} closeOverlay
 * @param {string} userId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function UserOverlay({
    openOverlay,
    closeOverlay,
    userId,
    viewContext,
}) {
    const {
        classNames,
        avatar,
        created,
        username,
        description,
        postKarma,
        commentKarma,
        isFriend,
    } = useUserOverlay({userId, viewContext});
    return (
        <div
            className={classNames}
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            onClick={(e) => e.stopPropagation()}
            data-testid={`user-overlay-${userId}`}
        >
            <div className={overlayClasses.wrapper}>
                <TopBar
                    avatar={avatar}
                    username={username}
                    created={created}
                />
                {description && <div className={overlayClasses.description}
                    style={overlayStyles.description}
                    data-testid={`user-overlay-description-${userId}`}
                >
                    {description}
                </div>}
                <Stats
                    authorId={userId}
                    postKarma={postKarma}
                    commentKarma={commentKarma}
                />
                <InfoButton />
                <div className={overlayClasses.buttons} style={overlayStyles.buttons}>
                    <FollowButtons
                        userId={userId}
                        isFriend={isFriend}
                    />
                    <ChatButton
                        userId={userId}
                        username={username}
                    />
                </div>
            </div>
        </div>
    );
}

UserOverlay.propTypes = {
    openOverlay: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
