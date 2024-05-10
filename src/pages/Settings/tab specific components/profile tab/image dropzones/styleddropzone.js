import React, {useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
// import {useDropzone} from 'react-dropzone';
// import {Box, IconButton, Typography} from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
/**
 * A styled drop zone component for file uploads, specifically designed for image files.
 * Utilizes `react-dropzone` for drag-and-drop functionality, with customization options
 * provided by MUI components. When files are dropped or selected, the component calls
 * `onFileUpload` prop with the accepted files.
 *
 * @param {Object} props - Component props.
 * @param {function} props.onFileUpload - Callback function that gets executed with the
 * accepted files upon file drop or selection.
 * @return {React.ReactElement} The styled drop zone component.
 */
function StyledDropZone(props) {
    // const onDrop = useCallback((acceptedFiles) => {
    //     props.onFileUpload(acceptedFiles);
    // }, [props]);

    // const {getRootProps, getInputProps} = useDropzone({
    //     onDrop,
    //     accept: 'image/*',
    // });
    const UploadIcon = getIconComponent('upload', false);
    const [isOver, setIsOver] = useState(false);
    return (
        <div className='m-0 h-full w-[412px]'>
            <label className={`box-border flex size-full cursor-pointer flex-col items-center justify-center
            rounded-lg
            border border-dashed border-[#d7d7d7] 
            ${isOver ? 'bg-[var(--newCommunityTheme-body)]':'bg-[var(--newCommunityTheme-field)]'}
             p-1 text-center`}
            // set style for label bg color white
            onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOver(true);
            }}
            onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOver(false);
            }}
            onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // console.log(e.dataTransfer.files);
            }}
            >
                <div className='-mt-2 mb-1'>
                    <UploadIcon />
                </div>
                <div className='text-[11px] text-[color:var(--newRedditTheme-metaText)]'>
                    <span className='text-[var(--newRedditTheme-button)]'>
                        Drag and drop
                        <span className='font-bold'>{' '}Banner{' '}</span>
                        Image
                    </span>
                </div>
                <div className='hidden'>
                    <input
                        className='text-sm font-normal leading-[21px]'
                        name='ProfileBanner'
                        type='file'
                        accept='image/x-png,image/jpeg'
                    />
                </div>
            </label>
        </div>
    );
}

// Define prop types for the StyledDropZone component
StyledDropZone.propTypes = {
    onFileUpload: PropTypes.func.isRequired, // Define onFileUpload as a required function
};

export {StyledDropZone};
