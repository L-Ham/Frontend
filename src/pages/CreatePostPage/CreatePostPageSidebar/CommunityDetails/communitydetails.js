import React from 'react';
import {CreationDetails} from './CreationDetails/creationdetails.js';
import {CommunityCover} from './CommunityCover/communitycover.js';
import {CommunityHeader} from './CommunityHeader/communityheader.js';
import {CommunityDescription} from './CommunityDescription/communitydescription.js';
import {CommunityMembers} from './CommunityMembers/communitymembers.js';
import {UserSection} from './UserSection/usersection.js';
import {CommunityOptions} from './CommunityOptions/communityoptions.js';


/**
 * Renders the community details.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetails() {
    return (
        <div className="mt-[16px] w-[312px]">
            <div className="overflow-visible break-words rounded-[4px] border-DEFAULT
            border-solid border-[var(--newRedditTheme-widgetColors-sidebarWidgetBorderColor)]
            bg-[var(--newRedditTheme-widgetColors-sidebarWidgetBackgroundColor)]
            fill-[var(--newRedditTheme-bodyText)] text-[var(--newRedditTheme-bodyText)]">
                <div className='box-border max-h-none w-[310px] p-[12px]'>
                    <CommunityCover/>
                    <CommunityHeader/>
                    <CommunityDescription/>
                    <CreationDetails/>
                    <div className="mt-[8px]" />
                    <hr className="mx-0
                    my-[16px] h-px border-none bg-[var(--newCommunityTheme-widgetColors-lineColor)]"/>
                    <CommunityMembers/>
                    <UserSection/>
                    <CommunityOptions/>
                </div>
            </div>
        </div>
    );
}
