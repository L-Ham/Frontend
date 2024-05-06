import React from 'react';
import {AppBar} from '../layouts/Header/appbar';

import {Modsidebar} from '../layouts/modsidebar/modsidebar.js';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {Modonly} from '../pages/UserManagement/modonly.js';
import {axiosInstance as axios} from '../requests/axios.js';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';


/**
 * Layout with navigation component
 * @component
 * @param {object} props - The component props. Used to pass children
 * @example
 * // Render the layout with navigation
 * <LayoutWithNavigation>
 *  children
 * </LayoutWithNavigation>
 * @return {JSX.Element} The layout with navigation component
 * */
function Modlayout(props) {
    const [isamod, setisamod] = useState(false);
    const username = useSelector((state) => state.user.username);
    const [moderators, setModerators] = useState([]);
    const {name} = useParams();
    /**
     * @return {void}
     */
    async function getmoderators() {
        try {
            const response = await axios.get(`/subreddit/moderators?subredditName=${name}`);
            // If the API call is successful, update the state with the moderators' data
            setModerators(response.data.moderators);
            console.log(response);
            console.log(moderators);
            console.log('get mods in usermanagement');
        } catch (error) {
            console.log(error);
        }
        console.log(name);
    }
    useEffect(() => {
        // Call the Getmoderators function once when the component mounts
        getmoderators();
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
    useEffect(() => {
        // Check if the moderators array has been set and then set isamod accordingly
        if (moderators.length > 0) {
            moderators.forEach((moderator) => {
                if (moderator.userName === username) {
                    setisamod(true);
                }
            });
        }
        console.log('is a mod', isamod);
    }, [moderators, username]);
    return (
        <>
            {isamod && <div className='flex justify-evenly pt-[56px]'>
                <div id='header-container' className='fixed inset-x-0 top-0 z-[4] nd:visible'>
                    <AppBar />


                </div>
                <div className='grid  w-full grid-cols-1 overflow-x-clip
                bg-[var(--color-neutral-background)] nd:grid-cols-[272px_1fr] '>
                    <div id='sidebar-container' className='isolate z-[1] order-first hidden nd:block '>
                        <Modsidebar name={name} />
                    </div>
                    <div id='main-container' className='block w-full flex-col'>
                        {props.children}
                    </div>
                </div>
            </div>
            }
            {!isamod && <Modonly />}
        </>
    );
}

Modlayout.propTypes = {
    children: PropTypes.node,
};

export {Modlayout};
