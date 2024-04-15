import React from 'react';
import {Header} from './Header/header.js';
import {CommunityOptionsList} from './CommunityOptionsList/communityoptionslist.js';
import {CommunityNote} from './CommunityNote/communitynote.js';
import {PostCreationForm} from './PostCreationForm/postcreationform.js';

/**
 * Renders the sidebar for the create post page.
 * @return {JSX.Element} The rendered sidebar.
 */
export function CreatePostPageMain() {
    return (
        <div className='flex flex-[1_1_100%] min-[960px]:w-[640px] min-[960px]:max-w-[740px]'>
            <div>
                <Header numberDrafts={0}/>
                <CommunityOptionsList/>
                <CommunityNote/>
                <PostCreationForm/>
            </div>
        </div>
    );
}
