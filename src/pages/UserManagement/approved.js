
import React, {useEffect} from 'react';


// eslint-disable-next-line no-unused-vars
import {Banbutton} from './banbutton';
import {Userpopupban} from './userpopupban';
import {useState} from 'react';
import {Approveduserentry} from './approveduserentry';

import {axiosInstance as axios} from '../../requests/axios';

import PropTypes from 'prop-types';
import {Pendinguserentry} from './pendinguserentry';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Approved({name}) {
    const [isbanPressed, setIsbanPressed] = useState(false);
    const [isxclicked, setIsxclicked] = useState(false);
    const [usersearch, setUsersearch] = useState('');

    // eslint-disable-next-line no-unused-vars
    const [search, setSearch] = useState(false);


    const handlesearchchange = (event) => {
        setUsersearch(event.target.value);
        const newusername = event.target.value;
        setUsersearch(newusername);
        setSearch(false);
        console.log(newusername);
        // Call the function passed from the parent with the new email
    };
    const handlesearch = (event) => {
        setSearch(true);
        console.log(usersearch);
        console.log(search);
    };


    // eslint-disable-next-line no-unused-vars
    const [banname, setBanname] = useState('');
    // eslint-disable-next-line no-unused-vars
    const hardcodedUsernames = ['Marly', 'ziad', 'Rana', 'amr', 'hussein', 'sarraa', 'david'];
    const [approved, setapproved] = useState([]);
    const [pending, setpending] = useState([]);

    /**
     * @return {void}
     */
    async function handlebanClick() {
        setIsbanPressed(true);
        setIsxclicked(false);
    }
    const handlexclick = (value) => {
        setIsxclicked(true);
    };
    const handlebanname = (banname) => {
        setBanname(banname);
        console.log(banname);
    };
    Approved.propTypes = {
        name: PropTypes.string,
    };

    /**
     * @return {void}
     */
    async function getapproved() {
        try {
            const response = await axios.get(`/subreddit/users/approved?subredditName=${name}`);
            // If the API call is successful, update the state with the moderators' data
            setapproved(response.data.approvedMembers);
            console.log(response);
            console.log(approved);
        } catch (error) {
            console.log(error);
        }
        console.log(name);
    }
    useEffect(() => {
        // Call the Getmoderators function once when the component mounts
        getapproved();
    }, []);


    /**
     * @return {void}
     */
    async function getpending() {
        try {
            const response = await axios.get(`/subreddit/users/pending?subredditName=${name}`);
            // If the API call is successful, update the state with the moderators' data
            setpending(response.data.pendingMembers);
            console.log(response);
            console.log(pending);
        } catch (error) {
            console.log(error);
        }
        console.log(name);
    }
    useEffect(() => {
        // Call the Getmoderators function once when the component mounts
        getpending();
    }, []);


    /**
     * @return {void}
     */
    async function handlenewremoved() {
        getapproved();
    }

    /**
     * @return {void}
     *
     */
    async function handlenewapproved() {
        getapproved();
    }

    /**
     * @return {void}
     */
    async function handlenewrejected() {
        getpending();
    }
    /**
     * @return {void}
     */
    async function handlenewaccepted() {
        getpending();
        getapproved();
    }


    return (
        <div>
            {isbanPressed && !isxclicked && <Userpopupban onxclick={handlexclick} name={name}
                banname={handlebanname} labeltext={'Approve'} onnewapproved={handlenewapproved}/>}
            <div className="static left-[280px] right-0
                             top-[89px] z-[3] mb-2 flex h-12 flex-row
                             items-center justify-end pr-0 ">
                <button role="button" tabIndex="0" className="relative box-border
                                 flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded-full
                                 border-[none] bg-[#0079d3] fill-white px-4 py-1 text-center
                                 text-sm font-bold leading-[17px] tracking-[unset] text-white "
                onClick={handlebanClick} >
                            Approve user</button>
            </div>
            <div className="box-border  flex flex-row items-center justify-between
                             rounded-[4px_4px_0_0] bg-[var(--newCommunityTheme-body)] px-4 py-2">
                <div className="flex">
                    <input type="text" className="box-border h-8 w-[248px] rounded-[4px_0_0_4px]
                                    border border-solid border-[#878a8c] bg-[var(--newCommunityTheme-body)] p-2
                                    text-[var(--color-neutral-content)]"
                    placeholder="Search for a user"
                    value={usersearch} onChange={handlesearchchange}/>
                    <button className="h-8 w-10 rounded-[0_4px_4px_0] bg-[#878A8C] pl-3" onClick={handlesearch}>
                        <svg className="size-4 fill-white "
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.59,13.91l2.78,2.69a1.25,
                                                1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,
                                        1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z">
                            </path></svg></button></div>
            </div>

            <div className=' border border-solid border-[#EDEFF1]'>
                <div data-scroller-first>
                    {/* Map over the hardcodedUsernames array and render
                     Approveduserentry component for each username */}
                    {approved &&approved.map((user, index) => (
                        (search && usersearch === user.userName) || !search ? (
                            <Approveduserentry
                                key={index}
                                username={user.userName}
                                imageurl={user.avatarImage}
                                name={name}
                                onremove={handlenewremoved}


                            />
                        ) : null
                    ))}

                </div>
            </div>
            <div style={{paddingTop: '40px'}} />
            <div className="mb-2 ml-1 text-sm font-medium leading-[18px]
             text-[#1c1c1c] ">Pending Users</div>

            <div className=' border border-solid border-[#EDEFF1]'>
                <div data-scroller-first>
                    {/* Map over the hardcodedUsernames array and render
                     Approveduserentry component for each username */}
                    {pending &&pending.map((user, index) => (

                        <Pendinguserentry
                            key={index}
                            username={user.userName}
                            imageurl={user.avatarImage}
                            name={name}
                            onremove={handlenewrejected}
                            onapprove={handlenewaccepted}


                        />

                    ))}

                </div>
            </div>
        </div>


    );
}
export {Approved};
