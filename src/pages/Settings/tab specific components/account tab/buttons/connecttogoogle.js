import React from 'react';
import {useToggle} from '../../../pop ups/togglecontext.js';
import PropTypes from 'prop-types';
/**
 * AppleButton function component creates a styled button intended to represent or initiate
 * a connection with Apple services. Upon clicking the button, a log message is displayed in
 * the console. This component demonstrates how to incorporate SVG graphics (in this case, an
 * Apple logo) directly within React component style definitions.
 *
 * @return {React.Component} A button with an Apple logo, styled to match Apple's branding.
 */
function ConnectToGoogle({id}) {
    /**
     * Handles click events on the button, logging a confirmation message to the console.
     * This function serves as a placeholder for actual logic to connect to Apple services.
     */
    const {toggleConnectToGoogle} = useToggle();

    /**
     * handleClick function to be executed when the button is clicked.
     * Logs a message to the console indicating that the button has been clicked.
     * This placeholder function can be expanded to include more complex logic,
     * such as initiating state changes or triggering application-specific actions.
     */
    function handleClick() {
        // console.log('Change Button clicked');
        toggleConnectToGoogle();
        // alert('Change Button clicked');
    }


    return (
        <button onClick={handleClick} id = {'google' + id} className='relative box-border
         flex min-h-[32px] w-auto
          min-w-[195px] max-w-full items-center justify-center
          whitespace-pre-wrap rounded-full border border-[#4286f5]
          bg-[var(--newCommunityTheme-body)]  fill-[var(--newCommunityTheme-body)] px-4 py-1 text-center text-sm
          font-bold leading-[17px] tracking-[unset] text-[color:var(--newCommunityTheme-metaText)]'>
            <span className='ml-[18px] max-h-[51px]
             overflow-hidden text-ellipsis whitespace-normal leading-[17px]'>
                <svg className="absolute bottom-0 left-2 h-full w-[18px] flex-none" viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        clipRule="evenodd" d="M17.64 9.20456C17.64 8.56637 17.5827
                   7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009
                    12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64
                     11.9455 17.64 9.20456V9.20456Z" fill="#4285F4">

                    </path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 18C11.43
                      18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418
                      14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182
                       12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832
                       5.48182 18 9 18V18Z" fill="#34A853">
                    </path>
                    <path fillRule="evenodd"
                        clipRule="evenodd" d="M3.96409 10.71C3.78409 10.17 3.68182 9.59319
                        3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409
                         7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774
                          0 9.00001C0 10.4523 0.347727 11.8268 0.957273
                           13.0418L3.96409 10.71V10.71Z" fill="#FBBC05">
                    </path>
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M9 3.57955C10.3214 3.57955 11.5077 4.03364
                             12.4405 4.92545L15.0218 2.34409C13.4632 0.891818
                             11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275
                              4.95818L3.96409 7.29C4.67182 5.16273 6.65591
                               3.57955 9 3.57955V3.57955Z" fill="#EA4335">
                    </path>
                </svg>
                Connect to Google
            </span>

        </button>


    );
}

ConnectToGoogle.propTypes = {
    id: PropTypes.string.isRequired,
};

export {ConnectToGoogle};

