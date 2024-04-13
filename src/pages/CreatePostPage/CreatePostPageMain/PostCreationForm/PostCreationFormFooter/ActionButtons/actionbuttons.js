import React, {useState} from 'react';
import {usePostCreation} from '../../postcreationcontext.js';
import {ErrorMessage} from '../../PostCreationFormWorkspace/ErrorMessage/errormessage.js';
import './actionbuttons.css';

/**
 * Renders the actions buttons.
 * @return {JSX.Element} The rendered component.
 */
export function ActionButtons() {
    const {activeTab, setFiles} = usePostCreation();

    const handleSaveDraft = () => {
        alert('not supported yet :)');
    };

    const handleCancel = () => {
        setFiles([]);
    };

    const handlePost = () => {
        // TODO: implement
    };

    // secondary button
    const handleClick = activeTab === 'img' ? handleCancel : handleSaveDraft;
    const btnText = activeTab === 'img' ? 'Cancel' : 'Save Draft';

    const [errorMessage, setErrorMessage] = useState('');
    return (
        <div className="relative mt-[8px] w-full ">
            <div className="flex flex-row-reverse items-center justify-between">
                <div className="flex flex-row-reverse items-center pt-[8px]">
                    <div className="box-border flex min-[189px]:ml-[8px]">
                        <button className="post-creation-form-footer__primaryBtn font relative
                        box-border flex min-h-[32px]
                        w-full min-w-[32px] cursor-pointer items-center justify-center rounded-full
                        border-none bg-[color:var(--newCommunityTheme-button)]
                         fill-[color:var(--newCommunityTheme-body)]
                        px-[16px] py-[4px] text-center align-middle text-[14px]/[17px] font-[700] tracking-[unset]
                        text-[color:var(--newCommunityTheme-body)]"
                        onClick={handlePost}>
                            Post
                        </button>
                    </div>
                    <div className="box-border flex min-[189px]:ml-[8px]">
                        <button className="post-creation-form-footer__borderedBtn font relative box-border flex
                            min-h-[32px] min-w-[32px] cursor-pointer items-center justify-center
                            rounded-full
                            border-solid border-[color:var(--newCommunityTheme-button)]
                            bg-transparent
                            fill-[color:var(--newCommunityTheme-button)] p-[4px_16px]
                            text-[14px]/[17px] font-[700] text-[color:var(--newCommunityTheme-button)]"
                        style={{borderWidth: '1px'}}
                        onClick={handleClick}>
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            {errorMessage && <ErrorMessage errorMessage={errorMessage}
                setErrorMessage={setErrorMessage} position='end'/> }
        </div>
    );
}
