import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap.js';
import './addfiles.css';
import {classes} from './addfiles.styles.js';
import {useAddFiles} from './addfiles.hooks.js';


/**
 * Adds an image to the post.
 * @return {JSX.Element} The rendered component.
 */
export function AddFiles() {
    const {fileInputRef, handleButtonClick, handleFileChange} = useAddFiles();
    const PlusV2Icon = getIconComponent('plus-v2', true);

    return (
        <span className={classes.addFilesSpan} data-testid="add-files">
            <span
                className={classes.addFilesSpan2}
                style={{borderWidth: '1px'}}
                data-testid="add-files-span2"
            >
                <input
                    ref={fileInputRef}
                    accept="image/png,image/gif,image/jpeg,image/webp"
                    className={classes.addFilesInput}
                    multiple={true}
                    type="file"
                    onChange={handleFileChange}
                    data-testid="add-files-input"
                />
                <button
                    className={classes.addFilesButton}
                    onClick={handleButtonClick}
                    data-testid="add-files-button"
                >
                    <PlusV2Icon className={classes.addFilesIcon} data-testid="add-files-icon"/>
                </button>
            </span>
        </span>
    );
}

