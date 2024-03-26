import React from 'react';
import propTypes from 'prop-types';
import {SubredditWidget} from './SubredditWidget';
import parse from 'html-react-parser';
import {useSubreddit} from './subredditContext';

/**
 * Renders the text area widget.
 * @param {object} props - The props.
 * @param {string} props.id - The id of the widget.
 * @param {object} props.styles - The styles for the widget.
 * @param {string} props.textHtml - The text in HTML format.
 * @param {string} props.shortName - The short name of the widget.
 * @return {JSX.Element} The rendered component.
 */
export function TextAreaWidget({id, styles, textHtml, shortName: title}) {
    const {about} = useSubreddit();

    if (!about) return (<div>Loading...</div>);
    const {data: {user_is_moderator: isCustomizable}} = about;

    const text = parse(replaceHtmlEntities(textHtml));
    return (
        <SubredditWidget title={title} isCustomizable={isCustomizable} id={id}>
            {text}
        </SubredditWidget>
    );
}

TextAreaWidget.propTypes = {
    id: propTypes.string.isRequired,
    styles: propTypes.object.isRequired,
    textHtml: propTypes.string.isRequired,
    shortName: propTypes.string.isRequired,
};

/**
 * Replaces HTML entities in a string.
 * @param {string} str - The string to replace HTML entities in.
 * @return {string} The string with HTML entities replaced.
 */
function replaceHtmlEntities(str) {
    return str.replaceAll(/&lt;/g, '<').replaceAll(/&gt;/g, '>')
        .replaceAll(/&quot;/g, '"').replaceAll(/&nbsp;/g, ' ')
        .replaceAll(/&apos;/g, '\'').replaceAll(/&amp;/g, '&');
}
