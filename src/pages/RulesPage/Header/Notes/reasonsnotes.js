import React from 'react';
import {useRulesPage} from '../../rulespagecontext';

/**
 * Renders the notes for the rules and removal reasons page.
 * @return {JSX.Element} The rendered component.
 */
export function ReasonsNotes() {
    const {rules} = useRulesPage();
    if (!rules) return null;
    // TODO: get the removal reasons instead of rules

    return (
        <p className="mb-[20px] flex text-[12px]/[16px]
        font-[400]
        text-[var(--newCommunityTheme-metaText)]
        ">
            Help people become better posters by giving a short reason why their post was removed.
            <span className="m-0 ml-auto p-0">
                {rules.length}/50
            </span>
        </p>
    );
}
