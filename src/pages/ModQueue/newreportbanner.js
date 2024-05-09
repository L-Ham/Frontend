import React from 'react';
import {Newactionentry} from './actionentry';
/**
 *
 * @return {JSX.Element} Reportbanner
 */
function Newreportbanner() {
    const [toggledropdown, settoggledropdown] = React.useState(false);
    const handletoggledropdown = () => {
        settoggledropdown(!toggledropdown);
    };
    return (
        <div className='ml-2 flex w-[calc(100%_-_8px)] flex-col'>
            <div className="mr-4 flex cursor-pointer items-start
         rounded bg-[#ffefcc] px-3 py-2">
                <div className="mr-2 size-7 flex-[0_0_28px]">
                    <div className="relative h-full">
                        <img alt="User avatar" className="box-border size-full
                    rounded-[50%] border
                     border-solid border-[color:var(--newCommunityTheme-line)] object-cover
                    object-center indent-[-9999px] text-[color:var(--newCommunityTheme-body)]"
                        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"/>
                    </div></div><div className="w-full self-center">
                    <p className="text-xs font-bold  text-[color:var(--newRedditTheme-bodyText)]">Reported</p>
                    <p><a className="no-underline"
                        href="https://www.reddit.com/user/3abwareth"
                        target="_blank" rel="noopener noreferrer">u/3abwareth
                    </a> 1 month ago</p></div>

                <button className="m-0 flex flex-[0_0_auto] items-center rounded-sm
                                     border-[none] p-1 text-xs capitalize no-underline" onClick={handletoggledropdown}>
                    <svg aria-hidden="true" className='size-3'
                        fill="currentColor" height="16"
                        viewBox="0 0 20 20" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 19.775H1V2.193l.353-.171a10.293 10.293 0 0 1 8.919 0
                        9.054 9.054 0 0 0 7.7.061l.309-.144.385.188a.715.715 0 0 1
                        .334.606V14.79l-.353.17a10.286 10.286 0 0 1-8.919 0 9.033 9.033 0
                        0 0-7.478-.16v4.975Zm3.562-6.956a10.23 10.23 0 0 1 4.46 1.016A9.04
                        9.04 0 0 0 17.75 14V3.531a10.17 10.17 0 0 1-8.022-.384 9.037 9.037
                        0 0 0-7.478-.162v10.468c1.14-.42 2.347-.635 3.562-.634Z"></path>
                    </svg>
                    <span className="ml-1 whitespace-pre-wrap
                                            pr-0.5 text-left align-middle leading-3">Reported as spam
                    </span>
                    <svg className="size-5 align-middle text-xl font-normal leading-5"
                        fill="currentColor" height="16" viewBox="0 0 20 20" width="16
                                            " xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
 0 1-.442.183Z"></path></svg>
                </button>
            </div>
            {toggledropdown &&
            <div className=" mr-4 rounded-[0_0_4px_4px] border border-solid border-[#edeff1]">


                <h2 className="px-3
                 pb-1 pt-2 text-xs font-normal leading-4
                 text-[#1c1c1c]">Recent actions</h2>

                <Newactionentry label="Approved post" username="3abwareth"
                    imageurl="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"/>
                <Newactionentry label="Removed post" username="3abwareth"
                    imageurl="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"/>
                <Newactionentry label="Locked comments" username="3abwareth"
                    imageurl="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"/>
                <Newactionentry label="Locked comments" username="3abwareth"
                    imageurl="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"/>

            </div>
            }
        </div>
    );
}
export {Newreportbanner};
