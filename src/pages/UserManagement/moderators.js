
import React, {useEffect} from 'react';
import {Leavmod} from './leavemod';
import {useState} from 'react';
import {Invitepopup} from './invitemod';
// eslint-disable-next-line no-unused-vars
import {Approve} from './approvemod';
import {axiosInstance as axios} from '../../requests/axios';
import PropTypes from 'prop-types';
import {Moderatorentry} from './moderatorentry';


/**
 *
 * @return {JSX.Element} UserHelp
 */
function Moderators({name}) {
    const [isleavePressed, setisleavepressed] = useState(false);
    const [isinvitePressed, setisinvitepressed] = useState(false);
    const [usersearch, setUsersearch] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [search, setSearch] = useState(false);

    const [isxclicked, setIsxclicked] = useState(false);
    const [isxclicked2, setIsxclicked2] = useState(false);
    const [moderators, setModerators] = useState([]);


    const handlexclick = (value) => {
        setIsxclicked(true);
    };
    const handlexclick2 = (value) => {
        setIsxclicked2(true);
    };
    const handleleaveClick = () => {
        setisleavepressed(true);
        setIsxclicked(false);
    };
    const handleinviteClick = () => {
        setisinvitepressed(true);
        setIsxclicked2(false);
    };
    const handlesearchchange = (event) => {
        setUsersearch(event.target.value);
        setSearch(false);
    };
    const handlesearch = () => {
        setSearch(true);
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
        } catch (error) {
            console.log(error);
        }
        console.log(name);
    }
    useEffect(() => {
        // Call the Getmoderators function once when the component mounts
        getmoderators();
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
    /**
     * @void
     */
    async function handlenewleave() {
        getmoderators();
    }
    /**
     * @void
     */
    async function handlenewadd() {
        getmoderators();
    }

    Moderators.propTypes = {
        name: PropTypes.string,
    };

    return (

        <div>
            {isleavePressed &&!isxclicked && <Leavmod onxclick={handlexclick}name={name} onnewleave={handlenewleave}/>}
            {isinvitePressed &&!isxclicked2 &&
            <Invitepopup onxclick={handlexclick2} name={name} onnewadd={handlenewadd}/>}
            <div className='left-[280px] right-0 top-[89px] z-[3] mb-2
            flex h-12 flex-row items-center justify-end  pr-0'>
                <button role="button" tabIndex="0"
                    className=" relative mr-2 box-border flex min-h-[32px]
              w-auto min-w-[32px] items-center
             justify-center rounded-full border border-solid border-[#0079D3]
              fill-[#0079D3] px-4 py-1 text-center text-sm font-bold
              leading-[17px] tracking-[unset] text-[#0079D3] hover:bg-[#e8f0fe]">
                Reorder</button>
                <button role="button" tabIndex="0"
                    className=" relative mr-2 box-border flex min-h-[32px]
              w-auto min-w-[32px] items-center
             justify-center rounded-full border border-solid border-[#0079D3]
              fill-[#0079D3] px-4 py-1 text-center text-sm font-bold
              leading-[17px] tracking-[unset] text-[#0079D3] hover:bg-[#e8f0fe]" onClick={handleleaveClick}>
                Leave as mod</button>

                <button role="button" tabIndex="0"
                    className="relative box-border flex
                  min-h-[32px] w-auto  min-w-[32px] items-center
                  justify-center rounded-full border-[none] bg-[#0079d3]
                   fill-[#0079d3] px-4 py-1 text-center text-sm font-bold
                    leading-[17px] tracking-[unset] text-[#ffffff]" onClick={handleinviteClick}>
                    Invite user as mod</button>

            </div>
            <div className="box-border  flex flex-row items-center justify-between
                             rounded-[4px_4px_0_0] bg-[#edeff1] px-4 py-2">
                <div className="flex">
                    <input type="text" className="box-border h-8 w-[248px] rounded-[4px_0_0_4px]
                                    border border-solid border-[#878a8c] bg-white p-2 text-[#1c1c1c]"
                    placeholder="Search for a user"
                    value={usersearch} onChange={handlesearchchange}/>
                    <button className="h-8 w-10 rounded-[0_4px_4px_0] bg-[#878A8C] pl-3"onClick={handlesearch}>
                        <svg className="size-4 fill-white "
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.59,13.91l2.78,2.69a1.25,
                                                1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,
                                        1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z">
                            </path></svg></button></div>
            </div>

            <div className=' border border-solid border-[#EDEFF1]'>
                <div data-scroller-first>
                    {moderators &&moderators.map((user, index) => (
                        (search && usersearch === user.userName) || !search ? (
                            <Moderatorentry
                                key={index}
                                username={user.userName}
                                imageurl={user.avatarImage}


                            />
                        ) : null
                    ))}

                </div>
            </div>
            <div style={{paddingTop: '40px'}} />
            <div className="mb-2 ml-1 text-sm font-medium leading-[18px]
             text-[#1c1c1c] ">You can edit these moderators</div>
            <div className=' border border-solid border-[#EDEFF1]'>
                <div data-scroller-first>
                    <div className='box-border flex h-[60px] w-full flex-row
                                     items-center border-b border-solid border-b-[#EDEFF1] bg-white
                                     px-4 py-2 text-xs font-normal leading-4 text-[#878A8C] '>
                        <div className="min-w-[220px] rounded-lg text-sm font-medium
                                         leading-[18px] text-[#1c1c1c] hover:bg-[#edeff1]">
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
                                            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"/>
                                    </div></span>
                                <span className=" inline-block flex-col"><span>ali</span>
                                    <span className="block text-sm
                                                    font-normal text-[#576f76]">just now
                                    </span></span></a></div>

                        <div className="ml-auto flex min-w-0 flex-row items-center">
                            <div className="truncate p-1">
                                                                Everything</div>
                            <div className=" cursor-pointer"><svg className="size-4 fill-[#878A8c]"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title id="undefined-title"></title><g><path
                                    fill="inherit" d="M15.75,7.834625 L12,4.084625
                                                                    L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125
                                                                    16.558,3.276625 C17.5935,4.312125 17.5935,5.991125
                                                                    16.558,7.026625 L15.75,7.834625
                                                                    Z M11.366,5 L15.116,8.75
                                                                     L7.25,16.616 L3.5,12.866 L11.366,5
                                                                     Z M2.5035,13.5 L6.1125,17.109
                                                                     L1,18.6125 L2.5035,13.5 Z">
                                </path></g></svg></div>
                        </div>


                    </div>


                </div>
            </div>


        </div>


    );
}
export {Moderators};
