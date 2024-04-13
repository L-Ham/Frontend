import React from 'react';

import {useToggle} from './togglecontext.js';

// write jsdoc

/**
 * GenericPopup function component for displaying a generic popup with a title, description, and action buttons.
 * This component is used to display a generic popup with a title, description, and action buttons.
 * The popup can be used to confirm an action, provide information, or prompt the user for input.
 * The popup includes a title, description, and two action buttons: "Cancel" and "Continue".
 * The "Cancel" button closes the popup, while the "Continue" button performs the specified action.
 * The popup can be customized with different titles, descriptions, and actions as needed.
 *
 * @return {React.Component} The GenericPopup component
 *  displaying a generic popup with a title, description, and action buttons.
 *
 * @example
 * return (
 *  <GenericPopup />
 * );
 *
 * */
function NfswPopUp() {
    const {displayNfsw} = useToggle();

    return displayNfsw ? (
        <div className="fixed top-0 z-[55]
        box-border flex size-full items-center overflow-auto bg-[rgba(28,28,28,0.9)]
        px-[30px] pb-5 pt-[75px]">
            <div aria-modal="true"
                className="pointer-events-auto
                 z-[55] m-auto
                  rounded border
                   border-solid border-[color:var(--newCommunityTheme-line)]
                    bg-[color:var(--newCommunityTheme-body)]
                     shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]"
                role="dialog" tabIndex="-1">
                <div className="relative">
                    <button className="absolute right-4 top-4 size-4">
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            className=" size-4 fill-[var(--newCommunityTheme-actionIcon)]">
                            <polygon fill="inherit" points="11.649 9.882 18.262 3.267
                             16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114
                             9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495
                              18.264 18.262 16.497">

                            </polygon>
                        </svg>
                    </button>
                    <header className="rounded-t
                         border-b border-solid border-b-[color:var(--newCommunityTheme-line)] p-4">
                        <h2 className="text-base font-medium leading-5
                         text-[color:var(--newRedditTheme-bodyText)]">SWITCH ACCOUNT TO SFW
                        </h2>
                    </header>
                    <div className="p-4 text-[color:var(--newCommunityTheme-bodyText)]">
                        <p className="mb-4
                         max-w-[500px] text-sm font-normal
                         leading-[21px] text-[color:var(--newRedditTheme-bodyText)]">If your account contains
                            <a href="https://www.redditinc.com/policies/content-policy#text-content3"
                                className="text-[color:var(--newRedditTheme-linkText)] underline">NSFW content
                            </a>
                                     (contains nudity, pornography, profanity or inappropriate
                                      content for those under 18) and it’s not set to NSFW,
                                      this will result in actions up to and including suspension
                                      of your account.
                        </p>
                        <div className="flex justify-end">
                            <button role="button" tabIndex="0"
                                className="relative box-border
                                 flex min-h-[32px]
                                 w-auto min-w-[32px] items-center justify-center rounded-full border border-solid
                                 border-[color:var(--newCommunityTheme-button)]
                                  fill-[var(--newCommunityTheme-button)] px-4
                                 py-1
                                  text-center text-sm
                                  font-bold uppercase leading-8 tracking-[0.5px]
                                   text-[color:var(--newCommunityTheme-button)]">Cancel
                            </button>
                            <button role="button" tabIndex="0"
                                className=" relative border border-solid
                                border-[color:var(--newCommunityTheme-button)]
                                 fill-[var(--newCommunityTheme-button)] text-[color:var(--newCommunityTheme-button)]">
                                            I UNDERSTAND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>) :null;
}

export {NfswPopUp};
