/* eslint-disable no-unused-vars */

import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import {Invitemodcheck} from './invitemodcheck';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Invitepopup({onxclick, banname, name}) {
    const [isxPressed, setIsxPressed] = useState(false);
    const [username, setusername] = useState('');
    const handlexclick = (event) => {
        setIsxPressed(true);
        console.log(isxPressed);
        onxclick(true);
    };


    const handleusernamechange = (event) => {
        setusername(event.target.value);
        const newusername = event.target.value;
        setusername(newusername);
        console.log(newusername);
        // Call the function passed from the parent with the new email
    };
    const handleaddban = () => {
        console.log(username);
        banname(username);
    };
        // Call the function passed from the parent with the new email

    Invitepopup.propTypes = {
        onxclick: PropTypes.func,
        banname: PropTypes.func,
        labeltext: PropTypes.string,
        name: PropTypes.string,
    };
    /**
     * @return {void}
     */
    async function invitemoderator() {
        try {
            const response = await axios.post(API_ROUTES.composeMessage, {
                receiverName: username,
                subject: 'You have been invited to moderate a subreddit',
                message: `<div class="md">
                <p>gadzooks! 
                <strong>you are invited to become a moderator</strong>
                 of 
                <a href="/r/${name}/about/usermanagement" className="
                text-[#4fbcff]">/r/${name}: ${name}</a>!
                </p>
                
                <p><strong><em>to accept</em>, visit the <a href="/r/${name}/about/usermanagement" 
                className="text-[#4fbcff]">
                moderators page for /r/${name}</a> and click "accept".</strong></p>
                
                <p><em>otherwise,</em> if you did not expect to receive this, you can 
                simply ignore this invitation or report it.</p>
                </div>`,
                isSubreddit: false,
                parentMessageId: null,

            });
            console.log(response);
            console.log(name);
        } catch (error) {
            console.log(error);
            console.log(name);
        }
        try {
            const response = await axios.patch(API_ROUTES.inviteMod, {
                subredditName: name,
                invitedModeratorUsername: username,
            });
            console.log(response);
            console.log(name);
            handlexclick();
        } catch (error) {
            console.log(error);
            console.log(name);
        }
    }
    return (
        <div className='pointer-events-none fixed left-0 top-0 z-[55]
         box-border flex size-full w-screen
         items-center overflow-auto bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]'>
            <div aria-modal="true" className="pointer-events-auto z-[55] m-auto rounded
             border border-solid border-[#EDEFF1] bg-white
              shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]" role="dialog" tabIndex="-1">
                <section className=' min-w-[410px] max-w-[538px] shadow-[0_2_15px_rgba(0,0,0,0.3)]'>
                    <header className="rounded-t border-b border-solid border-b-[#EDEFF1] p-4">
                        <div className="flex flex-row">
                            <div className="w-full flex-[1_1_100%] text-[#1c1c1c]">
                                <div className=" text-base font-medium leading-5 text-[#1c1c1c]"> Invite Moderators:
                                </div></div><div className="flex-[0_0]">
                                <button className="border-[none] p-0 text-xs font-bold
                                uppercase leading-6 tracking-[0.5px] underline"><svg viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" className="size-4 fill-[#878A8C]">
                                        <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495
                                    1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267
                                    18.264 9.881 11.65 16.495 18.264 18.262 16.497" onClick={handlexclick}></polygon>
                                    </svg></button></div></div></header>
                    <div className="p-4 text-[#1c1c1c]">
                        <input className="box-border block h-9 w-full rounded
                                         border border-solid border-[#EDEFF1] px-2 py-0
                                         text-sm font-normal leading-[21px] text-[#1c1c1c]"
                        placeholder="Enter username" value={username} onChange={handleusernamechange}/>

                    </div>
                    <div className="pl-4 text-base font-medium leading-5 text-[#1c1c1c]">Give them access to...</div>


                    <Invitemodcheck labeltext1={'Everything'} labeltext2=
                        {'Full access including the ability to manage moderator access and permissions.'}/>
                    <hr className="mx-0 mb-0 mt-4 border-0 border-t border-solid border-t-[#EDEFF1]"/>

                    <Invitemodcheck labeltext1={'Manage Users'} labeltext2=
                        {'Access mod notes, ban and mute users, and approve submitters*.'}/>

                    <Invitemodcheck labeltext1={'Create Live Chats'} labeltext2=
                        {'Create live chat posts in this community.'}/>

                    <Invitemodcheck labeltext1={'Manage Settings'} labeltext2=
                        {'Manage community settings, appearance, emojis, rules, and AutoMod*.'}/>

                    <Invitemodcheck labeltext1={'Manage Flair'} labeltext2=
                        {'Create and manage user and post flair.'}/>

                    <Invitemodcheck labeltext1={'Manage Modmail'} labeltext2=
                        {'Read and respond to modmail and mute users*.'}/>

                    <Invitemodcheck labeltext1={'Manage Posts & Comments'} labeltext2=
                        {'Access queues, take action on content, and manage collections and events.'}/>

                    <Invitemodcheck labeltext1={'Manage Wiki Pages'} labeltext2=
                        {'Create and manage wiki pages and AutoMod*.'}/>
                    <p className="mx-0 my-4 px-4 text-xs font-normal leading-4 text-[#7c7c7c]">
                            *Note: To manage AutoMod, mods must have access
                            to Wiki Pages and Manage Settings. To mute users,
                             mods must have access to Modmail and Manage Users.</p>

                    <footer className="flex justify-end rounded-b
                    border-t border-solid border-t-[#EDEFF1] bg-[#EDEFF1] p-4">
                        <button role="button" tabIndex="0"
                            className=" relative box-border flex min-h-[32px]  w-auto min-w-[32px] items-center
                                            justify-center rounded-full border border-solid
                                             border-[#0079D3] fill-[#0079D3] px-4 py-1
                                             text-center text-sm font-bold leading-[17px]
                                             tracking-[unset] text-[#0079D3]
                                            "onClick={handlexclick}>Cancel</button>
                        <button role="button" tabIndex="0" disabled=""
                            className="relative ml-2 box-border
                             flex min-h-[32px] w-auto min-w-[32px] items-center
                             justify-center rounded-full border-[none] bg-[#0079d3]
                              fill-[#0079d3] px-4 py-1 text-center
                               text-sm font-bold leading-[17px] tracking-[unset]
                                text-[#ffffff]" onClick={invitemoderator}>
                                                Invite</button></footer>


                </section>

            </div>

        </div>


    );
}
export {Invitepopup};
