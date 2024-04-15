import {getIconComponent} from '../../../iconsmap.js';
import {formatNumber} from '../../../utils.js';
import {useState} from 'react';
import {voteClasses} from './vote.styles.js';

export const useVote = ({upvotes, downvotes, isUpvoted, isDownvoted}) => {
    const score = upvotes - downvotes;
    const VOTE = Object.freeze({
        NONE: 0,
        UPVOTE: 1,
        DOWNVOTE: -1,
    });
    const [vote, setVote] = useState(isUpvoted ? VOTE.UPVOTE : isDownvoted ? VOTE.DOWNVOTE : VOTE.NONE);
    const [voteCount, setVoteCount] = useState(score);

    /**
     * Handles the upvote event.
     * @param {Event} event - The event object.
     * @return {void}
     */
    function handleUpvote(event) {
        event.stopPropagation();
        if (vote === VOTE.UPVOTE) {
            setVote(VOTE.NONE);
            setVoteCount(score);
        } else {
            setVote(VOTE.UPVOTE);
            setVoteCount(score + 1);
        }
        // should send the vote to the server
    }

    /**
     * Handles the downvote event.
     * @param {Event} event - The event object.
     * @return {void}
     */
    function handleDownvote(event) {
        event.stopPropagation();
        if (vote === VOTE.DOWNVOTE) {
            setVote(VOTE.NONE);
            setVoteCount(score);
        } else {
            setVote(VOTE.DOWNVOTE);
            setVoteCount(score - 1);
        }
        // should send the vote to the server
    }

    let rootClasses = voteClasses.root;
    let upvoteClasses = voteClasses.upvote;
    let downvoteClasses = voteClasses.downvote;
    switch (vote) {
    case VOTE.UPVOTE:
        rootClasses += voteClasses.rootUpvoted;
        upvoteClasses += `hover:stroke-none hover:bg-[var(--color-upvote-background-hover)]`;
        downvoteClasses += `hover:stroke-none hover:bg-[var(--color-upvote-background-hover)]`;
        break;
    case VOTE.DOWNVOTE:
        rootClasses += voteClasses.rootDownvoted;
        upvoteClasses += `hover:stroke-none hover:bg-[var(--color-downvote-background-hover)]`;
        downvoteClasses += `hover:stroke-none hover:bg-[var(--color-downvote-background-hover)]`;
        break;
    default:
        rootClasses += voteClasses.rootDefault;
        upvoteClasses += voteClasses.upvoteDefault;
        downvoteClasses += voteClasses.downvoteDefault;
        break;
    }
    return {
        score: formatNumber(voteCount),
        UpvoteIcon: getIconComponent('upvote', vote === VOTE.UPVOTE),
        DownvoteIcon: getIconComponent('downvote', vote === VOTE.DOWNVOTE),
        handleDownvote,
        handleUpvote,
        rootClasses,
        upvoteClasses,
        downvoteClasses,
    };
};
