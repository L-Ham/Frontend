import React, {useState} from 'react';
import {usePostCreation} from '../postcreationcontext.js';
import {PostCreationTextEditor} from './PostCreationTextEditior/postcreationtexteditor.js';
import {ErrorMessage} from './ErrorMessage/errormessage.js';
import {classes} from './postcreationformworkspace.styles.js';

/**
 * Renders the workspace for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormWorkspace() {
    const {postTitle, setPostTitle} = usePostCreation();
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className={classes.postCreationFormWorkspaceDiv}>
            <div className={classes.postCreationFormWorkspaceInnerDiv}>
                <div className={classes.postCreationFormWorkspaceRelativeDiv}>
                    <textarea
                        maxLength={300}
                        placeholder="Title"
                        className={`${classes.postCreationFormWorkspaceTextarea} 
                    ${errorMessage ? '!border-[red]' :
            'border-[color:var(--newCommunityTheme-line)]'}`}
                        rows={1}
                        style={{overflowX: 'hidden', overflowWrap: 'break-word', height: 39, borderWidth: '1px'}}
                        defaultValue={''}
                        onChange={(e) => setPostTitle(e.target.value)}
                        onBlur={() => {
                            if (postTitle.length < 10) {
                                setErrorMessage('This community requires title to be at least 10 characters');
                                return;
                            }
                            setErrorMessage('');
                        }}
                    />
                    <div className={classes.postCreationFormWorkspaceDiv2}>
                        {postTitle.length}{/* */}/{/* */}300
                    </div>
                </div>
                {errorMessage && <ErrorMessage errorMessage={errorMessage}/> }
            </div>
            <PostCreationTextEditor/>
        </div>
    );
}

