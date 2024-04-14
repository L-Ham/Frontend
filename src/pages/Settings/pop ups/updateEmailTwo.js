import React from 'react';
import PropTypes from 'prop-types';

// import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * ChatMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function UpdateEmailTwo({id}) {
    return (
        <div className="fixed top-0 z-[55] box-border
        flex size-full items-center overflow-auto
         bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]">
            <div aria-modal="true" className=" pointer-events-auto
             z-[55] m-auto
              rounded border
               border-solid border-[color:var(--newCommunityTheme-line)]
               bg-[color:var(--newCommunityTheme-body)] shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]"
            role="dialog" tabIndex="-1">
                <div className="relative
                     box-border max-w-[432px]
                    border border-solid border-[color:var(--newRedditTheme-line)]
                     bg-[color:var(--newRedditTheme-body)] px-8 py-6">
                    <button className="absolute right-3 top-3 size-5" id = 'b1'>
                        <svg viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 fill-[var(--newRedditTheme-postIcon)]">
                            <polygon fill="inherit" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881
        8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65
        16.495 18.264 18.262 16.497">
                            </polygon>
                        </svg>
                    </button>
                    <div className="flex flex-row flex-nowrap items-center">
                        <div className="mr-2">
                            <div className="flex size-12 items-center
                             justify-center rounded-[50%] fill-[#24a0ed]">
                                <div className="relative">
                                    <svg className="block h-[30px]" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.79,9.16,2.48,3.85A2.49,2.49,0
                         ,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,
                         9.16A3.13,3.13,0,0,1,7.79,9.16Z">
                                        </path>
                                        <path d="M13.09,
                         10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,
                         1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,
                         0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z">

                                        </path>
                                    </svg>
                                    <svg className="absolute -right-0.5 -top-0.5 size-[18px]
                             fill-[#ff4500]"
                                    viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                        <circle r="9" cx="9" cy="9">
                                        </circle>
                                        <path d="m10.4893
                            10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49
                            -.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237
                            -.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271
                            .101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101
                            .089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-
                            .131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-
                            .201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.
                            29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181
                            .29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8
                             3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589
                             -8-8-8z" fill="inherit" fillRule="evenodd"
                                        transform="translate(-1 -1)">
                                        </path>
                                    </svg>
                                </div></div></div>
                        <h2 className="text-[22px]
                                font-medium leading-[26px] text-[color:var(--newRedditTheme-bodyText)]">
                                    Update your email</h2></div>
                    <p className="mt-2 text-base
                                     font-normal leading-5 text-[color:var(--newRedditTheme-bodyText)]">
                                        Update your email
                                     below. There will be a new
                                    verification email sent that you will need to
                                     use to verify this new email.</p>
                    <div className='mt-5'>
                        {/* b1 and 2*/}

                    </div></div></div></div>

    );
}

UpdateEmailTwo.propTypes = {
    id: PropTypes.string.isRequired,
};

export {UpdateEmailTwo};

