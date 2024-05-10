/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {ConnectToGoogle} from '../tab specific components/account tab/buttons/connecttogoogle.js';
import {LanguagesMenu} from '../tab specific components/account tab/menus/languagesmenu.js';
import {GenderMenu} from '../tab specific components/account tab/menus/gendermenu.js';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/connecttotwitterbutton.js';
import {ChangeButton} from '../general components/buttons/changebutton.js';

import {ToggleButton} from '../general components/buttons/togglebutton.js';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/deleteaccountbutton.js';
import {MarkAsReadButton} from '../general components/buttons/markasreadbutton.js';
import {RedditMenu} from '../tab specific components/feed tab/redditmenu.js';
import {ChatMenu} from '../tab specific components/chats tab/chatmenu.js';
import {PrivateMenu} from '../tab specific components/chats tab/privatemenu.js';
import {ClearHistory} from '../tab specific components/profile tab/buttons/clearhistory.js';
import {ModerationMenu} from '../tab specific components/account tab/menus/moderationmenu.js';
import {ModerationMenuTwo} from '../tab specific components/account tab/menus/moderationmenutwo.js';


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
function SettingsGenericItemRight({head, text, thirdComponent, f, prop, genericFunction, menu, item, id}) {
    return (
        <div className='mb-8 flex flex-row flex-wrap' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mr-2 flex max-w-[80%] flex-col">
                <div className="flex flex-row items-center">
                    <h3 className="mb-1 flex text-base font-medium leading-5
                    text-[color:var(--newCommunityTheme-bodyText)]">{head}
                    </h3>
                </div>
                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">{text}
                </p>
            </div>
            <div className="flex grow items-center justify-end">
                <div className="relative float-right">
                    {thirdComponent === 'Change' && <ChangeButton id={id} />}
                    {thirdComponent === 'GenderMenu' && <GenderMenu id={id} func = {f} init = {item} />}
                    {thirdComponent === 'mm' && <ModerationMenu  />}
                    {thirdComponent === 'mm2' && <ModerationMenuTwo  />}
                    {thirdComponent === 'Languages' && <LanguagesMenu id={id} />}
                    {thirdComponent === 'Twitter' && <ConnectToTwitterButton id={id} />}
                    {thirdComponent === 'Apple' && <ConnectToGoogle id={id} />}
                    {thirdComponent === 'Toggle' && <ToggleButton id={id} func = {f} init = {prop} />}
                    {thirdComponent === 'Delete' && <DeleteAccountButton id={id} />}
                    {thirdComponent === 'mr' && <MarkAsReadButton id={id} />}
                    {thirdComponent === 'rm' && <RedditMenu id={id} list = {menu} changeVal={genericFunction}
                        changedItem = {item} init = {prop} /> }
                    {thirdComponent === 'chatMenu' && <ChatMenu id={id} init = {item} func = {genericFunction} />}
                    {thirdComponent === 'privMenu' && <PrivateMenu id={id} init = {item} func = {genericFunction} />}
                    {thirdComponent === 'clearhistory' && <ClearHistory id={id} />}
                </div>
            </div>
        </div>

    );
}

SettingsGenericItemRight.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string,
    thirdComponent: PropTypes.string.isRequired,
    f: PropTypes.func,
    prop: PropTypes.any,
    genericFunction: PropTypes.func,
    menu: PropTypes.array,
    item: PropTypes.string,
    id: PropTypes.string,
};

export {SettingsGenericItemRight};
