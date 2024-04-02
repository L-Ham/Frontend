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
    /*
    subredditIcon,
    subredditDescription,
    subredditMembers,
    subredditMembersName,
    subredditOnline,
    subredditOnlineName,
     */
}) {
    const {
        namePrefixed,
        name,
        created,
        avatar,
        commentKarma,
        linkKarma,
        isFriend,
        publicDescription,
        classNames,
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
                    name={name}
                    namePrefixed={namePrefixed}
                    created={created}
                />
                <div className={overlayClasses.description}
                    style={overlayStyles.description}
                    data-testid={`user-overlay-description-${userId}`}
                >
                    {publicDescription}
                </div>
                <Stats
                    authorId={userId}
                    linkKarma={linkKarma}
                    commentKarma={commentKarma}
                />
                <InfoButton />
                <div className={overlayClasses.buttons} style={overlayStyles.buttons}>
                    <FollowButtons
                        authorId={userId}
                        isFriend={isFriend}
                    />
                    <ChatButton
                        userId={userId}
                        name={name}
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
