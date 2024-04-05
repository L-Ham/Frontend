import React from 'react';
import PropTypes from 'prop-types';

import {LanguagesMenu} from '../tab specific components/account tab/menus/languagesmenu';
import {GenderMenu} from '../tab specific components/account tab/menus/gendermenu';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/connecttotwitterbutton';
import {ChangeButton} from '../general components/buttons/changebutton';
import {AppleButton} from '../tab specific components/account tab/buttons/applebutton';
import {ToggleButton} from '../general components/buttons/togglebutton';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/deleteaccountbutton';
import {MarkAsReadButton} from '../general components/buttons/markasreadbutton';
import {RedditMenu} from '../tab specific components/feed tab/redditmenu';
import {DropDownMenu} from '../tab specific components/chats tab/dropdownmenu';


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
function SettingsGenericItemRight({head, text, thirdComponent}) {
    return (
        <div className='mb-8 flex flex-row flex-wrap' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mr-2 flex max-w-[80%] flex-col">
                <div className="flex flex-row items-center">
                    <h3 className="mb-1 flex text-base font-medium leading-5
                    text-[color:var(--newCommunityTheme-bodyText)]">{head}</h3>
                </div>
                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">{text}</p>
            </div>
            <div className="flex grow items-center justify-end">
                <div className="relative float-right">
                    {thirdComponent === 'Change' && <ChangeButton />}
                    {thirdComponent === 'GenderMenu' && <GenderMenu />}
                    {thirdComponent === 'Languages' && <LanguagesMenu />}
                    {thirdComponent === 'Twitter' && <ConnectToTwitterButton />}
                    {thirdComponent === 'Apple' && <AppleButton />}
                    {thirdComponent === 'Toggle' && <ToggleButton />}
                    {thirdComponent === 'Delete' && <DeleteAccountButton />}
                    {thirdComponent === 'mr' && <MarkAsReadButton />}
                    {thirdComponent === 'rm' && <RedditMenu />}
                    {thirdComponent === 'chatMenu' && <DropDownMenu />}
                </div>
            </div>
        </div>

    );
}

SettingsGenericItemRight.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thirdComponent: PropTypes.string.isRequired,
};

export {SettingsGenericItemRight};
