import React from 'react';
/**
 *
 * @return {JSX.Element} Reportbanner
 */
function Approvedbanner() {
    return (

        <div id='report' className='flex min-h-[40px] flex-row items-center

                overflow-y-visible rounded-md bg-[#daf6df] '>
            <div className=' ml-2 flex w-[calc(100%_-_8px)] flex-col'>
                <div className='cursor-pointer '>
                    <div className='flex w-full flex-col'>
                        <div className='w-full self-center'>


                            <div className="flex w-full flex-row justify-between">


                                <p className="text-xs font-bold text-[var(--newCommunityTheme-bodyText)]">

                                    Approved</p><button className="m-0 flex flex-[0_0_auto] items-center rounded-sm
                                     border-[none] p-1 text-xs capitalize no-underline">


                                    <svg className="size-5 align-middle text-xl font-normal leading-5"
                                        fill="currentColor" height="16" viewBox="0 0 20 20" width="16
                                            " xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
 0 1-.442.183Z"></path></svg>
                                </button>

                            </div>
                            <p className='text-xs text-[var(--newCommunityTheme-bodyText)]'>
                            This post was approved
                            </p>


                        </div>


                    </div>

                </div>


            </div>


        </div>

    );
}
export {Approvedbanner};
