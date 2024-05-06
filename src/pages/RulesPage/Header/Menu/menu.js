import React from 'react';
import {useRulesPage} from '../../rulespagecontext';


/**
 * Renders the menu for the rules and removal reasons page.
 * @return {JSX.Element} The rendered component.
 */
export function Menu() {
    const {name, type} = useRulesPage();

    const tabs = [
        {name: 'Rules', url: `/r/${name}/about/rules`, type: 'rules'},
        {name: 'Removal Reasons', url: `/r/${name}/about/removal`, type: 'removal-reasons'},
    ];

    return (
        <div className='mb-2'>
            <div className="text-[1.125rem] font-bold leading-6
            text-[var(--newCommunityTheme-bodyText)]">Rules and Removal Reasons</div>
            <div className='mt-3 flex overflow-auto'>
                {tabs.map((tab) => (
                    <a key={tab.name}
                        className={`mr-4 cursor-pointer rounded-full
                ${tab.type !== type ? 'bg-transparent' : 'bg-[var(--color-secondary-background-selected)]'} px-4
                py-3 text-[0.875rem]/[1.25rem]
                font-semibold text-[var(--color-neutral-content-strong)]
                no-underline
                hover:no-underline`}
                        href={tab.url}>{tab.name}</a>
                ))}
            </div>
        </div>
    );
}
