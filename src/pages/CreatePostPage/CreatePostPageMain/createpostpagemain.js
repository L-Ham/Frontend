import React from 'react';
import {Header} from './Header/header.js';
import {CommunityOptionsList} from './CommunityOptionsList/communityoptionslist.js';
import {CommunityNote} from './CommunityNote/communitynote.js';
import {PostCreationForm} from './PostCreationForm/postcreationform.js';
import {classes} from './createpostpagemain.styles.js';


/**
 * Renders the sidebar for the create post page.
 * @return {JSX.Element} The rendered sidebar.
 */
export function CreatePostPageMain() {
    return (
        <div className={classes.mainDiv} data-testid="main-div">
            <div data-testid="inner-div" className='h-screen'>
                <Header numberDrafts={0} data-testid="header"/>
                <CommunityOptionsList data-testid="community-options-list"/>
                <CommunityNote data-testid="community-note"/>
                <PostCreationForm data-testid="post-creation-form"/>
            </div>

        </div>
    );
}

