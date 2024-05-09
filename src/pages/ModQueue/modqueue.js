/* eslint-disable max-len */


import React from 'react';
import PropTypes from 'prop-types';
import {Queue} from './queue';
import {useNavigate} from 'react-router-dom';
import {SideInfo} from './sideinfo';

/**
 *
 * @return {JSX.Element} UserHelp
 */

/**
 *
 *
 * @return  {JSX.Element} Modqueue
 */
function Modqueue({name, tab}) {
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();

    const highlighted = 'bg-[var(--color-secondary-background-selected)]';
    const white = 'bg-transparent';
    return (
        <div className=' transition-[margin-top] duration-[0.3s] ease-[ease]'>
            <div className=' flex min-h-screen flex-col overflow-x-auto text-[#1c1c1c]'>

                <div className='mx-0  flex'>
                    <div className='mx-auto box-border flex'>
                        <div className=' w-[640px] rounded-[0_0_4px_4px] pt-4'>
                            <div className='mb-2'>
                                <div className="text-lg font-bold leading-6 text-[var(--color-neutral-content-strong)]">Queues</div>
                                <div className="mt-3 flex overflow-auto">
                                    <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${!tab ? highlighted : white}
                                  font-bold leading-5 text-[var(--color-neutral-content-strong)]
                                  no-underline hover:bg-[var(--color-secondary-background-selected)] hover:no-underline`}
                                    href="#" onClick={() => navigate(`/r/${name}/about/modqueue`)}>Mod Queue</a>
                                    <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${tab === 'reports' ? highlighted : white}
                                  font-bold leading-5 text-[var(--color-neutral-content-strong)]
                                  no-underline hover:bg-[var(--color-secondary-background-selected)] hover:no-underline`}
                                    href="#"onClick={() => navigate(`/r/${name}/about/modqueue/reports`)}>Reported</a>
                                    <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${tab === 'spam' ? highlighted : white}
                                  font-bold leading-5 text-[var(--color-neutral-content-strong)]
                                  no-underline hover:bg-[var(--color-secondary-background-selected)] hover:no-underline`}
                                    href="#" onClick={() => navigate(`/r/${name}/about/modqueue/spam`)}>Removed</a>
                                    <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${tab === 'edited' ? highlighted : white}
                                  font-bold leading-5 text-[var(--color-neutral-content-strong)]
                                  no-underline hover:bg-[var(--color-secondary-background-selected)] hover:no-underline`}
                                    href="#" onClick={() => navigate(`/r/${name}/about/modqueue/edited`)}>Edited</a>
                                    <a className={ `cursor-pointer
                                 rounded-full px-4 py-3 text-sm ${tab === 'unmoderated' ? highlighted : white}
                                  font-bold leading-5 text-[var(--color-neutral-content-strong)]
                                  no-underline hover:bg-[var(--color-secondary-background-selected)] hover:no-underline`}
                                    href="#" onClick={() => navigate(`/r/${name}/about/modqueue/unmoderated`)}>Unmoderated</a>


                                </div>

                                <div className='mx-auto my-0 box-border flex max-w-[1248px] flex-row justify-center rounded-xl
                 py-5 '>
                                    <div className='w-full min-w-0'>

                                        <div className="mb-3
                                                    flex h-10
                                                    items-center rounded-[8px] bg-[#d2dadd]
                                                    px-4 py-2 text-sm leading-5
                                                    text-[#0f1a1c]"><span>We&apos;re updating mod queue, and you can try it today.
                                                <a href
                                                    // eslint-disable-next-line max-len
                                                    ="https://support.reddithelp.com/hc/en-us/articles/15484440494356-Moderation-Queue"
                                                className="pl-1 text-[#0f1a1c] underline"
                                                target="_blank" rel="noopener noreferrer">
                            Learn more</a></span><a className="ml-auto flex items-center
                            text-sm font-semibold leading-5 no-underline"
                                            href="/mod/queue" target="_blank" rel="noopener noreferrer">
                                                Try it out</a></div>


                                    </div>
                                </div>

                                <div className="flex h-10 min-w-[260px] flex-row items-center">
                                    <div id="mod-insights-tooltip-id"><div id="MODQ--SUBREDDIT_FILTER_DROPDOWN"
                                        className="mr-3 flex cursor-pointer items-center
                                        text-xs font-bold uppercase leading-6
                                        tracking-[0.5px] text-[var(--color-neutral-content-strong)]">All subreddits
                                        <svg className="size-5 align-middle text-xl font-normal leading-5" fill="currentColor" height="16"
                                            viewBox="0 0 20 20"
                                            width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                                        .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
                                        0 1-.442.183Z"></path></svg>
                                    </div></div>
                                    <div id="mod-insights-tooltip-id"><div id="MODQ--SUBREDDIT_FILTER_DROPDOWN"
                                        className="mr-3 flex cursor-pointer items-center
                                        text-xs font-bold uppercase leading-6
                                        tracking-[0.5px] text-[var(--color-neutral-content-strong)]">Newest first
                                        <svg className="size-5 align-middle text-xl font-normal leading-5" fill="currentColor" height="16"
                                            viewBox="0 0 20 20"
                                            width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                                        .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
                                        0 1-.442.183Z"></path></svg>
                                    </div></div>
                                    <div id="mod-insights-tooltip-id"><div id="MODQ--SUBREDDIT_FILTER_DROPDOWN"
                                        className="mr-3 flex cursor-pointer items-center
                                        text-xs font-bold uppercase leading-6
                                        tracking-[0.5px] text-[var(--color-neutral-content-strong)]">Posts and Comments
                                        <svg className="size-5 align-middle text-xl font-normal leading-5" fill="currentColor" height="16"
                                            viewBox="0 0 20 20"
                                            width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                                        .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
                                        0 1-.442.183Z"></path></svg>
                                    </div></div>
                                    <div className="ml-auto flex items-center pr-0"
                                        id="view--layout--FUE"><div className="flex h-8 cursor-pointer items-center rounded-[20px] px-2 py-0">
                                            <button aria-expanded="false" aria-label="View:"
                                                className=" inline-flex items-center justify-center rounded-full  pl-2.5 pr-1.5 text-[#576f76] hover:bg-[#d2dadd] " aria-haspopup="true">

                                                <span className="flex items-center justify-center">

                                                    <span className="flex items-center gap-2">
                                                        <svg fill="currentColor" height="16"
                                                            viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.882 1H2.118A1.12 1.12 0 0 0 1 2.119v15.762A1.119 1.119 0
                                                             0 0 2.118 19h15.764A1.12 1.12 0 0 0 19 17.881V2.119A1.12
                                                             1.12 0 0 0 17.882 1Zm-.132 16.75H2.25v-7.138h15.5v7.138ZM2.25
                                                              9.362V2.25h15.5v7.112H2.25Z"></path>
                                                        </svg></span> </span> <span className=" ml-1 inline-flex">
                                                    <svg fill="currentColor" height="16"
                                                        viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10
                                                             11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z">
                                                        </path> </svg> </span> </button>

                                        </div></div>


                                </div>
                                <div className=" relative  mb-[5px] flex h-8
                                    rounded border border-solid border-[#ccc]
                                     bg-[rgba(255,255,255,0.8)] p-0.5 text-xs font-bold leading-4 text-[#878a8c]
                                    ">
                                    <div className="flex cursor-pointer items-center border-r border-solid
                                         border-r-[#EDEFF1] py-0 pl-1.5 pr-0.5" id="BulkAction--BulkItemFilter">
                                        <button aria-checked="false" className="size-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className=" mr-2 size-4"><path fill="inherit" d="M0,3.34755033 C0,1.49874933 1.5032506,0
 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033
 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20
 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z
 M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325
 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825
 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125
 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075
 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075
 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375
 8.287,15.41825 8.50575,15.1995 Z"></path></svg>

                                        </button>
                                        <svg fill="currentColor" height="16"
                                            viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10
                                                             11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z">
                                            </path> </svg>
                                    </div><div className="my-0 ml-auto mr-[5px] flex items-center text-right">
                                        <span className="text-right">Items 1-1
                                        </span><span className="px-[5px] py-0">•
                                        </span><span className="text-left">
                                                                0 selected</span></div>
                                </div>
                                <Queue name={name} tab={tab}/>
                            </div>


                        </div>
                        <SideInfo />

                    </div>

                </div>


            </div>


        </div>


    );
}
Modqueue.propTypes = {
    name: PropTypes.string,
    tab: PropTypes.string,
};
export {Modqueue};

