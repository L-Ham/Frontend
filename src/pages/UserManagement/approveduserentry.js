
import React from 'react';
import PropTypes from 'prop-types';

import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNavigate} from 'react-router-dom';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';


/**
 *
 * @return {JSX.Element} UserHelp
 */
function Approveduserentry({username, imageurl, name, onremove}) {
    const navigate = useNavigate();
    const {addNotification} = useNotifications();
    Approveduserentry.propTypes = {
        username: PropTypes.string,
        imageurl: PropTypes.string,
        name: PropTypes.string,
        onremove: PropTypes.func,
    };
    /**
     * @return {void}
     */
    async function unapproveuser() {
        try {
            const response = await axios.patch(API_ROUTES.removeUser, {
                userName: username,
                subredditName: name,

            });

            console.log(response);
            console.log(name);
            console.log(username);
            onremove(true);
            addNotification({message: 'User removed successfuly', type: 'success'});
        } catch (error) {
            console.log(error);
            console.log(name);
            console.log(username);
        }
    }
    /**
     * @return {void}
     */
    function navmessage() {
        navigate(`/message/sent`);
    }

    return (
        <div id='1'>
            <div className='box-border flex h-[60px] w-full flex-row
                                     items-center border-b border-solid
                                      border-b-[#EDEFF1] bg-[var(--newCommunityTheme-body)]
                                     px-4 py-2 text-xs font-normal leading-4 text-[#878A8C] '>
                <div className="min-w-[220px] rounded-lg text-sm font-medium
                                         leading-[18px] text-[var(--newCommunityTheme-bodyText)] hover:bg-[#edeff1]">
                    <a className="inline-block rounded py-1
                                                 pl-1 pr-2" href="/user/mohamed">
                        <span className="mr-1.5 inline-block align-middle"
                            style={{height: '32px', width: '32px'}}>
                            <div className=" relative h-full ">
                                <img alt="User avatar"
                                    className="box-border  size-full rounded border
                                                            border-solid border-[#EDEFF1] object-cover
                                                             object-center indent-[-9999px] text-white"
                                    // eslint-disable-next-line max-len
                                    src={imageurl ? imageurl :
                                        'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png'}/>
                            </div></span>
                        <span className=" inline-block flex-col"><span>{username}</span>
                        </span></a></div>

                <div className='ml-auto flex min-w-0 flex-row items-center'>
                    <button role="button"
                        tabIndex="0" className="relative box-border
                                                flex min-h-[32px] w-auto
                                                min-w-[32px] items-center justify-center rounded-full
                                                border border-solid border-transparent fill-[#0079d3]
                                                 px-4 py-1 text-center text-sm
                                                 font-bold leading-[17px] tracking-[unset]
                                                  text-[#0079d3] hover:bg-[#edeff1]" onClick={navmessage}>
                                            Send message</button>

                    <button role="button" tabIndex="0"
                        className="relative box-border flex min-h-[32px]
                                                w-auto min-w-[32px] items-center justify-center
                                                rounded-full border border-solid border-transparent fill-[#0079d3]
                                                px-4 py-1 text-center text-sm font-bold
                                                 leading-[17px] tracking-[unset] text-[#0079d3]
                                                 hover:bg-[#edeff1]"onClick={unapproveuser}>Remove
                    </button>


                </div>


            </div>

        </div>


    );
}

export {Approveduserentry};
