import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance} from '../../../../../requests/axios';
import {API_ROUTES} from '../../../../../requests/routes';


/**
 * DoubleDropZone component to display two drop zones for uploading images
 * @param {object} props - The props of the component
 * @param {string} id - The ID of the component
 * @return {JSX.Element} - The JSX element of the component
 * @component
 * @example
 * return (
 *  <DoubleDropZone />
 * )
 *
*
 *
 * */
function DoubleDropZone(props, id) {
    // State to store the uploaded image URLs
    const [leftImage, setLeftImage] = useState(null);
    const [rightImage, setRightImage] = useState(null);
    /**
     * Asynchronously updates feed settings using a PATCH request.
     *
     * @param {Object} bannerImage - The new settings to be updated.
     */
    async function handleUpdateAvatar(bannerImage) {
        const file = new FormData();
        file.append('file', bannerImage);
        console.log('banner image file', file);
        try {
            await axiosInstance.post(API_ROUTES.avatar, file, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update banner:', error);
        }
    }
    /**
     * Asynchronously updates feed settings using a PATCH request.
     *
     * @param {Object} bannerImage - The new settings to be updated.
     */
    async function handleUpdateBanner(bannerImage) {
        const file = new FormData();
        file.append('file', bannerImage);
        console.log('banner image file', file);
        try {
            await axiosInstance.post(API_ROUTES.banner, file, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update banner:', error);
        }
    }

    useEffect(() => {
        /**
         * ProfileSettings function component renders the profile customization settings.
         *
         * @return {React.Component} A div container with settings to customize the user's profile.
         */
        async function fetchBanner() {
            try {
                const response = await axiosInstance.get(API_ROUTES.banner);
                // Directly use response.data since it matches the expected structure
                setRightImage(response.data.url);


                // setBanner(response.data);
            } catch (error) {
                console.error('Failed to fetch banner:', error);
            }
        }
        /**
         * ProfileSettings function component renders the profile customization settings.
         *
         * @return {React.Component} A div container with settings to customize the user's profile.
         */
        async function fetchAvatar() {
            try {
                const response = await axiosInstance.get(API_ROUTES.avatar);
                // Directly use response.data since it matches the expected structure
                setLeftImage(response.data.url);


                // setBanner(response.data);
            } catch (error) {
                console.error('Failed to fetch banner:', error);
            }
        }

        fetchBanner();
        fetchAvatar();
    }, []);

    /**
 * Prevents the default action and updates the left image state based on dropped files.
 *
 * @param {Event} event - The drag and drop event for the left drop zone.
 */
    function handleLeftDrop(event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        updateImageFromFile(files, setLeftImage);
        handleUpdateAvatar(event.dataTransferfiles[0]);
    }

    /**
 * Prevents the default action and updates the right image state based on dropped files.
 *
 * @param {Event} event - The drag and drop event for the right drop zone.
 */
    function handleRightDrop(event) {
        event.preventDefault();

        const files = event.target.files;
        updateImageFromFile(files, setRightImage);

        handleUpdateBanner(event.dataTransferfiles[0]);
    }

    /**
 * Updates the image state from file input changes.
 *
 * @param {FileList} files - The list of files selected by the user.
 * @param {Function} setImage - The state setter function for updating the image.
 */
    function updateImageFromFile(files, setImage) {
        if (files.length > 0) {
            setImage(URL.createObjectURL(files[0]));
        }
    }

    /**
 * Handles changes to the left file input by updating the image state.
 *
 * @param {Event} event - The input change event for the left input.
 */
    function handleLeftChange(event) {
        updateImageFromFile(event.target.files, setLeftImage);
        handleUpdateAvatar(event.target.files[0]);
    }

    /**
 * Handles changes to the right file input by updating the image state.
 *
 * @param {Event} event - The input change event for the right input.
 */
    function handleRightChange(event) {
        updateImageFromFile(event.target.files, setRightImage);

        handleUpdateBanner(event.target.files[0]);
    }

    /**
 * Renders an overlay icon using the SVGComponent with adjusted styles for positioning.
 *
 * @return {JSX.Element} The overlay icon component.
 */
    function OverlayIcon() {
        return (
            <div className="absolute bottom-2 right-2 box-border flex
            size-9 items-center justify-center">
                <SVGComponent style={{width: '100%', height: '100%'}} />
            </div>
        );
    }


    return (
        <div className='flex h-[120px]'>
            <div className='relative my-0 ml-0 mr-3 h-full w-[120px]'>
                <label className="box-border flex size-full cursor-pointer flex-col
                 items-center justify-center rounded-lg border border-dashed
                  border-[#d7d7d7] bg-[color:var(--newCommunityTheme-field)] p-1 text-center"
                onDrop={handleLeftDrop} onDragOver={(e) => e.preventDefault()}>
                    {leftImage ?
                        <>
                            <img src={leftImage} alt="Uploaded Avatar"
                                className="size-full rounded-lg object-cover" />
                            <OverlayIcon />
                        </> :
                        <>
                            <SVGComponent />
                            <div className="text-[11px] text-[color:var(--newRedditTheme-metaText)]">
                                <span className="text-[color:var(--newRedditTheme-button)]">Drag and Drop or Upload
                                    <span className="font-bold"> Avatar
                                    </span>
                                    Image
                                </span>
                            </div>
                        </>
                    }
                    <input id = {'im1' + id} type="file" accept="image/x-png,image/jpeg"
                        className="hidden" onChange={handleLeftChange}/>
                </label>
            </div>
            <div className="relative m-0 h-full w-[412px]">
                <label id = {'im2' + id} className="box-border flex size-full cursor-pointer
                 flex-col items-center justify-center rounded-lg border border-dashed
                  border-[#d7d7d7] bg-[color:var(--newCommunityTheme-field)] p-1 text-center"
                onDrop={handleRightDrop} onDragOver={(e) => e.preventDefault()}>
                    {rightImage ?
                        <>
                            <img src={rightImage} alt="Uploaded Banner"
                                className="size-full rounded-lg object-cover" />
                            <OverlayIcon />
                        </> :
                        <>
                            <SVGComponent />
                            <div className="text-[11px] text-[color:var(--newRedditTheme-metaText)]">
                                <span className="text-[color:var(--newRedditTheme-button)]">Drag and Drop or Upload
                                    <span className="font-bold"> Banner
                                    </span>
                                    Image
                                </span>
                            </div>
                        </>
                    }
                    <input id = {'im3' + id} type="file" accept="image/x-png,image/jpeg"
                        className="hidden" onChange={handleRightChange}/>
                </label>
            </div>
        </div>
    );
}

/**
 * DoubleDropZone component to display two drop zones for uploading images
 * @param {object} props - The props of the component
 * @return {JSX.Element} - The JSX element of the component
 * @component
 * @example
 * return (
 *  <DoubleDropZone />
 * )
 *

 *
 * */
function SVGComponent({style}) {
    return (
        <div className=" -mt-2 mb-1" style={style}>
            <svg className="size-9 fill-[var(--newRedditTheme-button)]
            stroke-[color:var(--newRedditTheme-button)]" viewBox="0 0 36 36" version="1.1">
                <circle cx="18" cy="18" fill="#fff" r="17.5" stroke="inherit"></circle>
                <path clipRule="evenodd" d="m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2
                1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2
                1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z"
                fill="inherit" fillRule="evenodd">

                </path>
            </svg>
        </div>
    );
}

SVGComponent.propTypes = {
    style: PropTypes.object,
};

DoubleDropZone.propTypes = {
    id: PropTypes.string,
};

export {DoubleDropZone};
