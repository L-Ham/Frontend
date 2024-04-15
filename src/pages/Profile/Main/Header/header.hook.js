import {useSelector} from 'react-redux';

export const useHeader = () => {
    const user = useSelector((state) => state.user);
    const imgSrc = user.avatar || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';
    return {
        imgSrc,
        name};
};
