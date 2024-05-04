import {useRef, useState} from 'react';
import {usePostCreation} from '../../../../postcreationcontext.js';
import {useNotifications} from '../../../../../../../../generic components/Notifications/notificationsContext.js';

export const useFirstUpload = () => {
    const {setFiles} = usePostCreation();
    const fileInputRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const {addNotification} = useNotifications();

    /**
     * Simulates a button click to open the file input dialog.
     */
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.files.length > 1) {
            addNotification({
                message: 'You can only upload one file at the first time.',
                type: 'error',
            });
            return;
        }
        const newFiles = Array.from(event.dataTransfer.files);
        if (newFiles.length > 0) {
            setFiles((prevState) => [...prevState, ...newFiles]);
        }
    };

    /**
     * Handles file selection and updates the context state with new files.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event from the file input.
     */
    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        if (newFiles.length > 0) {
            setFiles((prevState) => [...prevState, ...newFiles]);
        }
    };

    return {
        fileInputRef,
        handleButtonClick,
        handleFileChange,
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
        isDragging,
    };
};
