import React from 'react';

/**
 * Renders the community note.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityNote() {
    const submitText = `**Don't leak out spoilers for an unreleased chapter** 
    Be sure to respect the rules. No spoilers in title 
    (anything not shown in the anime yet). Fanart/Cosplay must redirect to their source. 
    No Meme unless they are 100% original. And remember to be nice to each other. Thank you.`;

    return (
        <div className='font
        border-[color:var(--newCommunityTheme-line)]]
         mx-0 my-[12px]
         break-words rounded-[4px]
         border-DEFAULT
         border-solid bg-[var(--newCommunityTheme-body)] px-[16px] py-[8px] text-[12px]/[18px]
         font-[400] text-[var(--newCommunityTheme-bodyText)]'>
            {submitText}
        </div>
    );
}
