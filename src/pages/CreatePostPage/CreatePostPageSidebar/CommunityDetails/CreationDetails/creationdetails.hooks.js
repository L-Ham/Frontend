import {useCreatePostPage} from '../../../createpostpage.context.js';

export const useCreationDate = () => {
    const {about: {communityDetails: {createdAt}}} = useCreatePostPage();
    // created at is seconds since the creation date
    // convert seconds to the year, month, and day
    const creationDate = new Date(createdAt * 1000);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = creationDate.toLocaleDateString(undefined, options);

    return {formattedDate};
};
