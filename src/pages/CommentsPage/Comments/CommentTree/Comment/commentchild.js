import React from 'react';
import {Comment} from './comment';
import uuid from 'react-uuid';


/**
 * Renders CommentChild Component
 * @param {object} props - The props for the CommentChild component.
 * @return {JSX.Element} The rendered CommentChild component.
 */
export function CommentChild(
    props,
) {
    console.log(props);
    return (
        <Comment key={uuid()} {...props}/>
    );
}
