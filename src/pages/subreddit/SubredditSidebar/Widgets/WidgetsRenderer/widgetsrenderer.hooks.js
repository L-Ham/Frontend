import {useSubreddit} from '../../../subredditcontext.js';

export const useWidgetsRenderer = () => {
    const {widgets, about} = useSubreddit();

    // TODO_BACKEND: update destructuring to match the actual data structure
    if (!widgets || !about) return {};

    const {
        order: allWidgets,
    } = widgets;

    const items = widgets;

    return {allWidgets, items, about};
};
