import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap.js';
import './addfiles.css';
import {classes} from './addfiles.styles.js';
import {useAddFiles} from './addfiles.hooks.js';


/**
 * Adds an image to the post.
 * @param {Object} props The component props.
 * @return {JSX.Element} The rendered component.
 */
export function AddFiles() {
    const {fileInputRef, handleButtonClick, handleFileChange} = useAddFiles();
    const PlusV2Icon = getIconComponent('plus-v2', true);

    return (
        <span className={classes.addFilesSpan}>
            <span
                className={classes.addFilesSpan2}
                style={{borderWidth: '1px'}}
            >
                <input
                    ref={fileInputRef}
                    accept="image/png,image/gif,image/jpeg,image/webp"
                    className={classes.addFilesInput}
                    multiple={true}
                    type="file"
                    onChange={handleFileChange}
                />
                <button
                    className={classes.addFilesButton}
                    onClick={handleButtonClick}
                >
                    <PlusV2Icon className={classes.addFilesIcon}/>
                </button>
            </span>
        </span>
    );
}

AddFiles.propTypes = {
    setPostBody: PropTypes.func.isRequired,
};

