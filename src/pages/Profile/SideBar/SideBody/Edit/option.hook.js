import {getIconComponent} from '../../../../../generic components/iconsmap.js';

export const useOptions = () => {
    return {
        ClothesIcon: getIconComponent('clothes', false),
        ShieldIcon: getIconComponent('sheild', false),
    };
};
