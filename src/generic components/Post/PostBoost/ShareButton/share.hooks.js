import {getIconComponent} from '../../../iconsmap.js';
import {useState} from 'react';
export const useShare = () => {
    const [isOpen, setIsOpen] = useState(false);
    return {
        ShareIcon: getIconComponent('share', false),
        isOpen,
        setIsOpen,
    };
};
