import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap.js';
import './addfiles.css';
import {usePostCreation} from '../../../../../postcreationcontext.js';


/**
 * Adds an image to the post.
 * @param {Object} props The component props.
 * @param {Function} props.setPostBody The post body setter.
 * @return {JSX.Element} The rendered component.
 */
export function AddFiles() {
    const {setFiles} = usePostCreation();
    const PlusV2Icon = getIconComponent('plus-v2', true);
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
        <span className='add-image mr-[8px]'>
            <span className="relative box-border
        flex
        size-[100px] cursor-pointer items-center justify-center rounded-[4px]
        border-dashed
        border-[color:var(--newCommunityTheme-line)] p-0 text-[13px]/[16px] decoration-[none]
        shadow-none transition-all duration-[0.3s]"
            style={{borderWidth: '1px'}} >
                <input
                    ref={fileInputRef}
                    accept="image/png,image/gif,image/jpeg,image/webp"
                    className="hidden text-[14px]/[21px]
                font-[400] text-[var(--newRedditTheme-bodyText)] caret-[var(--newRedditTheme-bodyText)]"
                    multiple={true}
                    type="file"
                    onChange={handleFileChange}
                />
                <button
                    className="flex h-[100px] w-full
                shrink-0
                items-center justify-center rounded-[4px]
                border-DEFAULT border-solid
                border-[color:var(--newCommunityTheme-placeholder)] bg-transparent"
                    onClick={handleButtonClick}
                >
                    <PlusV2Icon className='add-image__plus-icon content-box size-[36px] overflow-hidden

                opacity-80'/>
                </button>
            </span>
        </span>
    );
}

AddFiles.propTypes = {
    setPostBody: PropTypes.func.isRequired,
};

