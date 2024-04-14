import React from 'react';
import PropTypes from 'prop-types';
import {topbarClasses} from './topbar.styles';
import {useTopBar} from './topbar.hooks';
/**
 * TopBar component
 * @param {string} avatar
 * @param {string} displayName
 * @param {string} createdAt
 * @return {React.Component}
 */
export function TopBar({
    avatar,
    displayName,
    createdAt,
}) {
    const {
        CakeIcon,
        displayDate,
    } = useTopBar({createdAt});
    return (
        <div className={topbarClasses.root} data-testid={`topbar-user-${displayName}`}>
            <div className={topbarClasses.avatarWrapper}>
                <img
                    src={avatar || require('../../../../../../assets/images/avatar_default_0.png')}
                    alt={'u/'+ displayName + ' avatar'}
                    className={topbarClasses.avatar}
                    data-testid={`topbar-user-avatar-${displayName}`}
                />
            </div>
            <div className={topbarClasses.userDetails}>
                <div className={topbarClasses.unameWrapper}>
                    <div className={topbarClasses.uname}>
                        <a
                            className={topbarClasses.unameLink}
                            href={'/user/' + displayName}
                            target="_blank" rel="noreferrer"
                            data-testid={`topbar-user-name-${displayName}`}
                        >
                            {displayName}
                        </a>
                    </div>
                </div>
                <div className={topbarClasses.displayName}>
                    <div className="truncate">{'u/' + displayName}</div>
                </div>
                <div className={topbarClasses.date} data-testid={`topbar-user-date-${displayName}`}>
                    <CakeIcon className="mr-1"/>
                    {displayDate}
                </div>
            </div>
        </div>
    );
}

TopBar.propTypes = {
    avatar: PropTypes.string,
    displayName: PropTypes.string,
    createdAt: PropTypes.string,
};
