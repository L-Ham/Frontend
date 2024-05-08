import {VIEW_CONTEXTS} from '../../../data.js';
import {overlayClasses} from './useroverlay.styles';
export const useUserOverlay = ({viewContext}) => {
    const classNames = `${overlayClasses.root} ${viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        overlayClasses.commentsContext : overlayClasses.defaultContext}`;
    return {
        classNames,
    };
};
