import React from 'react';
import PropTypes from 'prop-types';
import {topbarClasses} from './topbar.styles';
import {useTopBar} from './topbar.hooks';
/**
 * TopBar component
 * @param {string} avatar
 * @param {string} name
 * @param {string} namePrefixed
 * @param {number} created
 * @return {React.Component}
 */
export function TopBar({
    avatar,
    name,
    namePrefixed,
    created,
}) {
    const {
        CakeIcon,
        displayDate,
    } = useTopBar({created});
    return (
        <div className={topbarClasses.root} data-testid={`topbar-user-${name}`}>
            <div className={topbarClasses.avatarWrapper}>
                <img
                    src={avatar || require('../../../../../../assets/images/avatar_default_0.png')}
                    alt={namePrefixed + ' avatar'}
                    className={topbarClasses.avatar}
                    data-testid={`topbar-user-avatar-${name}`}
                />
            </div>
            <div className={topbarClasses.userDetails}>
                <div className={topbarClasses.unameWrapper}>
                    <div className={topbarClasses.uname}>
                        <a
                            className={topbarClasses.unameLink}
                            href={'/user/' + name}
                            target="_blank" rel="noreferrer"
                            data-testid={`topbar-user-name-${name}`}
                        >
                            {name}
                        </a>
                    </div>
                </div>
                <div className={topbarClasses.name}>
                    <div className="truncate">{namePrefixed}</div>
                </div>
                <div className={topbarClasses.date} data-testid={`topbar-user-date-${name}`}>
                    <CakeIcon className="mr-1"/>
                    {displayDate}
                </div>
            </div>
        </div>
    );
}

TopBar.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    namePrefixed: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
};
