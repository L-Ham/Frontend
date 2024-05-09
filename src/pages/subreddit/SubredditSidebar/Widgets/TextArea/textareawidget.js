import React from 'react';
import propTypes from 'prop-types';
import {useTextAreaWidget} from './textareawidget.hooks.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';

/**
 * Renders the text area widget.
 * @param {object} props - The props.
 * @param {string} props.textHtml - The text in HTML format.
 * @param {string} props.shortName - The short name of the widget.
 * @param {boolean} props.isCustomizable - The flag to check if the widget is customizable.
 * @param {function} props.onEditClick - The function to call when the edit button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function TextAreaWidget({textHtml, shortName: title, isCustomizable=false, onEditClick=null}) {
    const {text} = useTextAreaWidget({textHtml});

    if (!text) return null;

    return (
        <SubredditWidget title={title} data-testid="subreddit-widget"
            isCustomizable={isCustomizable}
            onEditClick={onEditClick}>
            <div data-testid="text-container">
                {text}
            </div>
        </SubredditWidget>
    );
}

TextAreaWidget.propTypes = {
    textHtml: propTypes.string.isRequired,
    shortName: propTypes.string.isRequired,
    isCustomizable: propTypes.bool,
    onEditClick: propTypes.func,
};
