import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';

export const useSidebody = () => {
    const user = useSelector((state) => state.user);
    // Correctly destructure useState return value
    const [links, setlinks] = useState([]);

    useEffect(() => {
        const fetchlinks = async () => {
            const links = await fetchProfileSettings();
            setlinks(links); // Correctly use setlinks to update state
            return links;
        };
        fetchlinks();
    }, [user.token]);

    const fetchProfileSettings = async () => {
        try {
            const response = await axios.get(API_ROUTES.profileSettings);
            return response.data.profileSettings.socialLinks;
        } catch (e) {
            console.error(e);
        }
    };
    return {
        links,
    };
};
