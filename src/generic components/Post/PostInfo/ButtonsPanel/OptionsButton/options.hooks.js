import {getIconComponent} from '../../../../iconsmap.js';

export const useOptionsButton = () => {
    const ThreeDotsIcon = getIconComponent('threedots', true);
    return {
        ThreeDotsIcon,
    };
};
