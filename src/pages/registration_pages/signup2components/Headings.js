// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Headings() {
    return (
        <div className="block border-b border-solid border-b-[hsla(195,2%,65%,0.36)] px-6 pb-3 pt-6"
            data-testid="headings12"
        >
            <h1 className="m-0 block text-lg font-medium
        leading-[22px]" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            Choose your username
            </h1>
            <p className="mb-2.5 mt-0 block text-sm font-normal
        leading-[21px]" style={{fontFamily: '"Noto Sans", sans-serif'}}>
            Your username is how other community members will see you.
            This name will be used to credit you for things you share on Reddit.
            What should we call you?
            </p>
        </div>
    );
}
export {Headings};
