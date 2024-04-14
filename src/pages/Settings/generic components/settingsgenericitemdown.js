import React from 'react';
import PropTypes from 'prop-types';


import {GenderMenu} from '../tab specific components/account tab/menus/gendermenu.js';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/connecttotwitterbutton.js';
import {ChangeButton} from '../general components/buttons/changebutton.js';
import {AppleButton} from '../tab specific components/account tab/buttons/applebutton.js';
import {ToggleButton} from '../general components/buttons/togglebutton.js';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/deleteaccountbutton.js';
import {LanguagesMenu} from '../tab specific components/account tab/menus/languagesmenu.js';
import {DisplayNameTextBox} from '../tab specific components/profile tab/text boxes/displaynametextbox.js';
import {ResizableTextArea} from '../tab specific components/profile tab/text boxes/resizabletextarea.js';
import {DoubleDropZone} from '../tab specific components/profile tab/image dropzones/doubledropzone.js';
import {BlockUserComponent} from '../tab specific components/safety and privacy tab/blockusercomponent.js';

import {SocialContainer} from '../tab specific components/profile tab/addsociallinks/socialcontainer.js';

/**
 * SettingsGenericItemDown function component displays a settings
 *  item with a title, description, and a dynamically rendered
 * component based on the `thirdComponent` prop. Designed for
 *  settings that require more detailed information or interaction, presented in a columnar layout.
 *
 * @param {Object} props - Component props.
 * @param {string} props.head - The title of the setting item.
 * @param {string} props.text - The description of the setting item.
 * @param {string} props.thirdComponent - Identifier for the third component to render dynamically.
 * @return {React.Component} The rendered component for a generic settings item.
 */
function SettingsGenericItemDown({head, text, thirdComponent, prop, genericFunction, id}) {
    /**
     * Handles the change email button click event.
     */
    function handleChangeEmail() {
        console.log('Change email button clicked');
    }
    return (
        <div className = 'mb-8 flex flex-col flex-wrap' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mr-2 flex max-w-[80%] flex-col">
                <div className="flex flex-row items-center">
                    <h3 className="mb-1 flex text-base
                     font-medium leading-5 text-[color:var(--newCommunityTheme-bodyText)]">{head}
                    </h3>
                </div>
                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">{text}
                </p>
            </div>
            <div className='mt-3 flex grow flex-col items-start justify-end'>
                {thirdComponent === 'Change' && <ChangeButton onClick={handleChangeEmail} id={id} />}
                {thirdComponent === 'GenderMenu' && <GenderMenu id={id} />}
                {thirdComponent === 'Languages' && <LanguagesMenu id={id}/>}
                {thirdComponent === 'Twitter' && <ConnectToTwitterButton id={id} />}
                {thirdComponent === 'Apple' && <AppleButton id={id} />}
                {thirdComponent === 'Toggle' && <ToggleButton id={id} />}
                {thirdComponent === 'Delete' && <DeleteAccountButton id={id} />}
                {thirdComponent === 'text30' && <DisplayNameTextBox id={id}
                    functio = {genericFunction} initialText={prop} />}
                {thirdComponent === 'text200' && <ResizableTextArea id={id} maxCharacters={200}
                    functio = {genericFunction} initialText={prop} />}
                {thirdComponent === '2images' && <DoubleDropZone id={id} />}
                {thirdComponent === 'block' && <BlockUserComponent id={id} />}
                {thirdComponent === 'social' && <SocialContainer id={id} initialList = {prop} />}
            </div>

        </div>


    );
}

SettingsGenericItemDown.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string,
    thirdComponent: PropTypes.string.isRequired,
    prop: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string, // Add other types as necessary
    ]),
    toggleF: PropTypes.func,
    genericFunction: PropTypes.func,
    id: PropTypes.string,
};

export {SettingsGenericItemDown};
