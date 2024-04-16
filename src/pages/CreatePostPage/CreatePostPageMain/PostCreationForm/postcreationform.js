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
            <div className={classes.postCreationFormDiv} data-testid="post-creation-form-div">
                <PostCreationFormTabs data-testid="post-creation-form-tabs" />
                <PostCreationFormWorkspace data-testid="post-creation-form-workspace" />
                <PostCreationFormFooter data-testid="post-creation-form-footer" />
                <PostCreationFormSharingOptions data-testid="post-creation-form-sharing-options" />
            </div>
        </PostCreationProvider>
    );
}

