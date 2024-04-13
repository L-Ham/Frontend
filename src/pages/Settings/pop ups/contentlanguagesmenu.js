import React from 'react';
import PropTypes from 'prop-types';

// import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * ChatMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function ContentLanguages({onClose}) {
    return (
        <div className ='fixed
       top-0
       z-[110] box-border flex
       size-full
        items-center overflow-auto bg-[rgba(28,28,28,0.9)]
         px-[30px] pb-5 pt-[75px]'>
            <div aria-modal='true' className ="pointer-events-auto relative z-[55]
            m-auto box-border
             flex max-h-[612px]
              w-full max-w-[432px] flex-col overflow-hidden rounded-xl
              border
                border-solid
                border-[color:var(--newCommunityTheme-line)]
                 bg-[color:var(--newCommunityTheme-body)]
                  p-6 text-[color:var(--newRedditTheme-bodyText)] shadow-[0_2px_20px_0_rgba(0,0,0,0.3)]">
                <div className='relative flex min-h-[564px] flex-col'>
                    <header className='mx-0 mb-4 mt-0 block'>
                        <div className='m-0 flex'>
                            <div>

                            </div>
                            <div className="flex flex-[1_0_0] justify-end">
                                <button aria-label="Close">
                                    <i>
                                    </i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className = 'flex-[1_1_0] overflow-y-auto'>
                        <div className = 'pb-[85px]'>
                            <div className="mb-6">
                                <div className="text-center text-2xl font-bold leading-7">
                                    See content in more languages
                                </div>
                                <div className="mt-2 text-center
                                text-sm font-normal
                                leading-5 text-[color:var(--newRedditTheme-metaText)]">
                                    Update your settings to make it easier to discover content
                                 in up to 10 languages
                                </div>
                            </div>
                            <div>
                                <div className="mx-0.5 my-2 flex
                                  h-12 cursor-pointer items-center rounded-3xl border
                                   border-solid border-transparent "
                                data-testid="en">
                                    <div className="m-0 flex-1 border-0 p-0 align-baseline text-[100%]">
                                    </div>
                                    <div className="flex max-h-5
                                        flex-[4] justify-center overflow-hidden
                                        text-ellipsis whitespace-normal text-base
                                         font-medium leading-5">
                                            English
                                    </div>
                                    <div className="flex flex-1 select-none justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 h-[95px] w-full ">
                            <button className="absolute bottom-0 h-12
                             w-full
                               rounded-[100px] text-sm font-normal
                               leading-5 text-[color:var(--newRedditTheme-lightText)]">Save
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

ContentLanguages.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export {ContentLanguages};

