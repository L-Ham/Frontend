
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Checkbox() {
    return (
        <label className="mb-0 mr-0 block min-h-[20px] cursor-pointer pl-5 text-xs font-normal leading-4"
            style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
            <input id="revokeSessions" className="absolute -ml-5 mb-0 mr-0 mt-0.5
box-border inline p-0 leading-[normal]"
            type="checkbox" name="revokeSessions" data-empty="false"
            data-testid="revokeSessions"
            />
Changing your password logs you out of all browsers on your <br/> device(s).
Checking this box also logs you out of all apps you have <br/> authorized.

        </label>
    );
}
export {Checkbox};
