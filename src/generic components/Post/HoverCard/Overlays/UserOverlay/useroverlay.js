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
 * @param {object} userData
 * @param {string} viewContext
 * @return {React.Component}
 */
export function UserOverlay({
    openOverlay,
    closeOverlay,
    userData,
    viewContext,
}) {
    const {
        classNames,
    } = useUserOverlay({viewContext});
    return (
        <div
            className={classNames}
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            onClick={(e) => e.stopPropagation()}
            data-testid={`user-overlay-${userData.userId}`}
        >
            <div className={overlayClasses.wrapper}>
                <TopBar
                    avatar={userData.avatar}
                    username={userData.username}
                    created={userData.created}
                />
                {userData.About && <div className={overlayClasses.description}
                    style={overlayStyles.description}
                    data-testid={`user-overlay-description-${userData.userId}`}
                >
                    {userData.About}
                </div>}
                <Stats
                    authorId={userData.userId}
                    postKarma={userData.postKarma}
                    commentKarma={userData.commentKarma}
                />
                <InfoButton />
                <div className={overlayClasses.buttons} style={overlayStyles.buttons}>
                    <FollowButtons
                        userId={userData.userId}
                        isFriend={userData.isFriend}
                    />
                    <ChatButton
                        userId={userData.userId}
                        username={userData.username}
                    />
                </div>
            </div>
        </div>
    );
}

UserOverlay.propTypes = {
    openOverlay: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
    viewContext: PropTypes.string.isRequired,
};
