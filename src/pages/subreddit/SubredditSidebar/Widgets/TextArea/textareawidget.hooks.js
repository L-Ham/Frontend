import {useSubreddit} from '../../../subredditcontext.js';
import parse from 'html-react-parser';
import {replaceHtmlEntities} from '../../../../../generic components/utils.js';

export const useTextAreaWidget = ({textHtml}) => {
    const {about} = useSubreddit();

    if (!about) return null;

    const text = parse(replaceHtmlEntities(textHtml));

    return {
        text,
    };
};

