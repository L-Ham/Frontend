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
        <div className={classes.postTagsDiv}>
            <div className={classes.postTagsInnerDiv}>
                {tags.map((tag) => (
                    <PostTag key={tag} tag={tag}
                        setPostTags={setPostTags} isActive={postTags.includes(tag)}/>
                ))}
            </div>
        </div>
    );
}

