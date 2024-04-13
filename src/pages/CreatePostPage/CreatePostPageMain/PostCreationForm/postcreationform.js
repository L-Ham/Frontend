/* eslint-disable no-unused-vars*/
import React, {useState} from 'react';
import {PostCreationFormFooter} from './PostCreationFormFooter/postcreationformfooter';
import {PostCreationFormSharingOptions} from './PostCreationFormSharingOptions/postcreationformsharingoptions';
import {PostCreationFormTabs} from './PostCreationFormTabs/postcreationformtabs';
import {PostCreationFormWorkspace} from './PostCreationFormWorkspace/postcreationformworkspace';
import {PostCreationProvider} from './postcreationcontext';


/**
 * Renders the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationForm() {
    return (
        <PostCreationProvider>
            <div className='mb-[15px] rounded-[5px] bg-[var(--newRedditTheme-post)]'>
                <PostCreationFormTabs />
                <PostCreationFormWorkspace />
                <PostCreationFormFooter />
                <PostCreationFormSharingOptions />
            </div>
        </PostCreationProvider>
    );
}

