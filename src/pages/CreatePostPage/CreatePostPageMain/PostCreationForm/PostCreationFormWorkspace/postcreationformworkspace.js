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
        <div className={classes.postCreationFormWorkspaceDiv} data-testid="post-creation-form-workspace-div">
            <div className={classes.postCreationFormWorkspaceInnerDiv}
                data-testid="post-creation-form-workspace-inner-div">
                <div className={classes.postCreationFormWorkspaceRelativeDiv}
                    data-testid="post-creation-form-workspace-relative-div">
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
                        data-testid="post-creation-form-workspace-textarea"
                    />
                    <div className={classes.postCreationFormWorkspaceDiv2}
                        data-testid="post-creation-form-workspace-div2">
                        {postTitle.length}{/* */}/{/* */}300
                    </div>
                </div>
                {errorMessage && <ErrorMessage errorMessage={errorMessage} data-testid="error-message"/> }
            </div>
            <PostCreationTextEditor data-testid="post-creation-text-editor"/>
        </div>
    );
}

