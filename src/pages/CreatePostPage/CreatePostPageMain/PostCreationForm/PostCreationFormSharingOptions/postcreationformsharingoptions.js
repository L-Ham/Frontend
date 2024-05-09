import React, {useState} from 'react';
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
        <div className={classes.postCreationFormSharingOptionsDiv} data-testid="post-creation-form-sharing-options-div">
            <div className={classes.postCreationFormSharingOptionsInnerDiv}
                data-testid="post-creation-form-sharing-options-inner-div">
                <div className={classes.postCreationFormSharingOptionsDiv2}
                    data-testid="post-creation-form-sharing-options-div2">
                    <div className="flex items-center" data-testid="flex-items-center-div">
                        <div className={classes.postCreationFormSharingOptionsDiv3}
                            data-testid="post-creation-form-sharing-options-div3">
                            <div
                                aria-checked="true"
                                aria-disabled="false"
                                className={classes.postCreationFormSharingOptionsDiv4}
                                onClick={() => setIsSendPostNotifications(!isSendPostNotifications)}
                                data-testid="post-creation-form-sharing-options-div4"
                            >
                                <input type="hidden" defaultValue="true"
                                    className={classes.postCreationFormSharingOptionsInput}
                                    data-testid="post-creation-form-sharing-options-input"
                                />
                                <Icon className='content-box h-[20px] w-[16px] overflow-hidden' data-testid="icon"/>
                                <div className={classes.postCreationFormSharingOptionsDiv5}
                                    data-testid="post-creation-form-sharing-options-div5">
                            Send me post reply notifications
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** */}
                    <div className={classes.postCreationFormSharingOptionsDiv6}
                        data-testid="post-creation-form-sharing-options-div6">
                        <a
                            href="/settings#connected-accounts"
                            className={classes.postCreationFormSharingOptionsA}
                            target="_blank"
                            data-testid="post-creation-form-sharing-options-a"
                        >
                    Connect accounts to share your post
                        </a>
                        <div className={classes.postCreationFormSharingOptionsDiv7}
                            data-testid="post-creation-form-sharing-options-div7">
                            <div className={classes.postCreationFormSharingOptionsDiv8}
                                data-testid="post-creation-form-sharing-options-div8">
                                <div className={`${classes.postCreationFormSharingOptionsDiv9}
                            ${isInfoDivVisible ? 'visible-info-div' : 'hidden-info-div '}`}
                                data-testid="post-creation-form-sharing-options-div9"
                                >
                                    <div className={classes.postCreationFormSharingOptionsDiv10}
                                        data-testid="post-creation-form-sharing-options-div10">
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
                                data-testid="post-creation-form-sharing-options-div11"
                            >
                                <InfoIcon className={classes.postCreationFormSharingOptionsIcon}
                                    data-testid="info-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.postCreationFormSharingOptionsDiv12}
                    data-testid="post-creation-form-sharing-options-div12" />
            </div>
        </div>
    );
}
