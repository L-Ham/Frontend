import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../requests/routes.js';
import PropTypes from 'prop-types';
// write jsdoc

/**
 * LocationCustomization function component renders the location customization interface.
 * It provides options to customize the user's location for recommendations and feed.
 * The component allows users to specify a location to personalize their Reddit experience.
 *
 * @return {React.Component} A div container with location customization settings.
 */
export function LocationCustomization({id}) {
    const token = useSelector((state) => state.user.token);
    const [location, setLocation] = useState('');
    const [options, setOptions] = useState([
        {value: 'ZZ', text: 'Use approximate location (based on IP)'},
        {value: 'XZ', text: 'No location specified'},
        {value: 'AF', text: 'Afghanistan'},
        // Add other predefined options here...
    ]);
        /**
 * Asynchronously updates feed settings using a PATCH request.
 *
 * @param {Object} updatedSettings - The new settings to be updated.
 */
    async function handleUpdateLocation(updatedSettings) {
        try {
            await axiosInstance.patch(API_ROUTES.editLocation, updatedSettings, {
                headers: {Authorization: `Bearer ${token}`},
            });
            // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update Feed settings:', error);
        }
    }

    useEffect(() => {
        // write jsdoc

        /**
         * Asynchronously fetches the user's location settings using a GET request.
         * The location is used to customize recommendations and the feed.
         * The fetched location is stored in the component's state.
         *
         * @return {Promise<void>} A promise that resolves when the location is fetched.
         * @throws {Error} If the request fails or an error occurs during fetching.
         *
         *
         *
         * */
        async function fetchLocation() {
            try {
                const response = await axiosInstance.get(API_ROUTES.Location, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                const fetchedLocation = response.data.location; // Assuming this is the format of the response
                setLocation(fetchedLocation);

                // Check if the fetched location is already an option
                if (!options.some((option) => option.value === fetchedLocation)) {
                    setOptions((prevOptions) => [
                        ...prevOptions,
                        {value: fetchedLocation, text: fetchedLocation},
                    ]);
                }
            } catch (error) {
                console.error('Failed to fetch location settings:', error);
            }
        }

        fetchLocation();
    }, [token]);
    // write jsdoc

    /**
     * Handles the change in location selection by updating the component's state.
     * This function is called when the user selects a different location from the dropdown.
     *
     * @param {Event} event - The event object containing the new location value.
     *
     *
     * */
    function handleChangeLocation(event) {
        const newLocation = event.target.value;
        setLocation(newLocation);
        handleUpdateLocation({'location': location.location});
        // Here, handle updating the server with the new location if needed
    }

    return (
        <div className='mb-8 flex flex-row flex-wrap' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mr-2 flex max-w-[80%] flex-col">
                <label htmlFor="lang" className="mb-1 flex text-base font-medium leading-5
                text-[color:var(--newCommunityTheme-bodyText)]">
                    Location customization
                </label>
                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">
                    Specify a location to customize your recommendations and feed.
                </p>
            </div>
            <div className='mb-4 w-0 basis-full'></div>
            <div className='mb-8 flex flex-row flex-wrap pl-8'>
                <span className='relative inline border border-solid border-transparent
                     bg-[0] fill-[var(--newCommunityTheme-button)] text-[color:var(--newCommunityTheme-button)]'>
                    <select id="lang" value={location} onChange={handleChangeLocation}
                        className="appearance-none pl-1 pr-5 text-base font-medium leading-5
                    hover:bg-[var(--newCommunityTheme-buttonAlpha05)]" style={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                        }}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>{option.text}</option>
                        ))}
                    </select>
                </span>
            </div>
        </div>
    );
}

LocationCustomization.propTypes = {
    id: PropTypes.string,
};
