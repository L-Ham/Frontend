import {VIEW_CONTEXTS} from '../data';
import {postboostClasses} from './postboost.styles';

export const usePostBoost = ({viewContext}) => {
    const classNames = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        postboostClasses.rootComments : postboostClasses.root;

    return {
        classNames,
    };
};
