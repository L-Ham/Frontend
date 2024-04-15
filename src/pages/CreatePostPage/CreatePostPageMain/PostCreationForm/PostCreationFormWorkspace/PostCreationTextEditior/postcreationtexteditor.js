import React, {useState} from 'react';
import {ErrorMessage} from '../ErrorMessage/errormessage.js';
import {PostCreationTextArea} from './PostCreationTextArea/postcreationtextarea.js';
import {FilesUploadArea} from './FilesUploadArea/filesuploadarea.js';
import {PostCreationLinkArea} from './PostCreationLinkArea/postcreationlinkarea.js';
import {PostCreationPollArea} from './PostCreationPollArea/postcreationpollarea.js';
import {Toolbar} from './Toolbar/toolbar.js';
import {usePostCreation} from '../../postcreationcontext.js';

/**
 * Renders the text editor for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationTextEditor() {
    const {activeTab} = usePostCreation();
    const [errorMessage, setErrorMessage] = useState('');
    const [borderColor, setBorderColor] = useState('border-[color:var(--newCommunityTheme-line)]');
    return (
        <div>
            <div className={`relative`}>
                <div tabIndex="0"
                    className={`relative rounded-[4px] border-solid 
                    ${borderColor}  bg-[var(--newRedditTheme-post)] text-[red]`}
                    style={activeTab !== 'link' ? {borderWidth: '1px'} : {}}>
                    {(activeTab == 'post' || activeTab == 'poll') && <Toolbar/>}
                    <div><div className="absolute z-[100] text-[color:var(--newCommunityTheme-bodyText)]"></div></div>
                    {(activeTab == 'post' || activeTab == 'poll') && <PostCreationTextArea
                        setBorderColor={setBorderColor}/>}
                    {activeTab == 'img' && <FilesUploadArea/>}
                    {activeTab == 'link' && <PostCreationLinkArea/>}
                    <div className="absolute left-[-23px]
        top-[190px]
         z-[100] text-[color:var(--newCommunityTheme-bodyText)]"></div>
                </div>
            </div>
            {activeTab == 'poll' && <PostCreationPollArea/>}
            {errorMessage && <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage}/> }
        </div>
    );
}
