import React from 'react';
import PropTypes from 'prop-types';

/**
 * Provides an interface for selecting a language setting.
 *
 * This component allows users to choose their preferred display language for the interface.
 * It's part of a beta feature where the selection does not affect user-generated content.
 * The chosen language only applies to the UI elements of the platform.
 *
 * @return {JSX.Element} The LanguageSettings component.
 */
export function LanguageSettings({id}) {
    /**
   * Handles the change in language selection.
   *
   * @param {React.ChangeEvent<{ value: unknown }>} event - The change event on the select element.
   */


    return (
        <div className='mb-8 flex flex-row flex-wrap' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mr-2 flex max-w-[80%] flex-col">

                <label htmlFor="lang">
                    <h3 className="mb-1 flex text-base font-medium leading-5
                        text-[color:var(--newCommunityTheme-bodyText)]">Display language
                        <span className="text-[#ff4500]">(beta)
                        </span>
                    </h3>
                </label>
                <label/>
                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">
            Select the language you&apos;d like to experience the Reddit interface
            in. Note that this won&apos;t change the language of user-generated content
            and that this feature is still in development so translations
            and UI are still under review.
                </p>
            </div>

            <div className='mb-4 w-0 basis-full'>

            </div>
            <div className='mb-8 flex flex-row flex-wrap pl-8'>
                <span className='relative inline border border-solid border-transparent
                     bg-[0] fill-[var(--newCommunityTheme-button)] text-[color:var(--newCommunityTheme-button)]
                     hover:bg-[var(--newCommunityTheme-buttonAlpha05)]'>
                    <select id="lang" className="appearance-none border border-solid border-transparent pl-1 pr-5
                     text-base font-medium
                     leading-5 hover:bg-[var(--newCommunityTheme-buttonAlpha05)] focus:outline-none" style={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                    }}>
                        <option id = 'o1' value="de-DE">Deutsch</option>
                        <option id = 'o2' value="en-US">English (US)</option>
                        <option id = 'o3' value="es-ES">Español (ES)</option>
                        <option id = 'o4' value="es-MX">Español (MX)</option>
                        <option id = 'o5' value="fr-FR">Français</option>
                        <option id = 'o6' value="it-IT">Italiano</option>
                        <option id = 'o7' value="pt-BR">Português (BR)</option>
                        <option id = '08' value="pt-PT">Português (PT)</option></select>
                    <svg className="ml-0.5
                    inline-block
                    size-5
                    fill-[var(--newCommunityTheme-actionIcon)] align-middle
                    active:bg-[var(--newCommunityTheme-buttonAlpha10)]"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85">
                        </path>
                    </svg>
                </span>
            </div>
        </div>

    );
}

LanguageSettings.propTypes = {
    id: PropTypes.string,
};
