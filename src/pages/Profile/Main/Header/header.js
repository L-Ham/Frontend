import React from 'react';
import {useAddBanner} from '../../SideBar/Banner/AddBannerButton/addbannerbutton.hook.js';
import {headerClasses} from './header.styles.js';
import {headerStyles} from './header.styles.js';
import {useHeader} from './header.hook.js';
import PropTypes from 'prop-types';
/**
 * Header component
 * @return {React.Component}
 * @param {string} username
 */
export function Header({username}) {
    const {imgSrc} = useHeader();
    const {AddBannerIcon} = useAddBanner();
    return (
        <div className={headerClasses.root} data-testid={`profile-MainBody-Header`}>
            <div className={headerClasses.rootC}>
                <img className={headerClasses.img}
                    style={headerStyles.img}
                    src={imgSrc}
                    alt="Profile Picture"
                />
                <div className={headerClasses.divA}>
                    <a
                        href="/settings"
                        aria-label="Edit profile picture"
                        className={headerClasses.a}
                        style={headerStyles.a}>
                        <span className={headerClasses.spanA}
                            data-testid={`profile-add-avatar`}>
                            <span className={headerClasses.spanB} style={headerStyles.spanB}>
                                <AddBannerIcon />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div className={headerClasses.divB}>
                <div className={headerClasses.divC}>
                    <div className={headerClasses.divD}>
                        <div className={headerClasses.divE}>
                            <div className={headerClasses.divF}>
                                <h1 className={headerClasses.h1}
                                    style={headerStyles.h1} data-testid={`profile-u/username`}>
                                    {username}
                                </h1>
                            </div>
                        </div>
                        <p className={headerClasses.p}
                            style={headerStyles.p} data-testid={`profile-u/username-small`}>u/{username}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
Header.propTypes = {
    username: PropTypes.string,
};
