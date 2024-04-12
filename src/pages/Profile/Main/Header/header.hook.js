import {useSelector} from 'react-redux';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {useDispatch} from 'react-redux';
import {setAvatar} from '../../../../store/userSlice.js';
import {useEffect} from 'react';

export const useHeader = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const imgSrc = user.avatarImage || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';

    useEffect(() => {
        const fetchAvatar = async () => {
            if (user.token && !user.avatarImage) {
                try {
                    console.log('fetching avatar');
                    const response = await axios.get(API_ROUTES.getAvatar, {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
                    const avatarImage = response.data.url;
                    dispatch(setAvatar({avatarImage}));
                } catch (e) {
                    console.error(e);
                }
            }
        };

        fetchAvatar();
    }, [user, dispatch]);
    return {
        imgSrc};
};
