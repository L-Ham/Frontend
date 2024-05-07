/* eslint-disable no-unused-vars */

import React from 'react';
import {useState} from 'react';
import {Banned} from './banned';
import {Moderators} from './moderators';
import {Muted} from './muted';
import {Approved} from './approved';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Approve} from './approvemod';
import {Modonly} from './modonly';
import {Modsidebar} from '../../layouts/modsidebar/modsidebar';

/**
 *
 * @return {JSX.Element} UserHelp
 */

/**
 *
 *
 * @return  {JSX.Element} Usermanagement
 */
function Usermanagement({name}) {
    // eslint-disable-next-line no-unused-vars
    const [isbanPressed, setIsbanPressed] = useState(true);
    const [ismoderatorPressed, setIsmoderatorPressed] = useState(false);

    const [ismutedpressed, setismutedpressed] = useState(false);

    const [isapprovedpressed, setisapprovedpressed] = useState(false);
    const [invited, setinvited] = useState(false);
    const [showpopup, setshowpopup] = useState(false);
    const [moderators, setModerators] = useState([]);
    const [isamod, setisamod] = useState(false);
    const [isxclicked, setIsxclicked] = useState(false);
    const username = useSelector((state) => state.user.username);

    console.log('this is the username', username);

    let bgbanned = 'bg-[#d2dadd]';
    let bgmoderator = 'bg-white';
    let bgmuted = 'bg-white';
    let bgapproved = 'bg-white';
    if (isbanPressed) {
        bgbanned = 'bg-[#d2dadd]';
    } else {
        bgbanned = 'bg-white';
    }
    if (ismoderatorPressed) {
        bgmoderator = 'bg-[#d2dadd]';
    } else {
        bgmoderator = 'bg-white';
    }
    if (ismutedpressed) {
        bgmuted = 'bg-[#d2dadd]';
    } else {
        bgmuted = 'bg-white';
    }
    if (isapprovedpressed) {
        bgapproved = 'bg-[#d2dadd]';
    } else {
        bgapproved = 'bg-white';
    }
    const handlebanClick = () => {
        setIsbanPressed(true);
        setIsmoderatorPressed(false);
        setismutedpressed(false);
        setisapprovedpressed(false);
    };
    const handlemoderatorClick = () => {
        setIsmoderatorPressed(true);
        setIsbanPressed(false);
        setismutedpressed(false);
        setisapprovedpressed(false);
    };
    const handlemutedClick = () => {
        setismutedpressed(true);
        setIsmoderatorPressed(false);
        setIsbanPressed(false);
        setisapprovedpressed(false);
    };
    const handleapprovedClick = () => {
        setisapprovedpressed(true);
        setismutedpressed(false);
        setIsmoderatorPressed(false);
        setIsbanPressed(false);
    };


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
    const handlexclick = () => {
        setIsxclicked(true);
    };

    return (
        <div>


            <div className=' transition-[margin-top] duration-[0.3s] ease-[ease]'>
                <div className=' flex min-h-screen flex-col overflow-x-auto text-[#1c1c1c]'>

                    <div className='mx-0 flex'>

                        <div className=' box-border w-full '>
                            <div className=' mx-24 overflow-hidden rounded-[0_0_4px_4px]  pt-4'>
                                <div className='mb-2'>
                                    <div className="text-lg font-bold leading-6">User Management</div>
                                    <div className="mt-3 flex overflow-auto">
                                        <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${bgbanned}
                                  font-semibold leading-5 text-[#576f76]
                                  no-underline hover:bg-[#d2dadd] hover:no-underline`}
                                        href="#" onClick={handlebanClick}>Banned</a>
                                        <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${bgmuted}
                                  font-semibold leading-5 text-[#576f76]
                                  no-underline hover:bg-[#d2dadd] hover:no-underline`}
                                        href="#"onClick={handlemutedClick}>Muted</a>
                                        <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${bgapproved}
                                  font-semibold leading-5 text-[#576f76]
                                  no-underline hover:bg-[#d2dadd] hover:no-underline`}
                                        href="#" onClick={handleapprovedClick}>Approved</a>
                                        <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${bgmoderator}
                                  font-semibold leading-5 text-[#576f76]
                                  no-underline hover:bg-[#d2dadd] hover:no-underline`}
                                        href="#" onClick={handlemoderatorClick}>Moderators</a>


                                    </div>
                                    {isbanPressed&& <Banned name={name} />}
                                    {ismoderatorPressed&& <Moderators name={name} />}
                                    {ismutedpressed&& <Muted />}
                                    {isapprovedpressed&& <Approved name={name} />}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>


    );
}
Usermanagement.propTypes = {
    name: PropTypes.string,
};
export {Usermanagement};

