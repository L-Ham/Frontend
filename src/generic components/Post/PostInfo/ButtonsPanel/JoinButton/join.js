import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {joinClasses, joinStyles} from './join.styles';
import {API_ROUTES} from '../../../../../requests/routes';
import {axiosInstance as axios} from '../../../../../requests/axios';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
/**
 * JoinButton component
 * @param {string} postId
 * @param {string} subredditId
 * @return {React.Component}
 */
export function JoinButton({
    postId,
    subredditId,
}) {
    const [isJoined, setIsJoined] = useState(false);
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    return (
        <button
            className={joinClasses.root}
            style={joinStyles.root}
            data-testid={`join-${postId}`}
            onClick={(e) => {
                e.stopPropagation();
                setIsJoined(!isJoined);
                const sendReq = async () => {
                    if (!token) {
                        navigate('/login?url=' + window.location.pathname);
                    }
                    if (!isJoined) {
                        await axios.patch(API_ROUTES.joinCommunity, {subRedditId: subredditId});
                    } else {
                        await axios.delete(API_ROUTES.leaveCommunity, {subRedditId: subredditId});
                    }
                };
                sendReq();
            }}
            type='button'
        >
            {isJoined ? 'Leave':'Join'}
        </button>
    );
}

JoinButton.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
};
