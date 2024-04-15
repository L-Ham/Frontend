import React from 'react';
import {RichTextToolbar} from
    './RichTextToolbar/richtexttoolbar.js';
import './toolbar.css';

/**
 * Renders the text editor options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function Toolbar() {
    return (
        <div className='sticky top-[48px] z-[4] box-border flex
        flex-nowrap
        items-center rounded-[4px] bg-[var(--newCommunityTheme-field)] '>
            <RichTextToolbar/>
            {/* MD MODE*/}
            <div className="relative">
                <button
                    role="button"
                    tabIndex={-1}
                    aria-label="Switch to markdown"
                    className="swtch-to-mdwn-btn relative box-border flex min-h-[24px] w-auto
                    min-w-[24px] cursor-pointer items-center justify-center whitespace-pre-wrap break-keep rounded-full
                    border-DEFAULT border-solid border-transparent bg-transparent px-[8px] py-[4px] text-center
                    text-[12px]/[16px] font-[700]"
                    onClick={() =>alert('not supported yet :)')}
                >
                    <span>Markdown Mode</span>
                </button>
            </div>
        </div>
    );
}
