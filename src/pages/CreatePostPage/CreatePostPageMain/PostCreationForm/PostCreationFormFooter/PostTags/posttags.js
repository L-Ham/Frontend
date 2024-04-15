import React from 'react';
import {PostTag} from './PostTag/posttag.js';
import './posttags.css';
import {usePostCreation} from '../../postcreationcontext.js';

/**
 * Renders the post types..
 * @return {JSX.Element} The rendered component.
 */
export function PostTags() {
    const {setPostTags, postTags} = usePostCreation();
    const tags = ['OC', 'SPOILER', 'NSFW'];

    return (
        <div className="flex min-w-0 max-w-full flex-col flex-nowrap ">
            <div className="flex max-w-[530px] flex-row flex-wrap items-center">
                {tags.map((tag) => (
                    <PostTag key={tag} tag={tag}
                        setPostTags={setPostTags} isActive={postTags.includes(tag)}/>
                ))}
            </div>
        </div>
    );
}

