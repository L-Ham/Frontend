import {getIconComponent} from '../../../../../../../generic components/iconsmap';

export const usePostTag = (tag, setPostTags, isActive) => {
    const handleTagClick = () => {
        if (isActive) {
            setPostTags((prevTags) => prevTags.filter((t) => t !== tag));
        } else {
            setPostTags((prevTags) => [...prevTags, tag]);
        }
    };

    const PlusIcon = getIconComponent('plus', true);
    const CheckMarkIcon = getIconComponent('checkmark', true);
    const Icon = isActive ? CheckMarkIcon : PlusIcon;

    return {handleTagClick, Icon};
};
