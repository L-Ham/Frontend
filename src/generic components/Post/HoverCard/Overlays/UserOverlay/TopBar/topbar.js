import React from 'react';
import PropTypes from 'prop-types';
import {topbarClasses} from './topbar.styles';
import {useTopBar} from './topbar.hooks';
/**
 * TopBar component
 * @param {string} avatar
 * @param {string} username
 * @param {string} created
 * @return {React.Component}
 */
export function TopBar({
    avatar,
    username,
    created,
}) {
    const {
        CakeIcon,
        displayDate,
    } = useTopBar({created});
    return (
        <div className={topbarClasses.root} data-testid={`topbar-user-${username}`}>
            <div className={topbarClasses.avatarWrapper}>
                <img
                    src={avatar || require('../../../../../../assets/images/avatar_default_0.png')}
                    alt={'u/'+ username + ' avatar'}
                    className={topbarClasses.avatar}
                    data-testid={`topbar-user-avatar-${username}`}
                />
            </div>
            <div className={topbarClasses.userDetails}>
                <div className={topbarClasses.unameWrapper}>
                    <div className={topbarClasses.uname}>
                        <a
                            className={topbarClasses.unameLink}
                            href={'/user/' + username}
                            target="_blank" rel="noreferrer"
                            data-testid={`topbar-user-name-${username}`}
                        >
                            {username}
                        </a>
                    </div>
                </div>
                <div className={topbarClasses.displayName}>
                    <div className="truncate">{'u/' + username}</div>
                </div>
                <div className={topbarClasses.date} data-testid={`topbar-user-date-${username}`}>
                    <CakeIcon className="mr-1"/>
                    {displayDate}
                </div>
            </div>
        </div>
    );
}

TopBar.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    created: PropTypes.number,
};
