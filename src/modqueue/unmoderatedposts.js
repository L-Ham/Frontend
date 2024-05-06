

import React from 'react';
import {Reportbanner} from './reportedbanner';
import {Removedbanner} from './removedbanner';
import propTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} mod post
 */
function Modpost({isremoved, isreported}) {
    return (
        <div className='overflow-hidden rounded rounded-b-none'>
            <div className='relative mb-2.5 cursor-pointer  overflow-hidden rounded border
             border-solid border-[#ccc] bg-[rgba(255,255,255,0.8)] pl-10 pr-4 text-[#878A8C] hover:border-[#1c1c1c]'>
                <div></div>
                <div className='absolute left-0 top-0 box-border
                 flex w-10 flex-col items-center border-l-4 border-solid border-l-transparent py-2 pl-0 pr-1'>
                    <button aria-checked="false" className="size-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" className=" mr-2 size-4">
                            <path fill="inherit" d="M0,3.34755033 C0,1.49874933 1.5032506,0
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


                </div>

                <div id='post_here'>

                </div>

                {isreported &&<Reportbanner />}
                {isremoved && <Removedbanner />}


                <div className="mx-0 my-3 flex flex-row gap-3"><button role="button" tabIndex="0"
                    className="relative box-border flex min-h-[32px] w-auto min-w-[32px]
                    items-center justify-center rounded-full border
                    border-solid  border-transparent bg-[#0079d3] fill-white
                    px-4 py-1 text-center text-xs font-bold leading-[17px]
                    tracking-[unset] text-white"><svg aria-hidden="true" className='size-3'
                        fill="currentColor" height="16"
                        viewBox="0 0 20 20" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15.583a.72.72 0 0 1-.513-.212L1.558
                         9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93
                         10.929a.723.723 0 0 1-.512.212Z"></path>
                    </svg><span className="pl-2">Approve</span></button>

                {!isremoved && <button role="button" tabIndex="0"
                    className="relative box-border flex min-h-[32px] w-auto min-w-[32px]
                    items-center justify-center rounded-full border
                    border-solid  border-[#bdbfc0] bg-[#ffffff] fill-white
                    px-4 py-1 text-center text-xs font-bold leading-[17px]
                    tracking-[unset] text-black"><svg aria-hidden="true" className='size-3'
                        fill="currentColor" height="16"
                        viewBox="0 0 20 20" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.442 2.442-.884-.884L10 9.116 2.442
                        1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10
                        10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                    </svg><span className="pl-2">Remove</span></button>
                }


                {!isreported&& <button role="button" tabIndex="0"
                    className="relative box-border flex min-h-[32px] w-auto min-w-[32px]
                    items-center justify-center rounded-full border
                    border-solid  border-[#bdbfc0] bg-[#ffffff] fill-white
                    px-4 py-1 text-center text-xs font-bold leading-[17px]
                    tracking-[unset] text-black"><svg aria-hidden="true" className='size-3'
                        fill="currentColor" height="16"
                        viewBox="0 0 20 20" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 19.775H1V2.193l.353-.171a10.293 10.293 0 0 1 8.919 0
                        9.054 9.054 0 0 0 7.7.061l.309-.144.385.188a.715.715 0 0 1
                        .334.606V14.79l-.353.17a10.286 10.286 0 0 1-8.919 0 9.033 9.033 0
                        0 0-7.478-.16v4.975Zm3.562-6.956a10.23 10.23 0 0 1 4.46 1.016A9.04
                        9.04 0 0 0 17.75 14V3.531a10.17 10.17 0 0 1-8.022-.384 9.037 9.037
                        0 0 0-7.478-.162v10.468c1.14-.42 2.347-.635 3.562-.634Z"></path>
                    </svg><span className="pl-2">Spam</span></button>
                }


                </div>


            </div>


        </div>

    );
}
Modpost.propTypes = {
    isremoved: propTypes.bool,
    isreported: propTypes.bool,
};


export {Modpost};
