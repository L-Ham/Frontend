import {getIconComponent} from '../../../../iconsmap.js';
import {useState} from 'react';

export const useOptionsButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ThreeDotsIcon = getIconComponent('threedots', true);

    return {
        ThreeDotsIcon,
        isOpen,
        setIsOpen,
    };
};
