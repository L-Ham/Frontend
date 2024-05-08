
import React from 'react';

// eslint-disable-next-line no-unused-vars
import {Banbutton} from './banbutton';
import {Userpopupban} from './userpopupban';
import {useState} from 'react';
import {Banneduserentry} from './banneduserentry';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Muted() {
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
    const hardcodedUsernames = ['fahd', 'bedo', 'gaser', 'ziad', 'sherif'];
    const handlebanClick = () => {
        setIsbanPressed(true);
        setIsxclicked(false);
    };
    const handlexclick = (value) => {
        setIsxclicked(true);
    };
    const handlebanname = (banname) => {
        setBanname(banname);
        console.log(banname);
    };


    return (
        <div>
            {isbanPressed && !isxclicked && <Userpopupban onxclick={handlexclick}
                banname={handlebanname} labeltext={'Mute'}/>}
            <div className="static left-[280px] right-0
                             top-[89px] z-[3] mb-2 flex h-12 flex-row
                             items-center justify-end pr-0 ">
                <button role="button" tabIndex="0" className="relative box-border
                                 flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded-full
                                 border-[none] bg-[#0079d3] fill-white px-4 py-1 text-center
                                 text-sm font-bold leading-[17px] tracking-[unset] text-white "
                onClick={handlebanClick} >
                            Mute user</button>
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
                    {/* Map over the hardcodedUsernames array and render Banneduserentry component for each username */}
                    {hardcodedUsernames.map((username, index) => (
                        search && usersearch==username && <Banneduserentry key={index} username={username} /> ||
                        !search && <Banneduserentry key={index} username={username} />
                    ))}

                </div>
            </div>
        </div>


    );
}
export {Muted};
