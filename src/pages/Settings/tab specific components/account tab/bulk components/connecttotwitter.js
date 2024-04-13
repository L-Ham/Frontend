import React from 'react';

import {ConnectToTwitterButton} from '../buttons/connecttotwitterbutton.js';


/**
 * SettingsGenericItemRight displays a settings item with a title,
 *  description, and a dynamically loaded component to the right.
 * It supports various components like toggles, buttons, and custom menus based on the `thirdComponent` prop.
 *
 * @param {Object} props - Component props
 * @param {string} props.head - The title of the setting item
 * @param {string} props.text - The description of the setting item
 * @param {string} props.thirdComponent - The key for the dynamically loaded component
 * @return {React.Component} A React component representing a generic setting item.
 */
function ConnectToTwitter() {
    return (
        <div className='mb-8 flex flex-row flex-wrap
         justify-between' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mb-[1em] mr-2 flex max-w-full flex-col">
                <div className="flex flex-row items-center">
                    <h3 className="mb-1 flex text-base font-medium leading-5
                    text-[color:var(--newCommunityTheme-bodyText)]">Connect to twitter
                    </h3>
                </div>
                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">
                Connect a Twitter account to enable the choice to tweet your new posts and display a
                 link on your profile. We will never post to Twitter without your permission.
                </p>
            </div>

            <div className="flex grow items-center justify-end">
                <ConnectToTwitterButton/>
            </div>

        </div>

    );
}


export {ConnectToTwitter};
