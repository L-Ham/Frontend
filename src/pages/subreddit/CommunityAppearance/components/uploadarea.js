/* eslint-disable no-unused-vars*/
import React, {useEffect, useRef, useState} from 'react';
import {useSubreddit, fetchSubredditAbout} from '../../subredditcontext.js';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext.js';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import './uploadarea.css';


/**
 * Renders the community appearance settings.
 * @return {JSX.Element} The rendered component.
 * */
export function UploadArea() {
    const {isUploadBannerVisible, isUploadAvatarVisible, about, setAbout} = useSubreddit();
    const [isDragging, setIsDragging] = useState(false);
    const {addNotification} = useNotifications();

    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
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
        const file = event.dataTransfer.files[0];
        handleDragFileChange(file);
    };

    const handleDragFileChange = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
                // Move the submit into the onloadend to ensure the file is ready
                setTimeout(() => {
                    handleSubmit(file);
                }, 1000);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
                // Move the submit into the onloadend to ensure the file is ready
                setTimeout(() => {
                    handleSubmit(file);
                }, 1000);
            };
            reader.readAsDataURL(file);
        }
    };

    const refetchData = async () => {
        const subredditName = about.communityDetails.name;
        try {
            const aboutData = await fetchSubredditAbout(subredditName);
            setAbout(aboutData);
        } catch (error) {
            addNotification({type: 'error', message: error.response.data.message ||
            'Failed to fetch subreddit data, please try again later.'});
            throw error;
        }
    };


    const handleSubmit = async (file) => {
        try {
            if (!file) {
                throw new Error('No file provided');
            }

            const formData = new FormData();
            formData.append('subredditId', about.communityDetails.subredditId);
            formData.append('file', file, file.name);

            if (isUploadBannerVisible) {
                const data = await axios.post(API_ROUTES.subredditBanner, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else if (isUploadAvatarVisible) {
                const data = await axios.post(API_ROUTES.subredditAvatar, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            addNotification({type: 'success', message: 'Image uploaded successfully'});
            refetchData();
        } catch (error) {
            console.error('Failed to upload image', error);
            if (!error.response) {
                addNotification({type: 'failure', message: 'file is very big 8yr ya 7beby'});
                return;
            }
            addNotification({type: 'failure', message: error.response.data.message});
        }
    };

    return (
        <div className='mt-5' data-testid="upload-area">
            <div
                onClick={handleDivClick}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative box-border
        flex h-[115px] cursor-pointer items-center
        justify-center overflow-hidden rounded-[16px] bg-[var(--color-secondary-background)] p-5
        ${isDragging ? 'dragging' : ''}`}
                data-testid="drop-area"
            >
                {imageSrc ? (
                    <img src={imageSrc} alt="Selected" data-testid="selected-image" />
                ) : (
                    <div className="pointer-events-none
                flex
                flex-col items-center gap-2 text-[0.75rem]/[1rem] text-[var(--color-neutral-content-weak)]"
                    data-testid="placeholder-area"
                    >
                        <svg fill="currentColor" height="20"
                            viewBox="0 0 20 20" width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            data-testid="placeholder-svg"
                        >
                            <path d="m10.513 5.63 3.929 3.928-.884.884-2.933-2.933V19h-1.25V7.51l-2.933
                    2.932-.884-.884L9.67 5.446l.589-.029.254.212Zm5.859-1.482A6.876 6.876 0 0
                    0 10 0a6.876 6.876 0 0 0-6.372 4.148A4.639 4.639 0 0 0 0 8.625a4.716 4.716
                    0 0 0 4.792 4.625V12A3.465 3.465 0 0 1 1.25 8.625 3.412 3.412 0 0 1 4.189
                    5.31l.364-.06.123-.35A5.607 5.607 0 0 1 10 1.25a5.607 5.607 0 0
                    1 5.324 3.65l.123.348.364.06a3.412 3.412 0 0 1 2.939 3.317A3.465 3.465
                    0 0 1 15.208 12v1.25A4.716 4.716 0 0 0 20 8.625a4.639 4.639 0 0 0-3.628-4.477Z"></path>
                        </svg>
                        <span data-testid="placeholder-text">Drag and drop or browse your device</span>
                    </div>
                )}
            </div>
            <input
                ref={fileInputRef}
                type="file"
                className=""
                accept="image/x-png,image/jpeg,image/png"
                hidden={true}
                onChange={handleFileChange}
                data-testid="file-input"
            />
        </div>
    );
}

