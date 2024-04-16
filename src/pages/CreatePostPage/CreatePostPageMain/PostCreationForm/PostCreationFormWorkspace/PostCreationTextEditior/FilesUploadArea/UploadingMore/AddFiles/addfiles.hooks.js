
import {useRef} from 'react';
import {usePostCreation} from '../../../../../postcreationcontext.js';

export const useAddFiles = () => {
    const {setFiles} = usePostCreation();
    const fileInputRef = useRef();

    /**
     * Simulates a button click to open the file input dialog.
     */
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    /**
     * Handles file selection and updates the context state with new files.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event from the file input.
     */
    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        const filesToAdd = newFiles.map((file) => file);

        // Update context state to include new files
        setFiles((prevState) => [...prevState, ...filesToAdd]);
    };

    return {
        fileInputRef,
        handleButtonClick,
        handleFileChange,
    };
};
