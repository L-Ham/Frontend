import React from 'react';
import {PostTag} from './PostTag/posttag.js';
import './posttags.css';
import {usePostCreation} from '../../postcreationcontext.js';
import {classes} from './posttags.styles.js';

/**
 * Renders the post types..
 * @return {JSX.Element} The rendered component.
 */
export function PostTags() {
    const {setPostTags, postTags} = usePostCreation();
    const tags = ['OC', 'SPOILER', 'NSFW'];

    return (
        <div className={classes.postTagsDiv} data-testid="post-tags-div">
            <div className={classes.postTagsInnerDiv} data-testid="post-tags-inner-div">
                {tags.map((tag, index) => (
                    <PostTag key={tag} tag={tag}
                        setPostTags={setPostTags} isActive={postTags.includes(tag)} data-testid={`post-tag-${index}`}/>
                ))}
            </div>
        </div>
    );
}

