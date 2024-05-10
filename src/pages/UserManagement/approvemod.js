
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
function Approve({onAccept, onDecline, onxclick, name}) {
    // eslint-disable-next-line no-unused-vars
    const [accept, setaccept] = useState(false);
    const {addNotification} = useNotifications();
    const handlexclick = (event) => {
        // console.log(isxPressed);
        onxclick(true);
    };
        // Call the function passed from the parent with the new email

    Approve.propTypes = {
        onxclick: PropTypes.func,
        name: PropTypes.string,
        onAccept: PropTypes.func,
        onDecline: PropTypes.func,
    };
    /**
     * @return {void}
     */
    async function acceptmoderator() {
        try {
            await axios.patch(API_ROUTES.acceptModinvite, {
                subredditName: name,
            });
            // console.log(response);
            setaccept(true);
            onAccept(true);
            handlexclick();
            addNotification({message: 'Moderator accepted successfuly', type: 'success'});
        } catch (error) {
            // console.log(error);
        }
    }
    /**
     * @return {void}
     */
    async function decline() {
        try {
            await axios.patch(API_ROUTES.declineModinvite, {
                subredditName: name,
            });
            // console.log(response);
            setaccept(false);
            onDecline(true);
            handlexclick();
            addNotification({message: 'Moderator declined successfuly', type: 'success'});
        } catch (error) {
            // console.log(error);
        }
    }
    return (
        <div className='pointer-events-none fixed
         left-0 top-0 z-[55] box-border flex size-full w-screen
         items-center overflow-auto bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]'>
            <div aria-modal="true" className="pointer-events-auto z-[55] m-auto rounded
             border border-solid border-[#EDEFF1] bg-white
              shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]" role="dialog" tabIndex="-1">
                <section className='min-w-[410px] max-w-[538px] shadow-[0_2_15px_rgba(0,0,0,0.3)]'>
                    <header className="rounded-t  p-4">
                        <div className="flex flex-row">
                            <div className="w-full flex-[1_1_100%] text-[var(--newCommunityTheme-bodyText)]">
                            </div><div className="flex-[0_0]">
                                <button className="border-[none] p-0 text-xs font-bold
                                uppercase leading-6 tracking-[0.5px] underline"
                                onClick={handlexclick}><svg viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" className="size-4 fill-[#878A8C]">
                                        <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495
                                    1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267
                                    18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
                                    </svg></button></div></div></header>
                    <img src="https://www.redditstatic.com/desktop2x/img/snoo-success@2x.png"
                        className="w-full max-w-[250px] pl-40"/>
                    <div className="p-4 text-[var(--newCommunityTheme-bodyText)]">

                        <p className="block pl-8 text-sm font-normal leading-[21px] text-[#282626]">
                        Congrats!You are invited to become a moderator!</p></div>
                    <footer className="flex justify-end rounded-b
                    border-t border-solid border-t-[#EDEFF1] bg-[#EDEFF1] p-4">
                        <button role="button" tabIndex="0"
                            className=" relative box-border flex min-h-[32px]  w-auto min-w-[32px] items-center
                                            justify-center rounded-full border border-solid
                                             border-[#0079D3] fill-[#0079D3] px-4 py-1
                                             text-center text-sm font-bold leading-[17px]
                                             tracking-[unset] text-[#0079D3]
                                            "onClick={decline}>Decline</button>
                        <button role="button" tabIndex="0" disabled=""
                            className="relative ml-2 box-border
                             flex min-h-[32px] w-auto min-w-[32px] items-center
                             justify-center rounded-full border-[none] bg-[#0079d3]
                              fill-[#0079d3] px-4 py-1 text-center
                               text-sm font-bold leading-[17px] tracking-[unset]
                                text-[#ffffff]" onClick={acceptmoderator}>
                                                Accept</button></footer>


                </section>

            </div>

        </div>


    );
}
export {Approve};
