import {getIconComponent} from '../../../../generic components/iconsmap';
// create post component
export const useCreatePost = () => {
    const CreatePostIcon = getIconComponent('create-post', false);
    // href should be the current page url and add /submit to it
    const href = '/submit';
    return {
        CreatePostIcon,
        href,
    };
};

// advertise button component
export const useAdvertiseButton = () => {
    const AddvertiseIcon = getIconComponent('advertise', false);
    const href = '/add';
    return {
        AddvertiseIcon,
        href,
    };
};
