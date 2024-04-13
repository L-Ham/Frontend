import React from 'react';
import {useToggle} from './togglecontext.js';
// import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * ChatMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function ConnectWithGoogle() {
    const {displayConnectToGoogle} = useToggle();
    const {toggleConnectToGoogle} = useToggle();
    return displayConnectToGoogle ?(
        <div className="fixed inset-0 z-50 flex size-full items-center
        justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
            <div className="relative rounded-lg bg-white p-6 shadow-xl md:mx-auto md:max-w-md">
                <div className="mb-4 flex items-center">
                    {/* SVG icon */}
                    <svg className="EnvelopeIcon mr-2 size-6 text-gray-700"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,
            2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"></path>
                        <path d="M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,
            0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,
            0,0,0,6.18,0Z"></path>
                    </svg>
                    {/* Text next to the icon */}
                    <h2 className="text-xl font-bold text-gray-700">Connect your Google Account</h2>
                </div>
                {/* Close button */}
                <button onClick={toggleConnectToGoogle} className="absolute right-0 top-0
                 mr-4 mt-4 text-lg font-semibold text-gray-700">
          &times;
                </button>
                <p className="text-gray-600">To continue, confirm your password and sign in with Google.</p>
                {/* Form */}
                <form className="mt-4 space-y-6">
                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium
             text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" className="block w-full
             rounded-lg border border-gray-300 bg-gray-50
              p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="PASSWORD" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="w-full rounded-lg
             bg-blue-600 px-5 py-2.5
             text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4
              focus:ring-blue-300 sm:w-auto">Continue</button>
                    </div>
                </form>
            </div>
        </div>

    ):null;
}

export {ConnectWithGoogle};

