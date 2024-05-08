import React from 'react';
import {PostCreationPollOption} from './PostCreationPollOption/postcreationpolloption.js';
import './postcreationpolloptions.css';
import {usePostCreation} from '../../../../postcreationcontext.js';
import {classes} from './postcreationpolloptions.styles.js';

/**
 * Renders the poll options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationPollOptions() {
    const {pollData, setPollData} = usePostCreation();
    return (
        <div className={classes.postCreationPollOptionsDiv} data-testid="post-creation-poll-options-div">
            <div data-testid="post-creation-poll-options-inner-div">
                {Object.entries(pollData.options).map(([key, option]) => (
                    <PostCreationPollOption
                        key={key}
                        index={Number(key)}
                        data-testid={`post-creation-poll-option-${key}`}
                        value={option}
                    />
                ))}
            </div>
            <div className={classes.postCreationPollOptionsDiv2} data-testid="post-creation-poll-options-div2">
                <button
                    role="button"
                    tabIndex={0}
                    className={classes.postCreationPollOptionsButton}
                    onClick={() => {
                        const newPollOptions = pollData.options;
                        const newIndex = Object.keys(newPollOptions).length;
                        newPollOptions[newIndex] = '';
                        setPollData({...pollData, options: newPollOptions});
                    }}
                    disabled={Object.keys(pollData.options).length >= 6}
                    data-testid="post-creation-poll-options-button"
                >
            Add Option
                </button>
                <div className={classes.postCreationPollOptionsDiv3} data-testid="post-creation-poll-options-div3">
                    <div className={classes.postCreationPollOptionsDiv4}
                        data-testid="post-creation-poll-options-div4">Voting length:</div>
                    <div
                        className={classes.postCreationPollOptionsDiv5}
                        id="poll-creation-voting-length"
                        data-testid="poll-creation-voting-length"
                    >
                        <div className={classes.postCreationPollOptionsDiv6}
                            data-testid="post-creation-poll-options-div6">
                            <div data-testid="voting-length">3 days</div>
                            <svg
                                className={classes.postCreationPollOptionsSvg}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                data-testid="voting-length-svg"
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

