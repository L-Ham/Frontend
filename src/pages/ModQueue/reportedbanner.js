import React from 'react';
/**
 *
 * @return {JSX.Element} Reportbanner
 */
function Reportbanner() {
    return (

        <div id='report' className='flex min-h-[40px] flex-row items-center

                overflow-y-visible rounded-md bg-[rgba(255,176,0,0.2)] '>
            <div className=' ml-2 flex w-[calc(100%_-_8px)] flex-col'>
                <div className='cursor-pointer '>
                    <div className='flex w-full flex-col'>
                        <div className='w-full self-center'>


                            <div className="flex w-full flex-row justify-between">


                                <p className="text-xs font-bold text-[#1c1c1c]">

                                    1 Report</p><button className="m-0 flex flex-[0_0_auto] items-center rounded-sm
                                     border-[none] p-1 text-xs capitalize no-underline">
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
                                            pr-0.5 text-left align-middle leading-3">ignore reports
                                    </span>
                                    <svg className="size-5 align-middle text-xl font-normal leading-5"
                                        fill="currentColor" height="16" viewBox="0 0 20 20" width="16
                                            " xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
 0 1-.442.183Z"></path></svg>
                                </button>

                            </div>
                            <p className='text-xs text-[#1c1c1c]'>
                        Reported as Spam
                            </p>


                        </div>


                    </div>

                </div>


            </div>


        </div>

    );
}
export {Reportbanner};
