import React from 'react';
import {classes} from './communitynote.styles.js';

/**
 * Renders the community note.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityNote() {
    const submitText = `**Don't leak out spoilers for an unreleased chapter** 
    Be sure to respect the rules. No spoilers in title 
    (anything not shown in the anime yet). Fanart/Cosplay must redirect to their source. 
    No Meme unless they are 100% original. And remember to be nice to each other. Thank you.`;
    // TODO_BACKEND: get the submit text from the backend

    return (
        submitText && <div className={classes.noteDiv} data-testid="note-div">
            {submitText}
        </div>
    );
}
