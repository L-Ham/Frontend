import React from 'react';
import {PostCreationPollOption} from './PostCreationPollOption/postcreationpolloption.js';
import './postcreationpolloptions.css';
import {usePostCreation} from '../../../../postcreationcontext.js';

/**
 * Renders the poll options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationPollOptions() {
    const {pollData, setPollData} = usePostCreation();
    return (
        <div className="w-full grow ">
            <div>
                {Object.entries(pollData.options).map(([key, option], index) => (
                    <PostCreationPollOption
                        key={index}
                        index={index}
                    />
                ))}
            </div>
            {/**/}
            <div className="mt-[8px] flex items-center justify-between
            pr-[20px] ">
                <button
                    role="button"
                    tabIndex={0}
                    className="post-creation-btn font add-option-btn relative
                    box-border flex min-h-[32px]
                    w-auto min-w-[32px] cursor-pointer items-center justify-center
                    rounded-full border-DEFAULT border-solid border-transparent bg-transparent
                    fill-[var(--newCommunityTheme-button)] px-[16px] py-[4px] text-center text-[14px]/[17px]
                    font-[700]
                    text-[var(--newCommunityTheme-button)]
                    "
                    onClick={() => {
                        const newPollData = {...pollData};
                        const newIndex = Object.keys(newPollData.options).length;
                        newPollData.options[newIndex] = '';
                        setPollData({...newPollData});
                    }}
                    disabled={Object.keys(pollData.options).length >= 6}
                >
                Add Option
                </button>
                <div className="flex items-center">
                    <div className="mr-[10px] text-[13px]/[20px]
                    text-[var(--newCommunityTheme-actionIcon)]">Voting length:</div>
                    <div
                        className="relative "
                        id="poll-creation-voting-length"
                    >
                        <div className="mr-[10px] flex cursor-pointer
                        items-center
                        fill-[var(--newCommunityTheme-bodyText)] text-[13px]/[20px]
                        text-[var(--newCommunityTheme-bodyText)]">
                            <div>3 days</div>
                            <svg
                                className="ml-[8px] inline-block size-[20px]
                                fill-[var(--newRedditTheme-actionIcon)] align-middle"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

