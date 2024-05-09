import {getIconComponent} from '../../../../../../generic components/iconsmap.js';
import {formatNumber} from '../../../../../../generic components/utils.js';
import {useState} from 'react';
import {voteClasses} from './commentvote.styles.js';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';

export const useCommentsVote = ({commentId, score, isUpvoted, isDownvoted}) => {
    const VOTE = Object.freeze({
        NONE: 0,
        UPVOTE: 1,
        DOWNVOTE: -1,
    });
    const [vote, setVote] = useState(isUpvoted ? VOTE.UPVOTE : isDownvoted ? VOTE.DOWNVOTE : VOTE.NONE);
    const [voteCount, setVoteCount] = useState(score);
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    /**
     * Handles the upvote event.
     * @param {Event} event - The event object.
     * @return {void}
     */
    function handleUpvote(event) {
        event.stopPropagation();
        if (!token) {
            navigate('/login?url=' + window.location.pathname);
        }
        const upvote = async () => {
            try {
                await axios.patch(vote === VOTE.UPVOTE ? API_ROUTES.commentCancelUpvote: API_ROUTES.commentUpvote,
                    {commentId});
            } catch (error) {
                console.error(error);
            }
        };
        if (vote === VOTE.UPVOTE) {
            setVote(VOTE.NONE);
            setVoteCount(score);
        } else {
            setVote(VOTE.UPVOTE);
            setVoteCount(score + 1);
        }
        upvote();
        // should send the vote to the server
    }

    /**
     * Handles the downvote event.
     * @param {Event} event - The event object.
     * @return {void}
     */
    function handleDownvote(event) {
        event.stopPropagation();
        if (!token) {
            navigate('/login?url=' + window.location.pathname);
        }
        const downvote = async () => {
            try {
                await axios.patch(vote === VOTE.DOWNVOTE ? API_ROUTES.commentCancelDownvote: API_ROUTES.commentDownvote,
                    {commentId});
            } catch (error) {
                console.error(error);
            }
        };
        if (vote === VOTE.DOWNVOTE) {
            setVote(VOTE.NONE);
            setVoteCount(score);
        } else {
            setVote(VOTE.DOWNVOTE);
            setVoteCount(score - 1);
        }
        downvote();
        // should send the vote to the server
    }

    let rootClasses = voteClasses.root;
    let upvoteClasses = voteClasses.upvote;
    let downvoteClasses = voteClasses.downvote;
    switch (vote) {
    case VOTE.UPVOTE:
        rootClasses += voteClasses.rootUpvoted;
        upvoteClasses += `hover:stroke-none hover:bg-[var(--color-secondary-background-hover)]
         text-[var(--color-action-upvote)]`;
        downvoteClasses += `hover:stroke-none hover:bg-[var(--color-secondary-background-hover)]`;
        break;
    case VOTE.DOWNVOTE:
        rootClasses += voteClasses.rootDownvoted;
        upvoteClasses += `hover:stroke-none hover:bg-[var(--color-secondary-background-hover)]`;
        downvoteClasses += `hover:stroke-none hover:bg-[var(--color-secondary-background-hover)]
        text-[var(--color-action-downvote)]`;
        break;
    default:
        rootClasses += voteClasses.rootDefault;
        upvoteClasses += voteClasses.upvoteDefault;
        downvoteClasses += voteClasses.downvoteDefault;
        break;
    }
    return {
        actualScore: formatNumber(voteCount),
        UpvoteIcon: getIconComponent('upvote', vote === VOTE.UPVOTE),
        DownvoteIcon: getIconComponent('downvote', vote === VOTE.DOWNVOTE),
        handleDownvote,
        handleUpvote,
        rootClasses,
        upvoteClasses,
        downvoteClasses,
    };
};
