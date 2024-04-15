/*eslint-disable*/
import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {usePostCreation} from '../../../../postcreationcontext.js';

/**
 * Renders the first image upload component.
 * @return {JSX.Element} The rendered component.
 */
export function FirstUpload() {
    const {setFiles} = usePostCreation();
    const fileInputRef = useRef();

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        const filesToAdd = [];
    
        newFiles.forEach((file) => {
            filesToAdd.push(file);
        });
        setFiles((prevState) => [...prevState, ...filesToAdd]);
    };
    


    return (
        <div className="relative">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/gif,image/jpeg,image/webp,video/mp4,video/quicktime"
                multiple={false}
                className="hidden cursor-default appearance-none overflow-hidden text-ellipsis
                whitespace-pre bg-[initial] text-start text-sm
                font-normal leading-[21px]
                text-[color:var(--newRedditTheme-bodyText)]
                caret-[color:var(--newRedditTheme-button)]"
                onChange={handleFileChange}
            />
            <div className="box-border flex min-h-[280px] flex-col flex-nowrap justify-center
            rounded border border-dashed border-[color:var(--newCommunityTheme-line)] text-center">
                <p className="text-[var(--newCommunityTheme-button)]">
                    Drag and drop images or{' '}
                    <button
                        role="button"
                        tabIndex={0}
                        className="post-creation-upload_btn font relative mx-2 my-2.5
                        box-border
                        inline-block
                        min-h-[32px] w-auto
                        min-w-[32px] cursor-pointer rounded-full border
                        border-solid border-[color:var(--newCommunityTheme-button)]
                        bg-transparent fill-[var(--newCommunityTheme-button)]
                        px-4 py-1 text-center text-sm font-bold leading-[18px]
                        tracking-[unset] text-[color:var(--newCommunityTheme-button)]"
                        onClick={handleButtonClick}
                    >
                        Upload
                    </button>
                </p>
            </div>
        </div>
    );
}

FirstUpload.propTypes = {
    setPostBody: PropTypes.func.isRequired,
};
