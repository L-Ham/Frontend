/* eslint-disable no-unused-vars */


import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Betterban({name, onxclick, banname, labeltext, onaddban}) {
    const [isxPressed, setIsxPressed] = useState(false);
    const {addNotification} = useNotifications();
    const [username, setusername] = useState('');
    const [modnote, setmodnote] = useState('');
    const [reason, setreason] = useState('');
    const [empty, setempty] = useState(false);
    const [notfound, setnotfound] = useState(false);
    const [ismoderator, setismoderator] = useState(false);
    const handlexclick = (event) => {
        setIsxPressed(true);
        console.log(isxPressed);
        onxclick(true);
    };


    const handleusernamechange = (event) => {
        setusername(event.target.value);
        const newusername = event.target.value;
        setusername(newusername);
        setempty(false);
        setnotfound(false);
        setismoderator(false);


        // Call the function passed from the parent with the new email
    };
    const handlemodnotechange = (event) => {
        setmodnote(event.target.value);
        const newmodnote = event.target.value;
        setmodnote(newmodnote);
        console.log(newmodnote);
    };
    const handlereasonchange = (event) => {
        setreason(event.target.value);
        const newreason = event.target.value;
        setreason(newreason);
        console.log(newreason);
    };
    /**
     * @return {void}
     */
    async function handleaddban() {
        if (username === '') {
            setempty(true);
        }
        let response;
        try {
            console.log(username);
            response = await axios.patch(API_ROUTES.banUser, {
                subredditName: name,
                userName: username,
                reasonForBan: reason,
                modNote: modnote,
                permanent: true,
            });
            setnotfound(false);
            console.log(response);
            onaddban(true);
            handlexclick();
            addNotification({message: 'User Banned successfully', type: 'success'});
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message === 'You can\'t ban yourself') {
                console.log('You can\'t ban yourself');
                setismoderator(true);
            }
            if (error.response && error.response.data && error.response.data.message === 'User not found') {
                console.log('User not found');
                setnotfound(true);
            }
        }
    }


    // Call the function passed from the parent with the new email

    Betterban.propTypes = {
        name: PropTypes.string,
        onxclick: PropTypes.func,
        banname: PropTypes.func,
        labeltext: PropTypes.string,
        onaddban: PropTypes.func,
    };
    return (
        <div className='pointer-events-none fixed
         left-0 top-0 z-[55] box-border flex size-full w-screen
         items-center overflow-auto bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]'>
            <div aria-modal="true" className="pointer-events-auto z-[55] m-auto rounded
             border border-solid border-[#EDEFF1] bg-white
              shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]" role="dialog" tabIndex="-1">
                <section className='min-w-[410px] max-w-[538px] shadow-[0_2_15px_rgba(0,0,0,0.3)]'>
                    <header className="rounded-t border-b border-solid border-b-[#EDEFF1] p-4">
                        <div className="flex flex-row">
                            <div className="w-full flex-[1_1_100%] text-[var(--newCommunityTheme-bodyText)]">
                                <div className=" text-base
                                font-medium leading-5 text-[var(--newCommunityTheme-bodyText)]">{labeltext} a user:
                                </div></div><div className="flex-[0_0]">
                                <button className="border-[none] p-0 text-xs font-bold
                                uppercase leading-6 tracking-[0.5px] underline"><svg viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" className="size-4 fill-[#878A8C]">
                                        <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495
                                    1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267
                                    18.264 9.881 11.65 16.495 18.264 18.262 16.497" onClick={handlexclick}></polygon>
                                    </svg></button></div></div></header>
                    <div className="p-4 text-[var(--newCommunityTheme-bodyText)]">
                        <label className='mb-4 block'>
                            <label className='mb-2 block text-[10px]
                            font-bold uppercase leading-3 tracking-[0.5px]
                            text-[#878A8C]'>Enter username</label>

                            <input className="box-border block h-9 w-full rounded
                                         border border-solid border-[#EDEFF1] px-2 py-0
                                         text-sm font-normal leading-[21px] text-[var(--newCommunityTheme-bodyText)]"
                            placeholder="u/username" value={username} onChange={handleusernamechange}/>
                        </label>
                        {
                            <div className=" max-h-[1000px]  text-xs font-medium
                            leading-4 text-[#ea0027] opacity-100 transition-all
                            duration-[0.2s] ease-[ease-in-out]" data-for="password"
                            data-testid="email-error"
                            >
                                {empty&& (
                                    <>Can&apos;t leave Ban name empty</>
                                )}
                                {notfound && !empty && (
                                    <>User is not a member of this Subreddit</>
                                )}
                                {
                                    ismoderator && !empty && (
                                        <>You can&apos;t ban yourself</>
                                    )
                                }


                            </div>
                        }


                        <label className="mb-4 block">
                            <label className="mb-2 block text-[10px]
                            font-bold uppercase leading-3 tracking-[0.5px] text-[#878A8C]">Reason for ban
                            </label><input className="box-border block h-9 w-full
                             rounded border border-solid border-[#EDEFF1] bg-[#ffffff] p-3
                              text-sm font-normal leading-[21px] text-[var(--newCommunityTheme-bodyText)]"
                            data-redditstyle="true" placeholder="Mod note"
                            value={reason} onChange={handlereasonchange}/>
                            <div className="pt-[5px] text-xs font-normal leading-4 text-[#7c7c7c]">
                                {300-reason.length} Characters remaining</div></label>

                        <label className="mb-4 block">
                            <label className="mb-2 block text-[10px]
                            font-bold uppercase leading-3 tracking-[0.5px] text-[#878A8C]">Mod Note
                            </label><input className="box-border block h-9 w-full
                             rounded border border-solid border-[#EDEFF1] bg-[#ffffff] p-3
                              text-sm font-normal leading-[21px] text-[var(--newCommunityTheme-bodyText)]"
                            data-redditstyle="true" placeholder="Mod note"
                            value={modnote} onChange={handlemodnotechange}/>
                            <div className="pt-[5px] text-xs font-normal leading-4 text-[#7c7c7c]">
                                {300-modnote.length} Characters remaining</div></label>


                    </div>
                    <footer className="
                    justify-end rounded-b
                    border-t border-solid border-t-[color:var(--newCommunityTheme-line)]
                     bg-[color:var(--newCommunityTheme-line)] p-4">


                        <div className="mb-2  flex w-full flex-row">
                            <p className="mb-2
                            block text-left text-sm font-normal
                            leading-[21px] text-[var(--newCommunityTheme-bodyText)]">
                            Note to include in ban message
                                <span className="m-0.5 text-[#0079D3]">•</span></p></div>

                        <div className="mb-2 flex w-full flex-row">
                            <textarea placeholder="Reason they were banned"
                                data-redditstyle="true" className="box-border
                                 block h-[78px]
                                 w-full rounded border
                                  border-solid border-[#EDEFF1]
                                  bg-[#ffffff]
                                  px-2.5 py-[9px] text-[var(--newCommunityTheme-bodyText)]">
                            </textarea></div>
                        <div className="mb-2 flex w-full flex-row">
                            <div className="pt-[5px] text-xs
                            font-normal
                             leading-4 text-[#7c7c7c]">
                                    5,000 Characters remaining</div></div>

                        <div className='mb-0 flex flex-row'>
                            <div className='float-left mt-1.5 inline-block pr-12
                            align-text-top text-sm font-medium leading-[18px] text-[var(--newCommunityTheme-bodyText)]'>
                                <span className='m-0.5 text-[#0079D3]'>
                                •
                                </span>
                                Visible to banned user
                            </div>
                            <button role="button" tabIndex="0"
                                className=" relative box-border flex min-h-[32px]
                                         w-auto min-w-[32px] items-center
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
                               text-sm font-bold leading-[17px] tracking-[unset] text-[#ffffff]" onClick={handleaddban}>
                                                Ban user</button>
                        </div>


                    </footer>


                </section>

            </div>

        </div>


    );
}
export {Betterban};
