import React from 'react';


/**
 * Provides an interface for selecting a language setting.
 *
 * This component allows users to choose their preferred display language for the interface.
 * It's part of a beta feature where the selection does not affect user-generated content.
 * The chosen language only applies to the UI elements of the platform.
 *
 * @return {JSX.Element} The LanguageSettings component.
 */
export function LocationCustomization() {
    /**
   * Handles the change in language selection.
   *
   * @param {React.ChangeEvent<{ value: unknown }>} event - The change event on the select element.
   */


    return (
        <div className='mb-8 flex flex-row flex-wrap' style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <div className="mr-2 flex max-w-[80%] flex-col">
                <label htmlFor="lang"></label>
                <h3 className="mb-1 flex text-base font-medium leading-5
                        text-[color:var(--newCommunityTheme-bodyText)]">Location customization
                </h3>


                <p className="text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">
                    Specify a location to customize your recommendations and
                    feed. Reddit does not track your precise geolocation data. Learn more.
                </p>
            </div>

            <div className='mb-4 w-0 basis-full'></div>
            <div className='mb-8 flex flex-row flex-wrap pl-8'>
                <span className='relative inline border border-solid border-transparent
                     bg-[0] fill-[var(--newCommunityTheme-button)] text-[color:var(--newCommunityTheme-button)]'>
                    <select id="lang" className="appearance-none pl-1 pr-5 text-base font-medium leading-5
                    hover:bg-[var(--newCommunityTheme-buttonAlpha05)]" style={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                    }}>
                        <option value="ZZ">Use approximate location (based on IP)</option>
                        <option value="XZ">No location specified</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>

                    </select>
                    <svg className="ml-0.5
                    inline-block
                    size-5
                    fill-[var(--newCommunityTheme-actionIcon)] align-middle
                    active:bg-[var(--newCommunityTheme-buttonAlpha10)]"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"></path>
                    </svg>
                </span>
            </div>
        </div>
    );
}

