import React from 'react';

// import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * ChatMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function ChangesSaved() {
    // const [selection, setSelection] = useState('');

    // /**
    //  * Handles changing the selected gender identity from the dropdown menu.
    //  * Updates the component's state with the new selection and logs the selection to the console.
    //  *
    //  * @param {Object} event - The event object representing the change event on the select input.
    //  */
    // function handleChangeGender(event) {
    //     setSelection(event.target.value);
    //     console.log(`${event.target.value} is now selected`);

    //     // alert(`${event.target.value} is now selected`);
    // }

    return (
        <div className="fixed inset-x-0 bottom-0
        z-[200] m-auto flex w-0 flex-col items-center justify-center">
            <div data-testid="toaster"
                className="relative mb-3 box-border
                 flex min-h-[52px] w-[476px]
                 translate-y-0 scale-100 items-center rounded
                  border border-solid border-[color:var(--newCommunityTheme-actionIcon)]
                   pl-2 opacity-100 shadow-[0_2px_15px_0_rgba(0,0,0,0.3)] transition-[padding] duration-[0.3s]"
                style={{
                    'opacity': 1,
                    'x': '1px',
                    'y': '0px',
                    'transform': 'translateY(0px) scale(1, 1)',
                    '--Toaster-indicatorColor': '#24A0ED',

                }}>
                <div className="flex grow items-center">
                    <svg className="mb-[3px] ml-3 mr-0 mt-0 h-[25px] w-6
                    " viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000" d="M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-
                    .8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7
                    -.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1
                     1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2
                     .1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4
                     -.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9
                     -2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z">
                        </path>
                        <path fill="#FFF"
                            d="M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.
                      3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9
                       2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.
                       1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2
                        2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1
                        -.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9
                        -2.2-4.4z">
                        </path>
                        <path fill="#000" d="M10.1 15.4s-.3-.1
                        -.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2
                        -.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1
                        -.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0
                        -.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3
                        -.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1
                        -.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.
                        9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5
                        c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1
                         1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7
                         1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v
                         -.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-
                         .4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-
                         .8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s
                         .6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z">
                        </path>
                        <path fill="#FFF"
                            d="M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-
                          .5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z">
                        </path>
                    </svg>
                    <span aria-live="assertive" className="mx-3 my-0 flex-1
                     text-sm
                      font-normal leading-[21px] text-[color:var(--newCommunityTheme-bodyText)]"
                    style = {{fontFamily: 'Noto Sans, Arial, sans-serif'}}>
                            Changes saved
                    </span>
                </div>
                <div className="mr-2 flex items-center whitespace-nowrap">
                </div>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    className=" absolute left-1
                     size-4 cursor-pointer fill-[var(--newCommunityTheme-body)] opacity-0 transition-opacity
                      duration-[0.3s]">
                    <polygon fill="inherit" points="11.649 9.882
                                  18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114
                                   9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262
                                    16.497">
                    </polygon>
                </svg>
            </div>
        </div>
    );
}

export {ChangesSaved};

