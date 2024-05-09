import React from 'react';
import {CloseChatButton} from './closechatbutton';
import {ExitChats} from './exitchats';
import {SettingsButton} from './settingsbutton';
import PropTypes from 'prop-types';
import {ExpandChatsButton} from './expandchats';

// Disable eslint maxline length
/* eslint-disable max-len */

/**
 * The chat preview component.
 * @component
 * @example
 * // Render the chat preview.
 * <TopBar name="John_Doe" />
 * @param {string} name - The name to display in the TopBar.
 * @return {JSX.Element} The chat preview component.
 */
function TopBar({name = 'Chat', minimize, expand, showing, full}) {
    return (
        <header className="box-border flex h-11 min-h-11 w-full items-center gap-1 border-0 border-b border-solid border-b-[color:var(--color-tone-5)] px-2">
            <div className="mr-auto max-w-[calc(100%-40px)] pl-2">
                <div className="line-clamp-1 font-sans font-semibold leading-5" title={name}>
                    {name}
                </div>
            </div>

            <div className="flex flex-nowrap">
                <SettingsButton />
                <div>
                    {!full &&<CloseChatButton minimizeChat = {minimize}/>}
                    <ExpandChatsButton expandChats = {expand} />
                    <ExitChats show ={showing} />
                </div>
            </div>
        </header>
    );
}


// write prop validation
TopBar.propTypes = {
    name: PropTypes.string,
    minimize: PropTypes.func,
    expand: PropTypes.func,
    showing: PropTypes.func,
    full: PropTypes.bool,
};
export {TopBar};
