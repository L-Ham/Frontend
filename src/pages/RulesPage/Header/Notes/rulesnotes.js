import React from 'react';


/**
 * Renders the notes for the rules and removal reasons page.
 * @return {JSX.Element} The rendered component.
 */
export function RulesNotes() {
    return (
        <div className='text-[14px]/[18px]
         font-[500]
         text-[var(--newCommunityTheme-bodyText)]'>
            These are rules that visitors must follow to participate.
             They can be used as reasons to report or ban posts,
             comments, and users. Communities can have a maximum of 15 rules.
        </div>
    );
}
