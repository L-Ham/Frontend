import {useSubreddit} from '../../../subredditcontext.js';

export const useWidgetsRenderer = () => {
    const {widgets, about} = useSubreddit();
    // TODO_BACKEND: update destructuring to match the actual data structure
    if (!widgets || !about) return {};

    // const {
    //     data: {
    //         user_is_moderator: userIsModerator,
    //     },
    // } = about;

    const userIsModerator = false;

    const {
        order: allWidgets,
    } = widgets;

    const items = widgets;

    if (userIsModerator) {
        allWidgets.push('community-settings');
    }

    return {allWidgets, items};
};
