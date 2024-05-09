/*eslint-disable*/
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Banbutton() {
    
    return (
        <div className='bg-[rgba(28,28,28,0.9)] items-center box-border
         flex h-full overflow-auto pointer-events-none 
         fixed w-full z-[55] pt-[75px] pb-5 px-[30px] top-0'>
            <div aria-modal="true" class="bg-white border rounded shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]
             pointer-events-auto z-[55] m-auto border-solid
              border-[#EDEFF1]" role="dialog" tabindex="-1">
                <section className='shadow-[0_2_15px_rgba(0,0,0,0.3)] max-w-[538px] min-w-[410px]'>
                <header class="p-4 rounded-tr rounded-tl border-b-[#EDEFF1] border-b border-solid">
                    <div class="flex flex-row">
                        <div class="text-[var(--newCommunityTheme-bodyText)] flex-[1_1_100%] w-full">
                            <div class=" text-[var(--newCommunityTheme-bodyText)] text-base font-medium leading-5">Ban a user: 
                            </div></div><div class="flex-[0_0]">
                                <button class="text-xs font-bold tracking-[0.5px] leading-6 
                                uppercase underline p-0 border-[none]"><svg viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#878A8C]">
                                    <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 
                                    1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 
                                    18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
                                    </svg></button></div></div></header>
                                    

                </section>

              </div>

        </div>
       
       

    );
}
export {Banbutton};
