import React, {useState} from 'react';
import {usePostCreation} from '../postcreationcontext.js';
import {PostCreationTextEditor} from './PostCreationTextEditior/postcreationtexteditor.js';
import {ErrorMessage} from './ErrorMessage/errormessage.js';

/**
 * Renders the workspace for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormWorkspace() {
    const {postTitle, setPostTitle} = usePostCreation();
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="p-[16px]">
            <div className='mb-[8px]'>
                <div className='relative'>
                    <textarea
                        maxLength={300}
                        placeholder="Title"
                        className={`box-border block h-[39px]
                         w-full
                        resize-none overflow-hidden
                        break-words rounded-[4px] border-solid
                        focus:border-[var(--newCommunityTheme-navIcon)]
                        ${errorMessage ? '!border-[red]' : 'border-[color:var(--newCommunityTheme-line)]'}
                        bg-transparent
                        p-[8px_68px_8px_16px] text-[color:var(--newRedditTheme-bodyText)]
                        caret-[color:var(--newRedditTheme-bodyText)] outline-none`}
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
                    <div className="pointer-events-none absolute bottom-[12px] right-[12px] text-[10px]/[12px]
                    font-[700] uppercase tracking-[0.5px] text-[var(--newCommunityTheme-actionIcon)]">
                        {postTitle.length}{/* */}/{/* */}300
                    </div>
                </div>
                {errorMessage && <ErrorMessage errorMessage={errorMessage}/> }
            </div>
            <PostCreationTextEditor/>
        </div>
    );
}

