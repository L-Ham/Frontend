import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {useSelector} from 'react-redux';

export const useOptions = () => {
    const avatar = useSelector((state) => state.user.avatar);
    const imgSrc = avatar || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';
    return {
        ClothesIcon: getIconComponent('clothes', false),
        ShieldIcon: getIconComponent('sheild', false),
        imgSrc,
    };
};

