import {useSelector} from 'react-redux';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {useDispatch} from 'react-redux';
import {setBanner} from '../../../../store/userSlice.js';
import {useEffect} from 'react';


export const useBanner = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const imgSrc = user.bannerImage || `not found`;

    useEffect(() => {
        const fetchBanner = async () => {
            if (user.token && !user.bannerImage) {
                try {
                    const response = await axios.get(API_ROUTES.getBanner);
                    console.log('fetching banner');
                    console.log(response);
                    const bannerImage = response.data.url;
                    dispatch(setBanner({bannerImage}));
                    console.log(response);
                } catch (e) {
                    console.error(e);
                    console.log('error fetching banner');
                    console.log(user.token);
                }
            }
        };

        fetchBanner();
    }, [user, dispatch]);
    return {
        imgSrc,
    };
};
