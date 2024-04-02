import {textClasses} from './posttext.styles';
import {DATA, VIEW_CONTEXTS} from '../../data.js';
import {replaceHtmlEntities} from '../../../utils.js';
import parse from 'html-react-parser';

export const usePostText = ({postId, viewContext}) => {
    const {selftext_html: content} = DATA[postId];
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    const startTag = '&lt;!-- SC_OFF --&gt;';
    const closingTag = '&lt;!-- SC_ON --&gt;';
    let postContent = content.replaceAll(startTag, '').replaceAll(closingTag, '');
    postContent = replaceHtmlEntities(postContent);
    postContent = postContent.replaceAll(
        '<a', '<a className=\'text-[var(--color-a-default)] no-underline break-words\'',
    );
    postContent = parse(postContent);
    const classNames = isCommentsPage ? textClasses.rootC : textClasses.root;
    return {
        classNames,
        postContent,
    };
};
