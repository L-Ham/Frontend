
import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';

/**
 *
 * @return {JSX.Element} UserHelp
 */
function Userpopupban({onxclick, banname, labeltext, name, onnewapproved}) {
    const [isxPressed, setIsxPressed] = useState(false);
    const [username, setusername] = useState('');
    const [notfound, setnotfound] = useState(false);
    const [empty, setempty] = useState(false);
    const handlexclick = (event) => {
        setIsxPressed(true);
        // console.log(isxPressed);
        onxclick(true);
    };


    const handleusernamechange = (event) => {
        setusername(event.target.value);
        const newusername = event.target.value;
        setusername(newusername);
        // console.log(newusername);
        setempty(false);
        setnotfound(false);

        // Call the function passed from the parent with the new email
    };
    /**
     * @return {void}
     */
    async function handleaddban() {
        if (username === '') {
            setempty(true);
        }
        try {
            const response = await axios.patch(API_ROUTES.forceApprove, {
                subredditName: name,
                userName: username,
            });
            // console.log(response);
            onnewapproved(true);
            handlexclick();
        } catch (error) {
            // console.log(error);

            if (error.response && error.response.data && error.response.data.message === 'User not found') {
                // console.log('User not found');
                setnotfound(true);
            }
        }
    }
    // Call the function passed from the parent with the new email

    Userpopupban.propTypes = {
        onxclick: PropTypes.func,
        banname: PropTypes.func,
        labeltext: PropTypes.string,
        name: PropTypes.string,
        onnewapproved: PropTypes.func,
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
                                <div className=" text-base font-medium leading-5
                                 text-[var(--newCommunityTheme-bodyText)]">{labeltext} a user:
                                </div></div><div className="flex-[0_0]">
                                <button className="border-[none] p-0 text-xs font-bold
                                uppercase leading-6 tracking-[0.5px] underline"><svg viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" className="size-4 fill-[#878A8C]">
                                        <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495
                                    1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267
                                    18.264 9.881 11.65 16.495 18.264 18.262 16.497" onClick={handlexclick}></polygon>
                                    </svg></button></div></div></header>
                    <div className="p-4 text-[var(--newCommunityTheme-bodyText)]">
                        <input className="box-border block h-9 w-full rounded
                                         border border-solid border-[#EDEFF1] px-2 py-0
                                         text-sm font-normal leading-[21px] text-[var(--newCommunityTheme-bodyText)]"
                        placeholder="Enter username" value={username} onChange={handleusernamechange}/>
                        {
                            <div className=" max-h-[1000px]  text-xs font-medium
                            leading-4 text-[#ea0027] opacity-100 transition-all
                            duration-[0.2s] ease-[ease-in-out]" data-for="password"
                            data-testid="email-error"
                            >
                                {empty&& (
                                    <>Can&apos;t leave Approve name empty</>
                                )}
                                {notfound && !empty && (
                                    <>Username is not found</>
                                )}


                            </div>
                        }


                    </div>
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
                               text-sm font-bold leading-[17px] tracking-[unset] text-[#ffffff]" onClick={handleaddban}>
                                                Add user</button></footer>


                </section>

            </div>

        </div>


    );
}
export {Userpopupban};
