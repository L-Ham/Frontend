
import React from 'react';
import './usersection.css';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {useSelector} from 'react-redux';
import avatarDefault from '../../../../../assets/images/avatar_default_0.png';
import {classes} from './usersection.styles.js';

/**
 * Renders the user section.
 * @return {JSX.Element} The rendered component.
 */
export function UserSection() {
    const displayName = useSelector((state) => state.user.displayName);
    const src = useSelector((state) => state.user.avatar);
    const username = useSelector((state) => state.user.username);
    const EditIcon = getIconComponent('edit', false);
    return (
        <div className={classes.userSectionDiv} data-testid="user-section-div">
            <hr className={classes.userSectionHr} data-testid="user-section-hr"/>
            <div className={classes.userSectionInnerDiv} data-testid="user-section-inner-div">
                <div className={classes.userSectionPreviewDiv} data-testid="user-section-preview-div">
            preview
                    <button
                        role="button"
                        tabIndex={0}
                        className={classes.userSectionButton}
                        onClick={() => alert('not supported yet :)')}
                        data-testid="user-section-button"
                    >
                        <EditIcon className={classes.userSectionEditIcon} data-testid="user-section-edit-icon"/>
                    </button>
                </div>
                <div className={classes.userSectionMxDiv} data-testid="user-section-mx-div">
                    <div className={classes.userSectionFlexDiv} data-testid="user-section-flex-div">
                        <div className={classes.userSectionRelativeDiv} data-testid="user-section-relative-div">
                            <img
                                className={classes.userSectionFlairProfileIcon}
                                xmlns="http://www.w3.org/2000/svg"
                                src={ src || avatarDefault}
                                data-testid="user-section-flair-profile-icon"
                            />
                        </div>
                        <div className={classes.userSectionMlDiv} data-testid="user-section-ml-div">
                            <div className={classes.userSectionWFullDiv} data-testid="user-section-wfull-div">
                                <span className={classes.userSectionSpan} data-testid="user-section-span">
                                    {displayName || username || 'Equivalent_Serve_549'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
