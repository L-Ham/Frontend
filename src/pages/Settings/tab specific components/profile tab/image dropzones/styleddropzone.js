import React, {useCallback} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {useDropzone} from 'react-dropzone';
import {Box, IconButton, Typography} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    const onDrop = useCallback((acceptedFiles) => {
        props.onFileUpload(acceptedFiles);
    }, [props]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*',
    });

    return (
        <Box {...getRootProps()} sx={{
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            p: '20px',
            mt: '20px',
            mb: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#fafafa',
        }}>
            <input {...getInputProps()} />
            <IconButton color="primary" component="span">
                <AddCircleOutlineIcon style={{fontSize: '50px'}} />
            </IconButton>
            <Typography color="blue">
                Drag and drop or click to select a file
            </Typography>
        </Box>
    );
}

// Define prop types for the StyledDropZone component
StyledDropZone.propTypes = {
    onFileUpload: PropTypes.func.isRequired, // Define onFileUpload as a required function
};

export {StyledDropZone};
