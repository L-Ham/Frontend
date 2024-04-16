/* eslint-disable no-unused-vars*/
import React, {useState} from 'react';
import {PostCreationFormFooter} from './PostCreationFormFooter/postcreationformfooter';
import {PostCreationFormSharingOptions} from './PostCreationFormSharingOptions/postcreationformsharingoptions';
import {PostCreationFormTabs} from './PostCreationFormTabs/postcreationformtabs';
import {PostCreationFormWorkspace} from './PostCreationFormWorkspace/postcreationformworkspace';
import {PostCreationProvider} from './postcreationcontext';
import {classes} from './postcreationform.styles';


/**
 * Renders the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationForm() {
    return (
        <PostCreationProvider>
            <div className={classes.postCreationFormDiv}>
                <PostCreationFormTabs />
                <PostCreationFormWorkspace />
                <PostCreationFormFooter />
                <PostCreationFormSharingOptions />
            </div>
        </PostCreationProvider>
    );
}

