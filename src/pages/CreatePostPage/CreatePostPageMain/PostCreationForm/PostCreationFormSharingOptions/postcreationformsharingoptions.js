import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import './postcreationformsharingoptions.css';
import {usePostCreation} from '../postcreationcontext';

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
        <div className="relative flex
        flex-col rounded-[0_0_6px_6px] border-t-DEFAULT border-solid border-[color:var(--newCommunityTheme-line)]
        bg-[color:var(--newCommunityTheme-field)] p-[8px_16px_21px]">
            <div className="mt-[8px] flex w-full">
                <div className="mr-auto self-start">
                    <div className="flex items-center">
                        <div className="mb-[8px] fill-[var(--newCommunityTheme-button)] text-[14px]/[18px] font-[500]
                        text-[var(--newCommunityTheme-bodyText)]">
                            <div
                                aria-checked="true"
                                aria-disabled="false"
                                className="flex cursor-pointer items-center"
                                onClick={() => setIsSendPostNotifications(!isSendPostNotifications)}
                            >
                                <input type="hidden" defaultValue="true"
                                    className='text-[color:var(--newRedditTheme-bodyText)]
                                caret-[color:var(--newRedditTheme-button)]'/>
                                <Icon className='content-box h-[20px] w-[16px] overflow-hidden'/>
                                <div className="ml-[8px] mr-[4px] text-[14px]/[18px] font-[500]">
                                     Send me post reply notifications
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** */}
                    <div className="flex flex-row items-center">
                        <a
                            href="/settings#connected-accounts"
                            className="mr-[4px] block text-[14px]/[18px]
                            font-[500] text-[color:var(--newCommunityTheme-linkText)] hover:underline"
                            target="_blank"
                        >
                        Connect accounts to share your post
                        </a>
                        <div className="relative">
                            <div className="absolute inset-0">
                                <div className={`absolute bottom-full left-1/2 z-[100] mb-[5px]
                                -translate-x-1/2 whitespace-pre-line rounded-[5px]
                                 bg-black p-0 text-left text-[12px]/[16px]
                                font-[500] text-[var(--newCommunityTheme-bodyText)]
                                shadow-[0_2px_4px_0_var(--newCommunityTheme-actionIcon)]
                                transition-opacity delay-[0.5s] duration-0 
                                ${isInfoDivVisible ? 'visible-info-div' : 'hidden-info-div '}`}>
                                    <div className="font relative box-border w-[380px]
                                     rounded-[5px]
                                    border-DEFAULT border-solid border-[var(--newCommunityTheme-body)]
                                    bg-[color:var(--newCommunityTheme-body)] p-[12px] text-[14px]/[21px]
                                    font-[400]">
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
                                className='relative'
                            >
                                <InfoIcon className="icon text-[color:var(--newCommunityTheme-actionIcon)]"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col" />
            </div>
        </div>
    );
}

PostCreationFormSharingOptions.propTypes = {
    setIsSendPostNotifications: PropTypes.func.isRequired,
    isSendPostNotifications: PropTypes.bool.isRequired,
};
