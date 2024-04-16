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
        <div ref={toolbarRef} className={classes.richTextToolbarDiv}>
            <div className={classes.richTextToolbarInnerDiv}>
                {visibleOptionsList.map((option) =>
                    (<FormatOption key={option.name} option={option}/>))}
                <span>
                    <div className={classes.richTextToolbarSpan} />
                </span>
                <div className={classes.richTextToolbarDiv2}>
                    {(visibleOptionsList.length != optionsList.length) && <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="more options"
                        id="Post--Overflow-Dropdown__5c39d4"
                        data-adclicklocation="overflow_menu"
                        className={classes.richTextToolbarButton}
                        onClick={() => setIsMoreOptionsVisible(!isMoreOptionsVisible)}
                    >
                        <ThreeDotsIcon className="icon h-[32px] text-[var(--newCommunityTheme-actionIcon)]"/>
                    </button>}
                    <div className={classes.richTextToolbarDiv3}>
                        {isMoreOptionsVisible && nonVisibleOptionsList.map((option) =>
                            (<FormatOption key={option.name} option={option}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}
