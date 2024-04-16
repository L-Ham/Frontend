import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import './postcreationformsharingoptions.css';
import {usePostCreation} from '../postcreationcontext';
import {classes} from './postcreationformsharingoptions.styles';

/**
 * Renders the post creation form sharing options.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormSharingOptions() {
    const {setIsSendPostNotifications, isSendPostNotifications} = usePostCreation();
    const [isInfoDivVisible, setIsInfoDivVisible] = useState(false);
    const Icon = isSendPostNotifications ? getIconComponent('checked') : getIconComponent('un-checked');
    const InfoIcon = getIconComponent('info');

    return (
        <div className={classes.postCreationFormSharingOptionsDiv}>
            <div className={classes.postCreationFormSharingOptionsInnerDiv}>
                <div className={classes.postCreationFormSharingOptionsDiv2}>
                    <div className="flex items-center">
                        <div className={classes.postCreationFormSharingOptionsDiv3}>
                            <div
                                aria-checked="true"
                                aria-disabled="false"
                                className={classes.postCreationFormSharingOptionsDiv4}
                                onClick={() => setIsSendPostNotifications(!isSendPostNotifications)}
                            >
                                <input type="hidden" defaultValue="true"
                                    className={classes.postCreationFormSharingOptionsInput}/>
                                <Icon className='content-box h-[20px] w-[16px] overflow-hidden'/>
                                <div className={classes.postCreationFormSharingOptionsDiv5}>
                             Send me post reply notifications
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** */}
                    <div className={classes.postCreationFormSharingOptionsDiv6}>
                        <a
                            href="/settings#connected-accounts"
                            className={classes.postCreationFormSharingOptionsA}
                            target="_blank"
                        >
                Connect accounts to share your post
                        </a>
                        <div className={classes.postCreationFormSharingOptionsDiv7}>
                            <div className={classes.postCreationFormSharingOptionsDiv8}>
                                <div className={`${classes.postCreationFormSharingOptionsDiv9}
                                 ${isInfoDivVisible ? 'visible-info-div' : 'hidden-info-div '}`}>
                                    <div className={classes.postCreationFormSharingOptionsDiv10}>
                                Connect a Twitter account in your User Settings. With a
                                connected account you can choose to share new posts you make
                                directly to Twitter.
                                    </div>
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => {
                                    if (!isInfoDivVisible);setIsInfoDivVisible(true);
                                }}
                                onMouseLeave={() => {
                                    if (isInfoDivVisible);setIsInfoDivVisible(false);
                                }}
                                className={classes.postCreationFormSharingOptionsDiv11}
                            >
                                <InfoIcon className={classes.postCreationFormSharingOptionsIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.postCreationFormSharingOptionsDiv12} />
            </div>
        </div>
    );
}

PostCreationFormSharingOptions.propTypes = {
    setIsSendPostNotifications: PropTypes.func.isRequired,
    isSendPostNotifications: PropTypes.bool.isRequired,
};
