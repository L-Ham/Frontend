/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../generic components/iconsmap';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function Post({title, user, subreddit, scheduledTime, scheduledDate, isNsfw, isSpoiler}) {
    const PostIcon = getIconComponent('create-post', false);
    return (
        <div className="_2toQcR3aw1_hj1A49e4wi7 mb-2 bg-[var(--background)]" data-testid="post-container">
            <div data-scroller-first="">
                <div>
                    <div className="_26zeT5d9JKXWbWzOT4ncpg">
                        <div className="qDE3oDok1392-t8IDOBfk">
                            <svg className="_3dezPhiKJXkVFXj94zLKcs _2sfIhl6E6vfZCwxx54EUNB"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" data-testid="post-icon-svg">
                                <g>
                                    <path d="M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637
                                    3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449
                                    8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689
                                     7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146
                                     5.78992L5 5.75V3.75Z" fill="inherit">
                                    </path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 5.5C11 8.53754 8.5376
            11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376
             0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529
             1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z"
                                    fill="inherit">
                                    </path>
                                </g>
                            </svg>
                            <div>
                                <div>This post is scheduled for <span className="_3bAfM2inJTjD3ZXNzO5nE5"
                                    data-testid="post-schedule-info">
                                    {scheduledDate} @ {scheduledTime} (GMT+03:00) Africa - Cairo</span>
                                </div>
                                <div>Scheduled by <span className="_3bAfM2inJTjD3ZXNzO5nE5"
                                    data-testid="post-user">u/{user}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bE7JgM2ex7W3aF3zci5bm">
                            <div className="_23h0-EcaBUorIHC-JZyh6J"
                                style={{width: '40px', borderLeft: '4px solid transparent'}}
                            >
                                <div className="_1E9mcoVn4MYnuBQSVDt1gC">
                                    <button className="mvlZFfW9BWm1bmljE_0Rg" data-testid="upvote-button">
                                        <span className="_2q7IQ0BUOWeEZoeAxN555e _3SUsITjKNQ7Tp0Wi2jGxIM ">
                                            <i className="geso-icon geso-icon-upvote _2Jxk822qXs4DaXwsN7yyHA">
                                            </i>
                                        </span>
                                    </button>
                                    <div className="_1rZYMD_4xY3gRcSS3p8ODO"
                                        style={{color: '#D7DADC'}}
                                    >
                                        Vote</div>
                                    <button className="mvlZFfW9BWm1bmljE_0Rg" aria-label="downvote"
                                        data-testid="downvote-button">
                                        <span className="_1iKd82bq_nqObFvSH1iC_Q Q0BxYHtCOJ_rNSPJMU2Y7 ">
                                            <i className="geso-icon geso-icon-downvote ZyxIIl4FP5gHGrJDzNpUC">
                                            </i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                style={{backgroundColor: '#1A1A1B'}}
                                className="_2KWv8ukh9RMgpOturAiV9z">
                                <div className="_3pHV3zwe-Q9-xNEB0iM3WT bg-[var(--background)]">
                                    <div className="_2UwJRJuqEbkRCV8O6REq8h">
                                        <div className="_38EcSQ9jzVrdtzkXO1cydX">
                                            <div className="_2MkcR85HDnYngvlVW2gMMa">
                                                <div className="_2c1ElNxHftd8W_nZtcG9zf
                                                 _2YO2O4rMRYYMeH_t2y8M5w _2e9Lv1I3dOmICVO9fg3uTG"
                                                style={{borderColor: '#343536'}}
                                                >
                                                    <PostIcon className=" _3CquMWJ6RMh8E9D-_84AtZ
                                                    _2hIvPRO2xz4rn9LXAJXYDa
                                                     _10qSZsDWnOBwx4bc7GJ1QF geso-icon geso-icon-text_post"
                                                    data-testid="post-type-icon">
                                                    </PostIcon>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hAQclO6xLNG3WDMgkywGo">
                                            <div className='flex flex-row items-center'>
                                                <span className="_3jA9JBnv4bqmmiAw3Akmug"
                                                    data-testid="post-title">{title}</span>
                                                <div className="_1-tY_25z_pkhbFvUz2-Aq flex flex-row items-center">
                                                    {isSpoiler && <span className="_1wzhGvvafQFOWAyA157okr"
                                                        style={{border: '1px solid #A4A7A8', color: '#A4A7A8'}}
                                                        data-testid="post-spoiler-tag">spoiler</span>}
                                                    {isNsfw &&
                                                        <span className="_1wzhGvvafQFOWAyA157okr"
                                                            style={{border: '1px solid #FF585B', color: '#FF585B'}}
                                                            data-testid="post-nsfw-tag">nsfw</span>}
                                                </div>
                                            </div>
                                            <span className="_297_pyPlxmqBF0tLkUhTME" data-testid="post-subreddit-link">
                                                <a className="_3ryJoIoycVkA88fy40qNJc"
                                                    href={`/r/${subreddit}/`}>r/{subreddit}
                                                </a>
                                                <span className="_3LS4zudUBagjFS7HjWJYxo" role="presentation">
                                                    •</span>
                                                <a className="_1k9D_vEsQ8odWCNERbDOxX
                                                _23wugcdiaj44hdfugIAlnX oQctV4n0yUb0uiHDdGnmE
                                                 text-[var(--newCommunityTheme-actionIcon)]"
                                                href="/user/artyyyGuy/">u/{user}</a>
                                            </span>
                                            <span
                                                className="P7KCCrRfT4TO2wcnk_Kjv
                                                text-[var(--newCommunityTheme-actionIcon)]" data-testid="post-actions">
                                                <span className="_1AkGbjxtRpq3ZhKADdUTU3">
                                                    <svg className="_1xM2tjm8c7LuqnoEJG1Ws1 mr-1"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <title id="undefined-title">
                                                        </title>
                                                        <g>
                                                            <path fill="inherit"
                                                                d="M15.75,7.834625 L12,4.084625 L12.808,3.276625
                                                             C13.8435,2.241125
                                                            15.5225,2.241125 16.558,3.276625 C17.5935,4.312125
                                                             17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z
                                                            M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z
                                                             M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z">
                                                            </path>
                                                        </g>
                                                    </svg>Submit post now</span>
                                                <span className="_1AkGbjxtRpq3ZhKADdUTU3">
                                                    <svg className="_1xM2tjm8c7LuqnoEJG1Ws1"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <title id="undefined-title">
                                                        </title>
                                                        <g>
                                                            <path fill="inherit"
                                                                d="M15.75,7.834625 L12,4.084625 L12.808,3.276625
                                                             C13.8435,2.241125
                                                            15.5225,2.241125 16.558,3.276625 C17.5935,4.312125
                                                             17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z
                                                            M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z
                                                             M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z">
                                                            </path>
                                                        </g>
                                                    </svg> Edit</span>
                                                <span className="_1AkGbjxtRpq3ZhKADdUTU3">
                                                    <svg className="_1Fa4RPHlhrfUZuNaXK2-eP
                                                    _1xM2tjm8c7LuqnoEJG1Ws1"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,
                                                        0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,
                                                        0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5
                                                        ,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z">
                                                        </path>
                                                        <path d="M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,
                                                        19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,
                                                        15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,
                                                        0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,
                                                        0v-7a.75.75,0,0,1,1.5,0Z">
                                                        </path>
                                                    </svg> Delete</span>
                                                <button id="SCHEDULED_POST_DROPDOWN2960360"
                                                    className="_2pFdCpgBihIaYh9DSMWBIu
                                                uMPgOFYlCc5uvpa2Lbteu">
                                                    <i className="_38GxRFSqSC-Z2VLi5Xzkjy
                                                    geso-icon geso-icon-overflow_horizontal">
                                                    </i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// prop types
Post.propTypes = {
    title: PropTypes.string,
    user: PropTypes.string,
    subreddit: PropTypes.string,
    scheduledTime: PropTypes.string,
    scheduledDate: PropTypes.string,
    isNsfw: PropTypes.bool,
    isSpoiler: PropTypes.bool,
};
