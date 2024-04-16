import React from 'react';
import {FormatOption} from
    './FormatOption/formatoption.js';
import {optionsList} from './richtexttoolbar.constants.js';
import {useRichTextToolbar} from './richtexttoolbar.hooks.js';
import {classes} from './richtexttoolbar.styles.js';

/**
 * Renders the text editor options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function RichTextToolbar() {
    const {
        isMoreOptionsVisible,
        setIsMoreOptionsVisible,
        visibleOptionsList,
        nonVisibleOptionsList,
        toolbarRef,
        ThreeDotsIcon,
    } = useRichTextToolbar();


    return (
        <div ref={toolbarRef} className={classes.richTextToolbarDiv} data-testid="rich-text-toolbar-div">
            <div className={classes.richTextToolbarInnerDiv} data-testid="rich-text-toolbar-inner-div">
                {visibleOptionsList.map((option) =>
                    (<FormatOption key={option.name} option={option} data-testid={`format-option-${option.name}`}/>))}
                <span>
                    <div className={classes.richTextToolbarSpan} data-testid="rich-text-toolbar-span" />
                </span>
                <div className={classes.richTextToolbarDiv2} data-testid="rich-text-toolbar-div2">
                    {(visibleOptionsList.length != optionsList.length) && <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="more options"
                        id="Post--Overflow-Dropdown__5c39d4"
                        data-adclicklocation="overflow_menu"
                        className={classes.richTextToolbarButton}
                        onClick={() => setIsMoreOptionsVisible(!isMoreOptionsVisible)}
                        data-testid="rich-text-toolbar-button"
                    >
                        <ThreeDotsIcon className="icon h-[32px]
                        text-[var(--newCommunityTheme-actionIcon)]" data-testid="three-dots-icon"/>
                    </button>}
                    <div className={classes.richTextToolbarDiv3} data-testid="rich-text-toolbar-div3">
                        {isMoreOptionsVisible && nonVisibleOptionsList.map((option) =>
                            (<FormatOption key={option.name} option={option}
                                data-testid={`non-visible-format-option-${option.name}`}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}
