import {useNavigate} from 'react-router-dom';
import {getIconComponent} from '../../../../../iconsmap.js';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';

export const useTopBar = ({subredditId}) => {
    const [isJoined, setIsJoined] = useState(false);
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const handleJoin = (e) => {
        e.stopPropagation(); setIsJoined(!isJoined);
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
    };
    return {
        DefaultIcon: getIconComponent('default-subreddit'),
        isJoined,
        handleJoin,
    };
};
