import React from 'react';
import {CommunityDetails} from './CommunityDetails/communitydetails.js';
import {CommunityRules} from './CommunityRules/communityrules.js';
import {RedditRules} from './RedditRules/redditrules.js';

/**
 * Renders the sidebar for the create post page.
 * @return {JSX.Element} The rendered sidebar.
 */
export function CreatePostPageSidebar() {
    return (
        <div className='m-0
        ml-[24px] hidden w-[312px]
        flex-[0_0_312px] border-0 p-0 min-[960px]:block'>
            <div className='pt-[27px]'
                style={{width: 'inherit'}}>
                <CommunityDetails/>
                <CommunityRules/>
                <RedditRules/>
                <div className="mt-[16px] w-[312px]" />
                <div className="m-[10px_auto_10px_0] max-w-[250px] text-[12px]/[16px]
                font-[500] text-[var(--newRedditTheme-metaText)]">
                    Please be mindful of reddit&apos;s{' '}
                    <a href="https://www.reddit.com/help/contentpolicy"
                        className='text-[var(--newRedditTheme-linkText)]
                     no-underline visited:text-[var(--newRedditTheme-linkText)]'>content policy</a> and
                    practice good{' '}
                    <a href="https://www.reddit.com/wiki/reddiquette"
                        className='text-[var(--newRedditTheme-linkText)]
                    no-underline visited:text-[var(--newRedditTheme-linkText)]'>reddiquette</a>.
                </div>
            </div>
        </div>
    );
}
