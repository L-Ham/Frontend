import {textClasses} from './posttext.styles';
import {VIEW_CONTEXTS} from '../../data.js';
import {replaceHtmlEntities} from '../../../utils.js';
import parse from 'html-react-parser';

export const usePostText = ({content, viewContext}) => {
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    const startTag = '&lt;!-- SC_OFF --&gt;';
    const closingTag = '&lt;!-- SC_ON --&gt;';
    let postContent = content.replaceAll(startTag, '').replaceAll(closingTag, '');
    postContent = replaceHtmlEntities(postContent);
    postContent = postContent.replaceAll(
        '<a', '<a className=\'text-[var(--color-primary)] no-underline break-words\'',
    );
    // if not in comments page, remove all classes starting with md
    postContent = isCommentsPage ? postContent : postContent.replaceAll(
        'class="md', 'class="',
    ).replaceAll(
        '<p', '<p className=\'inline\'',
    );
    postContent = parse(postContent);
    const classNames = isCommentsPage ? textClasses.rootC : textClasses.root;
    return {
        classNames,
        postContent,
    };
};
