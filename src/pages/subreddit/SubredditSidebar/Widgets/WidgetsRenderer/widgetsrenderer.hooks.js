import {useSubreddit} from '../../../subredditcontext.js';

export const useWidgetsRenderer = () => {
    const {widgets, about} = useSubreddit();

    if (!widgets || !about) return {};

    const {
        data: {
            user_is_moderator: userIsModerator,
        },
    } = about;

    const {
        items,
        layout: {
            idCardWidget,
            topbar,
            sidebar,
            moderatorWidget,
        },
    } = widgets;

    const allWidgets = [
        idCardWidget,
        ...topbar.order,
        ...sidebar.order,
        moderatorWidget,
    ];

    if (userIsModerator) {
        allWidgets.push('community-settings');
    }

    return {allWidgets, items};
};
