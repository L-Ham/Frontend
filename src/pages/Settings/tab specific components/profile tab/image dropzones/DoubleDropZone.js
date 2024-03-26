import React from 'react';
import {Box} from '@mui/material';
import {StyledDropZone} from './StyledDropZone';

/**
 * DoubleDropZone component renders two drop zones side by side for file upload.
 * Each drop zone handles file uploads independently, with separate logic for handling
 * files dropped on the left and right zones respectively.
 *
 * @param {Object} props The props passed to the DoubleDropZone component.
 * @return {JSX.Element} The rendered DoubleDropZone component.
 */
function DoubleDropZone(props) {
    /**
     * Handles file uploads for the left drop zone. Logs the names of the files uploaded.
     *
     * @param {Array<File>} files An array of files dropped on the left drop zone.
     */
    function handleFileUploadLeft(files) {
        console.log('Left drop zone files:', files.map((file) => file.name));
    }

    /**
     * Handles file uploads for the right drop zone. Logs the names of the files uploaded.
     *
     * @param {Array<File>} files An array of files dropped on the right drop zone.
     */
    function handleFileUploadRight(files) {
        console.log('Right drop zone files:', files.map((file) => file.name));
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'stretch',
            gap: 2, // this is for the gap between the 2
            justifyContent: 'space-between',
        }}>
            <StyledDropZone onFileUpload={handleFileUploadLeft} sx={{flexBasis: 'calc(50% - 1rem)'}} />
            <StyledDropZone onFileUpload={handleFileUploadRight} sx={{flexBasis: 'calc(50% - 1rem)'}} />
        </Box>
    );
}

export {DoubleDropZone};
