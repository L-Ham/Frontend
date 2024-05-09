/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Editban} from './editban';
/**
 *
 *
 * @return  {JSX.Element} UserHelp
 */
function Banneduserentry({username, rules, modNotes, name, imageurl, timestamp, onnewunbanned}) {
    Banneduserentry.propTypes = {
        username: PropTypes.string,
        name: PropTypes.string,
        rules: PropTypes.string,
        modNotes: PropTypes.string,
        imageurl: PropTypes.string,
        timestamp: PropTypes.string,
        onnewunbanned: PropTypes.func,
    };

    const [daysSinceBanned, setDaysSinceBanned] = useState(0);
    const [isxclicked, setIsxclicked] = useState(false);
    const [iseditPressed, setIseditPressed] = useState(false);
    const [moredetails, setMoreDetails] = useState(false);

    useEffect(() => {
        const bannedDate = new Date(timestamp);
        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - bannedDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        setDaysSinceBanned(differenceInDays);
    }, [timestamp]);

    const handleeditClick = () => {
        setIseditPressed(true);
        setIsxclicked(false);
    };

    const handlexclick = () => {
        setIsxclicked(true);
    };

    const handlemoreDetails = () => {
        setMoreDetails(!moredetails);
    };
    const handlenewunbanned = () => {
        onnewunbanned(true);
    };


    return (
        <div id='1'>
            {iseditPressed && !isxclicked && <Editban name={name} username={username} onxclick={handlexclick} labeltext={'Ban'} onremoveban={handlenewunbanned} />}
            <div className='box-border flex h-[60px] w-full flex-row items-center border-b border-solid border-b-[#EDEFF1] bg-[var(--newCommunityTheme-body)] px-4 py-2 text-xs font-normal leading-4 text-[#878A8C]'>
                <div className="min-w-[220px] rounded-lg text-sm font-medium leading-[18px] text-[var(--newCommunityTheme-bodyText)] hover:bg-[#edeff1]">
                    <a className="inline-block rounded py-1 pl-1 pr-2" href="/user/mohamed">
                        <span className="mr-1.5 inline-block align-middle" style={{height: '32px', width: '32px'}}>
                            <div className=" relative h-full ">
                                <img alt="User avatar" className="box-border size-full rounded border border-solid border-[#EDEFF1] object-cover object-center indent-[-9999px] text-white" src={imageurl ? imageurl : 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png'} />
                            </div>
                        </span>
                        <span className=" inline-block flex-col">
                            <span>{username}</span>
                            <span className="block text-sm font-normal text-[#576f76]">
                                {daysSinceBanned === 1 ? `${daysSinceBanned} day ago` : `${daysSinceBanned} days ago`} (Permanent)
                            </span>
                        </span>
                    </a>
                </div>
                <div className=' flex-[1_0_100px] truncate leading-[normal]'>
                    <span className='px-2.5 py-0'>
                        •
                    </span>
                    {rules}
                </div>
                <div className='ml-auto flex min-w-0 flex-row items-center'>
                    <button role="button" tabIndex="0" className="relative box-border flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded-full border border-solid border-transparent fill-[#0079d3] px-4 py-1 text-center text-sm font-bold leading-[17px] tracking-[unset] text-[#0079d3] hover:bg-[#edeff1]" onClick={handleeditClick}>
                        Edit
                    </button>
                    <button role="button" tabIndex="0" className="relative box-border flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded-full border border-solid border-transparent fill-[#0079d3] px-4 py-1 text-center text-sm font-bold leading-[17px] tracking-[unset] text-[#0079d3] hover:bg-[#edeff1]" onClick={handlemoreDetails}>
                        More Details
                        <svg className="ml-1 size-3 align-middle" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <polygon fill="inherit" points="11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            {moredetails &&
                <div>
                    <div className="break-all border-t-0 bg-[#EDEFF1] p-4">
                        <div className="bg-[#EDEFF1]">
                            <div className="border-b border-solid border-b-[#EDEFF1] pb-2.5">
                                <div className="mr-[3px] inline-block text-[10px] font-bold uppercase leading-3 tracking-[0.5px] text-[#878A8C]">
                                    Mod note:
                                </div>
                                <div className="inline-block break-all text-xs font-normal leading-[18px]">
                                    {modNotes}
                                </div>
                            </div>
                            <div>
                                <div className="mr-[3px] inline-block text-[10px] font-bold uppercase leading-3 tracking-[0.5px] text-[#878A8C]">
                                    Banned For:
                                </div>
                                <div className="inline-block pt-2.5 text-xs font-normal leading-[18px]">
                                    {rules}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export {Banneduserentry};
