import {useEffect} from 'react';
import {getIconComponent} from '../../iconsmap';

export const useNotification = ({notification, onClose}) => {
    if (!notification) return null;

    const {type, id} = notification;
    const HappyFaceIcon = getIconComponent('happy-face');
    const SadFaceIcon = getIconComponent('sad-face');
    const Icon = type === 'success' ? HappyFaceIcon : SadFaceIcon;
    const CloseIcon = getIconComponent('close');

    const autoClose = () => {
        // add class scale-down and remove class scale-up
        const toaster = document.getElementById(`toaster-${id}`);
        if (!toaster) {
            console.error('Element with id "toaster" not found');
            return;
        }
        toaster.classList.remove('scale-up');
        toaster.classList.add('scale-down');
        setTimeout(() => {
            onClose(id);
        }, 300);
    };

    const handleClose = () => {
        onClose(id);
    };

    useEffect(() => {
        if (type == 'success') {
            setTimeout(autoClose, 5000);
        }
    }, []);

    return {Icon, CloseIcon, handleClose};
};
