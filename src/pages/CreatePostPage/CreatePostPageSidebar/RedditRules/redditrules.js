import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {RedditRule} from './RedditRule/redditrule';


/**
 * Renders the Reddit rules.
 * @return {JSX.Element} The rendered component.
 */
export function RedditRules() {
    const PostingToRedditIcon = getIconComponent('posting-to-reddit');
    const rules = [
        {
            'short_name': 'Remember the human.',
            'priority': 0,
        },
        {
            'short_name': 'Behave like you would in real life',
            'priority': 1,
        },
        {
            'short_name': 'Look for the original source of content',
            'priority': 2,
        },
        {
            'short_name': 'Search for duplicates before posting',
            'priority': 3,
        },
        {
            'short_name': 'Read the community\'s rules',
            'priority': 4,
        },
    ];
    return (
        <div className='mt-[15px] rounded-[4px] bg-[color:var(--newRedditTheme-body)] p-[12px]'>
            <div className="flex items-center
            border-b-DEFAULT border-solid border-[color:var(--newRedditTheme-line)]
            text-[16px]/[20px] font-[500] text-[var(--newRedditTheme-bodyText)] ">
                <PostingToRedditIcon className='content-box mr-[8px] box-content size-[40px] overflow-hidden pb-[5px]'/>
             Posting to Reddit
            </div>
            <ol className='list-inside list-decimal pl-0 text-[14px]/[18px] font-[500]'>
                {rules.map((rule) => (
                    <RedditRule key={rule.priority} rule={rule}/>
                ))}
            </ol>
        </div>
    );
}
