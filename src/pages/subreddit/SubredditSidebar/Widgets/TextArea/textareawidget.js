import React from 'react';
import propTypes from 'prop-types';
import {useTextAreaWidget} from './textareawidget.hooks.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';

/**
 * Renders the text area widget.
 * @param {object} props - The props.
 * @param {string} props.textHtml - The text in HTML format.
 * @param {string} props.shortName - The short name of the widget.
 * @return {JSX.Element} The rendered component.
 */
export function TextAreaWidget({textHtml, shortName: title}) {
    const {text} = useTextAreaWidget({textHtml});

    if (!text) return null;

    return (
        <SubredditWidget title={title}>
            <div>
                {text}
            </div>
        </SubredditWidget>
    );
}

TextAreaWidget.propTypes = {
    textHtml: propTypes.string.isRequired,
    shortName: propTypes.string.isRequired,
};
