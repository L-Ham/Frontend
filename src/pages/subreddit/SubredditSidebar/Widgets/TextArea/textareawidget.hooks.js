import parse from 'html-react-parser';
import {replaceHtmlEntities} from '../../../../../generic components/utils.js';

export const useTextAreaWidget = ({textHtml}) => {
    const text = parse(replaceHtmlEntities(textHtml));

    return {
        text,
    };
};

