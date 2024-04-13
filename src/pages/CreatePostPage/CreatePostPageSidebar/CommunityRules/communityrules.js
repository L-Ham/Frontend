import React from 'react';
import {useCreatePostPage} from '../../createpostpage.context';
import {CommunityRule} from './CommunityRule/communityrule';
import './communityrules.css';

/**
 * Renders the community rules.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityRules() {
    const {rules} = useCreatePostPage();
    if (!rules) return null;

    const {rules: Communityrules} = rules;

    return (
        <div className='community-rules mt-[16px] w-[312px] '>
            <div className='overflow-visible
             break-words
            rounded-[4px] border-DEFAULT
            border-[color:var(--newRedditTheme-widgetColors-sidebarWidgetBorderColor)]
            bg-[color:var(--newRedditTheme-widgetColors-sidebarWidgetBackgroundColor)]
             fill-[color:var(--newRedditTheme-bodyText)] text-[color:var(--newRedditTheme-bodyText)]'>
                <div className="flex break-words rounded-[3px_3px_0_0]
                border-0 bg-[color:var(--newCommunityTheme-widgetColors-sidebarWidgetHeaderColor)]
                fill-[var(--newCommunityTheme-widgetColors-sidebarWidgetTitleColor)]
                p-[0_12px_12px]
                text-[10px]/[12px] font-[700] uppercase
                tracking-[0.5px] text-[color:var(--newCommunityTheme-widgetColors-sidebarWidgetTitleColor)]">
                    <div className="p-[12px_0_0]">r/OnePiece Rules</div>
                </div>

                <div className='max-h-none break-words fill-[var(--newRedditTheme-bodyText)]
                p-[12px] text-[var(--newRedditTheme-bodyText)]'>
                    {Communityrules.map((rule) => (
                        <CommunityRule key={rule.priority} rule={rule}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
