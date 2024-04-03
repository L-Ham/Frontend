import {getIconComponent} from '../../../iconsmap';

export const useBackButton = () => {
    /**
     * Handles the click event for the back button.
     * @param {Event} event - The click event object.
     */
    function handleBackClick(event) {
        event.stopPropagation();
        window.history.back();
    }

    const BackIcon = getIconComponent('back');

    return {
        handleBackClick,
        BackIcon,
    };
};
