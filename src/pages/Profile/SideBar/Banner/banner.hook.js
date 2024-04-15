import {useSelector} from 'react-redux';


export const useBanner = () => {
    const user = useSelector((state) => state.user);
    const imgSrc = user.bannerImage;
    return {
        imgSrc,
    };
};
