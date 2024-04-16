import {useSelector} from 'react-redux';


export const useBanner = () => {
    const user = useSelector((state) => state.user);
    const imgSrc = user.banner;
    return {
        imgSrc,
    };
};
