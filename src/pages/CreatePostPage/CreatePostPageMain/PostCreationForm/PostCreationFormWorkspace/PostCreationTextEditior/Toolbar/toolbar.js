import React from 'react';
import {RichTextToolbar} from
    './RichTextToolbar/richtexttoolbar.js';
import './toolbar.css';
import {classes} from './toolbar.styles.js';

/**
 * Renders the text editor options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function Toolbar() {
    return (
        <div className={classes.toolbarDiv} data-testid="toolbar-div">
            <RichTextToolbar data-testid="rich-text-toolbar"/>
            {/* MD MODE*/}
            <div className="relative" data-testid="markdown-mode-div">
                <button
                    role="button"
                    tabIndex={-1}
                    aria-label="Switch to markdown"
                    className={classes.toolbarButton}
                    onClick={() =>alert('not supported yet :)')}
                    data-testid="markdown-mode-button"
                >
                    <span data-testid="markdown-mode-span">Markdown Mode</span>
                </button>
            </div>
        </div>
    );
}
