import {useSelector, useDispatch} from 'react-redux';
import {clearRecentPosts} from '../../../store/userSlice.js';

// recent posts hooks
export const useRecentPosts = () => {
    const data = useSelector((state) => state.user.recentPosts) || {};
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearRecentPosts());
    };
    return {
        data,
        handleClear,
    };
};
