import React, {useState} from 'react';
import {useToggle} from './togglecontext.js';
import {axiosInstance} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
import PropTypes from 'prop-types';


/**
 * ChatMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function AddSocialLinksTwo({id}) {
    // useState hook to manage the input's state
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    // Correctly using the useToggle hook and destructuring its returned values
    const {displaySocialTwo, toggleSocialTwo} = useToggle();
    const {socialIcon} = useToggle();
    const {socialText} = useToggle();
    const {socialRequestType} = useToggle();
    const {socialId} = useToggle();
    // const {socialRequestType} = useToggle();
    /**
     * Asynchronously updates notification settings using a PATCH request.
     *
     * @param {Object} updatedSettings - The new settings to be updated.
     */
    async function handleUpdateSocial(updatedSettings) {
        // console.log(updatedSettings);
        try {
            await axiosInstance.patch(API_ROUTES.editSocial, updatedSettings);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            // console.error('Failed to update social settings:', error);
        }
    }
    /**
     * Asynchronously updates notification settings using a PATCH request.
     *
     * @param {Object} updatedSettings - The new settings to be updated.
     */
    async function handleAddSocial(updatedSettings) {
        // const {linkId, ...settingsWithoutLinkId} = ;
        // // console.log(linkId);
        // console.log(updatedSettings);
        try {
            await axiosInstance.post(API_ROUTES.editSocial, updatedSettings);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            // console.error('Failed to update social settings:', error);
        }
    }

    /**
 * Handles changes to the input field by updating the component's state with the new value.
 *
 * @param {Event} event - The event triggered by changing the input field.
 */
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    /**
 * Handles changes to the input field by updating the component's state with the new value.
 *
 * @param {Event} event - The event triggered by changing the input field.
 */
    function handleInputChange2(event) {
        setInputValue2(event.target.value);
    }


    /**
 * Handles the click event on the Save button by logging the current input value
 * and toggling the visibility of a social element.
 */
    function handleSaveClick() {
        // console.log(inputValue); // Assuming `inputValue` is accessible in the scope
        toggleSocialTwo(); // Assuming `toggleSocialTwo` is a function defined to toggle the visibility

        if (socialRequestType === 'add') {
            handleAddSocial({'linkOrUsername': 'www.' + socialText + '.com/' + inputValue,
                'appName': socialText,
                'displayText': inputValue2});
        } else {
            handleUpdateSocial({'linkId': socialId, 'linkOrUsername': 'www.' + socialText + '.com/' + inputValue,
                'appName': socialText,
                'displayText': inputValue2});
        }
    }


    return displaySocialTwo ? (
        <div className="pointer-events-none fixed top-0 z-[55]
         box-border flex size-full items-center overflow-auto
          bg-[rgba(28,28,28,0.9)] px-[30px] pb-5 pt-[75px]">
            <div aria-modal="true" className="pointer-events-auto
             z-[55] m-auto rounded border border-solid
              border-[color:var(--newCommunityTheme-line)]
             bg-[color:var(--newCommunityTheme-body)]
              shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]"
            role="dialog" tabIndex="-1">
                <section className="min-w-[410px]
                max-w-[538px]">
                    <header className="rounded-t border-b
                     border-solid p-4 [color:var(--newCommunityTheme-line)]">
                        <div className="flex flex-row">
                            <div className="flex-[0_0]">
                                <button id = 'button6'>
                                    <i className="
                            text-[color:var(--newCommunityTheme-actionIcon)]
                            ">
                                    </i>
                                </button>
                            </div>
                            <div className="w-full flex-[1_1_100%]">
                                <div className="text-center text-xl
                                 font-medium leading-6 text-[color:var(--newRedditTheme-titleText)]
                                 ">Add Social Link
                                </div>
                            </div>
                            <div className="flex-[0_0]">
                                <button id = 'button7'
                                    role="button"
                                    tabIndex="0"
                                    onClick={handleSaveClick} // Attach the event handler to the Save button
                                    className="relative box-border
                                     flex min-h-[32px] w-auto
                                      min-w-[32px] items-center justify-center rounded-full
                                       border-[none] bg-[color:var(--newCommunityTheme-button)]
                                        fill-[var(--newCommunityTheme-body)] px-4 py-1
                                        text-center text-sm font-bold leading-[17px]
                                        tracking-[unset] text-[color:var(--newCommunityTheme-body)]">
                                    Save
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="flex flex-wrap p-4
                     text-[color:var(--newCommunityTheme-bodyText)]">
                        <li className="mx-0.5 my-1.5
                         mr-2 flex h-5 cursor-pointer
                          items-center whitespace-nowrap
                           rounded-full bg-[color:var(--newRedditTheme-flair)]
                            px-3 py-2.5 text-xs font-bold leading-4
                             text-[color:var(--newRedditTheme-bodyText)]" id = 'list1'>
                            <img className="mr-2"
                                src={socialIcon}
                                alt="Instagram"/>
                            {socialText}
                        </li>
                        <input id = 'input1'
                            placeholder="@username"
                            className="mx-0.5 my-1.5 box-border
                            block h-9 w-full rounded border
                             border-solid border-[color:var(--newCommunityTheme-line)]
                             bg-[color:var(--newCommunityTheme-body)] px-2 py-0
                              text-sm font-normal leading-[21px]
                              text-[color:var(--newCommunityTheme-actionIcon)]"
                            value={inputValue}
                            onChange={handleInputChange} // Attach the event handler to the input
                        />
                        <input id = 'input2'
                            placeholder="@display text"
                            className="mx-0.5 my-1.5 box-border
                            block h-9 w-full rounded border
                             border-solid border-[color:var(--newCommunityTheme-line)]
                             bg-[color:var(--newCommunityTheme-body)] px-2 py-0
                              text-sm font-normal leading-[21px]
                              text-[color:var(--newCommunityTheme-actionIcon)]"
                            value={inputValue2}
                            onChange={handleInputChange2} // Attach the event handler to the input
                        />
                        <div className="mx-0.5 my-1.5
                         text-xs font-normal leading-4
                         text-[color:var(--newRedditTheme-errorText)]">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    ) : null;
}

AddSocialLinksTwo.propTypes = {
    id: PropTypes.string,
};

export {AddSocialLinksTwo};
