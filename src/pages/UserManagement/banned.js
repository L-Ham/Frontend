/* eslint-disable no-unused-vars */

import React, {Fragment, useState} from 'react';
import {Betterban} from './betterban';
import {Banneduserentry} from './banneduserentry';
import PropTypes from 'prop-types';
import {useEffect} from 'react';

import {axiosInstance as axios} from '../../requests/axios';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';
/**
 *
 *
 * @return  {JSX.Element} UserHelp
 */
function Banned({name}) {
    const {addNotification} = useNotifications();
    const [isbanPressed, setIsbanPressed] = useState(false);
    const [isxclicked, setIsxclicked] = useState(false);
    const [usersearch, setUsersearch] = useState('');
    const [search, setSearch] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [banname, setBanname] = useState('');
    const [banned, setbanned] = useState([]);


    // eslint-disable-next-line no-unused-vars
    const hardcodedUsers = [
        {username: 'sherif', rules: ['spam'], modNotes: ['first warning']},
        {username: 'ahmed', rules: ['harassment'], modNotes: ['second warning']},
        {username: 'dina', rules: ['hate speech'], modNotes: ['third warning']},
        {username: 'adel', rules: ['violence'], modNotes: ['banned']},
        {username: 'wael', rules: ['other'], modNotes: ['banned']},
    ];

    const handlesearchchange = (event) => {
        setUsersearch(event.target.value);
        setSearch(false);
    };

    const handlesearch = () => {
        setSearch(true);
    };

    const handlebanClick = () => {
        setIsbanPressed(true);
        setIsxclicked(false);
    };

    const handlexclick = () => {
        setIsxclicked(true);
    };

    const handlebanname = (banname) => {
        setBanname(banname);
    };
    /**
     * @return {void}
     */
    async function getbanned() {
        try {
            const response = await axios.get(`/subreddit/users/banned?subredditName=${name}`);
            // If the API call is successful, update the state with the moderators' data
            setbanned(response.data.bannedUsers);

            // console.log(response);
            // console.log(banned);
            // console.log('getbannedapi');
        } catch (error) {
            // console.log(error);
        }
        // console.log(name);
    }
    useEffect(() => {
        // Call the Getmoderators function once when the component mounts
        getbanned();
    }, []);
    /**
     * @return {void}
     */
    async function handlenewban() {
        getbanned();
    }
    /**
     * @return {void}
     */
    async function handlenewunbanned() {
        getbanned();
    }

    return (
        <Fragment>
            {isbanPressed && !isxclicked && <Betterban name={name}
                onxclick={handlexclick} banname={handlebanname} labeltext={'Ban'} onaddban={handlenewban}/>}
            <div className="static left-[280px] right-0 top-[89px]
             z-[3] mb-2 flex h-12 flex-row items-center justify-end pr-0 ">
                <button role="button" tabIndex="0" className="relative
                box-border flex min-h-[32px] w-auto min-w-[32px] items-center
                 justify-center rounded-full border-[none] bg-[#0079d3] fill-white px-4
                 py-1 text-center text-sm font-bold leading-[17px] tracking-[unset]
                  text-white" onClick={handlebanClick}>
                    Ban user
                </button>
            </div>
            <div className="box-border flex flex-row items-center justify-between
            rounded-[4px_4px_0_0] bg-[var(--newCommunityTheme-body)] px-4 py-2">
                <div className="flex">
                    <input type="text" className="box-border h-8 w-[248px] rounded-[4px_0_0_4px]
                    border border-solid border-[#878a8c] bg-[var(--newCommunityTheme-body)] p-2
                    text-[var(--color-neutral-content)]"
                    placeholder="Search for a user" value={usersearch} onChange={handlesearchchange} />
                    <button className="h-8 w-10 rounded-[0_4px_4px_0] bg-[#878A8C] pl-3" onClick={handlesearch}>
                        <svg className="size-4 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.59,13.91l2.78,2.69a1.25,1.25,0,1,
                            1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,
                            5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="border border-solid border-[#EDEFF1]">
                <div data-scroller-first>
                    {banned && banned.map((user, index) => (
                        (search && usersearch === user.userName) || !search ? (
                            <Banneduserentry
                                key={index}
                                username={user.userName}
                                imageurl={user.avatarImage}
                                rules={user.reasonForBan}
                                modNotes={user.modNote}
                                name={name}
                                timestamp={user.bannedAt}
                                onnewunbanned={handlenewunbanned}


                            />
                        ) : null
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

Banned.propTypes = {
    name: PropTypes.string,


};

export {Banned};
