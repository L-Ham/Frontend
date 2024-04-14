import React from 'react';
import {useToggle} from './togglecontext.js';
import PropTypes from 'prop-types';

// import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * ChatMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function AddSocialLinks({id}) {
    const {displaySocial} = useToggle();
    const {toggleSocial} = useToggle();
    const {toggleSocialTwo} = useToggle();
    const {setSocialIcon} = useToggle();
    const {setSocialText} = useToggle();
    const {setSocialRequestType} = useToggle();
    return displaySocial? (
        <div className="fixed top-0 z-[55] box-border
         flex size-full items-center overflow-auto
          bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]">
            <div aria-modal="true" className=" pointer-events-auto
             z-[55] m-auto
              rounded border
               border-solid border-[color:var(--newCommunityTheme-line)]
               bg-[color:var(--newCommunityTheme-body)] shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]"
            role="dialog" tabIndex="-1">
                <section className="min-w-[410px] max-w-[538px]">
                    <header className="rounded-t
                     border-b border-solid border-b-[color:var(--newCommunityTheme-line)] p-4">
                        <div className="flex flex-row">
                            <div className="w-full flex-[1_1_100%] text-[color:var(--newCommunityTheme-bodyText)]">
                                <div className="text-center text-xl
                                font-medium leading-6
                                text-[color:var(--newRedditTheme-titleText)]">Add Social Link
                                </div>
                            </div>
                            <div className="flex-[0_0]" style={{flexBasis: '16px'}}>
                                <button onClick = {toggleSocial}>
                                    <i className="text-[color:var(--newCommunityTheme-actionIcon)]">X
                                    </i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="flex flex-wrap p-4 text-[color:var(--newCommunityTheme-bodyText)]">
                        <li onClick={() => {
                            toggleSocialTwo();
                            setSocialIcon('https://www.redditstatic.com/desktop2x/img/social-links/custom.png');
                            setSocialText('Custom URL');
                            setSocialRequestType('add');
                        }} className="mx-0.5 my-1.5 mr-2 flex h-5 cursor-pointer
                        items-center whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)]
                         px-3 py-5 text-xs font-bold leading-4 text-[color:var(--newRedditTheme-bodyText)]">
                            <img className=" mr-2"
                                src="https://www.redditstatic.com/desktop2x/img/social-links/custom.png"/>
                                Custom URL
                        </li>
                        <li id = 'button4' onClick={() => {
                            toggleSocialTwo();
                            setSocialIcon('https://www.redditstatic.com/desktop2x/img/social-links/reddit.png');
                            setSocialText('Reddit');
                            setSocialRequestType('add');
                        }} className="mx-0.5 my-1.5 mr-2 flex h-5 cursor-pointer
                        items-center whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)]
                         px-3 py-5 text-xs font-bold leading-4 text-[color:var(--newRedditTheme-bodyText)]">
                            <img className=" mr-2"
                                src="https://www.redditstatic.com/desktop2x/img/social-links/reddit.png"/>Reddit
                        </li>
                        <li id = 'button3' onClick={() => {
                            toggleSocialTwo();
                            setSocialIcon('https://www.redditstatic.com/desktop2x/img/social-links/instagram.png');
                            setSocialText('Instagram');
                            setSocialRequestType('add');
                        }} className="mx-0.5 my-1.5 mr-2 flex h-5 cursor-pointer
                        items-center whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)]
                         px-3 py-5 text-xs font-bold leading-4
                         text-[color:var(--newRedditTheme-bodyText)]">
                            <img className=" mr-2"
                                src="https://www.redditstatic.com/desktop2x/img/social-links/instagram.png"/>
          Instagram</li>
                        <li id = 'button1' onClick={() => {
                            toggleSocialTwo();
                            setSocialIcon('https://www.redditstatic.com/desktop2x/img/social-links/twitter.png');
                            setSocialText('Twitter');
                            setSocialRequestType('add');
                        }} className="mx-0.5 my-1.5 mr-2 flex h-5 cursor-pointer
                        items-center whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)]
                         px-3 py-5 text-xs font-bold leading-4
                          text-[color:var(--newRedditTheme-bodyText)]">
                            <img className=" mr-2"
                                src="https://www.redditstatic.com/desktop2x/img/social-links/twitter.png"/>Twitter
                        </li>
                        <li id = 'button2' onClick={() => {
                            toggleSocialTwo();
                            setSocialIcon('https://www.redditstatic.com/desktop2x/img/social-links/tiktok.png');
                            setSocialText('TikTok');
                            setSocialRequestType('add');
                        }} className="mx-0.5 my-1.5 mr-2 flex h-5 cursor-pointer
                        items-center whitespace-nowrap
                        rounded-full bg-[color:var(--newRedditTheme-flair)]
                         px-3 py-5 text-xs font-bold leading-4
                          text-[color:var(--newRedditTheme-bodyText)]">
                            <img className=" mr-2"
                                src="https://www.redditstatic.com/desktop2x/img/social-links/tiktok.png"/>TikTok
                        </li>
                    </div>
                </section>
            </div>
        </div>) : null;
}

AddSocialLinks.propTypes = {
    id: PropTypes.string,
};

export {AddSocialLinks};

