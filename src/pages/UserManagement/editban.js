
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
function Editban({name, onxclick, username, labeltext, onremoveban}) {
    const {addNotification} = useNotifications();

    const [modnote, setmodnote] = useState('');
    const [reason, setreason] = useState('');
    const handlexclick = (event) => {
        // console.log(isxPressed);
        onxclick(true);
    };


    const handlemodnotechange = (event) => {
        setmodnote(event.target.value);
        const newmodnote = event.target.value;
        setmodnote(newmodnote);
        // console.log(newmodnote);
        // console.log(name);
        // console.log(username);
    };
    const handlereasonchange = (event) => {
        setreason(event.target.value);
        const newreason = event.target.value;
        setreason(newreason);
        // console.log(newreason);
    };
    /**
     * @return {void}
     */
    async function handleaddban() {
        try {
            await axios.patch(API_ROUTES.banUser, {
                subredditName: name,
                userName: username,
                reasonForBan: reason,
                modNote: modnote,
                permanent: true,
            });
            // console.log(response);
            handlexclick();
            addNotification({message: 'Ban edited successfully', type: 'success'});
        } catch (error) {
            // console.error(error);
        }
    }
    /**
     * @return {void}
     */
    async function handleunbanClick() {
        try {
            await axios.patch(API_ROUTES.unbanUser, {
                subredditName: name,
                userName: username,

            });
            // console.log(response);
            onremoveban(true);
            handlexclick();
            addNotification({message: 'User unbanned successfully', type: 'success'});
        } catch (error) {
            // console.error(error);
        }
    }


    // Call the function passed from the parent with the new email

    Editban.propTypes = {
        name: PropTypes.string,
        onxclick: PropTypes.func,

        labeltext: PropTypes.string,
        username: PropTypes.string,
        onremoveban: PropTypes.func,
    };
    return (
        <div data-testid='  2QVEWQ3RWGV3Q' className='pointer-events-none fixed
         left-0 top-0 z-[55] box-border flex size-full w-screen
         items-center overflow-auto bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]'>
            <div aria-modal="true" className="pointer-events-auto z-[55] m-auto rounded
             border border-solid border-[#EDEFF1] bg-white
              shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]" role="dialog" tabIndex="-1">
                <section className='min-w-[410px] max-w-[538px] shadow-[0_2_15px_rgba(0,0,0,0.3)]'>
                    <header
                        data-testid='erbttrhbtr54' className="rounded-t border-b border-solid border-b-[#EDEFF1] p-4">
                        <div className="flex flex-row">
                            <div className="w-full flex-[1_1_100%] text-[var(--newCommunityTheme-bodyText)]">
                                <div className=" text-base font-medium leading-5
                                text-[var(--newCommunityTheme-bodyText)]">Edit Ban:
                                </div></div><div className="flex-[0_0]">
                                <button data-testid='bwn4ymtnbebtfr' className="border-[none] p-0 text-xs font-bold
                                uppercase leading-6 tracking-[0.5px] underline"><svg viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg" className="size-4 fill-[#878A8C]">
                                        <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495
                                    1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267
                                    18.264 9.881 11.65 16.495 18.264 18.262 16.497" onClick={handlexclick}></polygon>
                                    </svg></button></div></div></header>
                    <div className="p-4 text-[var(--newCommunityTheme-bodyText)]">


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

                        <label data-testid='qwerbry5nmjukr' className="mb-4 block">
                            <label className="mb-2 block text-[10px]
                            font-bold uppercase leading-3 tracking-[0.5px] text-[#878A8C]">Mod Note
                            </label><input data-testid='qerbneryye5' className="box-border block h-9 w-full
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
                            <p className="mb-2 block text-left text-sm font-normal leading-[21px]
                            text-[var(--newCommunityTheme-bodyText)]">
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
                            <button data-testid='ewrbvernyrme' role="button" tabIndex="0"
                                className="fill-[#0079D3)] relative float-left box-border
                                 flex min-h-[32px] w-auto
                                 min-w-[32px] items-center justify-center rounded-full border
                                 border-solid border-transparent px-0
                                 py-1 pr-32 text-center text-sm font-bold
                                 leading-[17px] tracking-[unset] text-[#ea0027]"onClick={handleunbanClick}>
                                <svg className="mr-1 size-4 translate-y-1 fill-[#ea0027]" viewBox="0 0 16 16"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg"><g>
                                        <path d="M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619
                                Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952
                                L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286
                                L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619
                                3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619
                                L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905
                                6.2,0.404761905 C6.4208,0.404761905
                                6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952
                                L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905
                                C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762
                                C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z
                                M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905
                                 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714
                                 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z
                                 M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238
                                 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333
                                 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143
                                 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905
                                 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619
                                 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333
                                 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714
                                 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0
                                 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905
                                 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286
                                 3,6.37783333 L3,4.04761905 Z"></path></g></svg>Unban</button>
                            <button data-testid='rk675434eqwdefrbtn' role="button" tabIndex="0"
                                className=" relative box-border flex min-h-[32px]
                                         w-auto min-w-[32px] items-center
                                            justify-center rounded-full border border-solid
                                             border-[#0079D3] fill-[#0079D3] px-4 py-1
                                             text-center text-sm font-bold leading-[17px]
                                             tracking-[unset] text-[#0079D3]
                                            "onClick={handlexclick}>Cancel</button>
                            <button data-testid='ukmytnh bgre3rfew' role="button" tabIndex="0" disabled=""
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
export {Editban};
