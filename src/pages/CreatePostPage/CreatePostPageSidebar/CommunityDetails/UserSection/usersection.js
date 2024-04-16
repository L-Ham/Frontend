
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
        <div className={classes.userSectionDiv}>
            <hr className={classes.userSectionHr}/>
            <div className={classes.userSectionInnerDiv}>
                <div className={classes.userSectionPreviewDiv}>
            preview
                    <button
                        role="button"
                        tabIndex={0}
                        className={classes.userSectionButton}
                        onClick={() => alert('not supported yet :)')}
                    >
                        <EditIcon className={classes.userSectionEditIcon}/>
                    </button>
                </div>
                <div className={classes.userSectionMxDiv}>
                    <div className={classes.userSectionFlexDiv}>
                        <div className={classes.userSectionRelativeDiv}>
                            <img
                                className={classes.userSectionFlairProfileIcon}
                                xmlns="http://www.w3.org/2000/svg"
                                src={ src || avatarDefault}
                            />
                        </div>
                        <div className={classes.userSectionMlDiv}>
                            <div className={classes.userSectionWFullDiv}>
                                <span className={classes.userSectionSpan}>
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
