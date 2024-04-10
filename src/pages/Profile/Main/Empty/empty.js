import React from 'react';
import PropTypes from 'prop-types';
import {useEmpty} from './empty.hook';
/**
 * Empty component
 *  @return {React.Component}
 * @param {string} section
 */
export function Empty({name, section}) {
    const {verb} = useEmpty(section);
    return (
        <div className="block  text-center text-lg font-bold leading-6"
            style={{unicodeBidi: 'isolate'}}>
            <div className="relative m-auto flex h-[inherit] max-h-[inherit] min-h-[inherit]
            w-[60px] min-w-[inherit] max-w-[inherit] items-center
            justify-center overflow-hidden rounded-[inherit] text-center"
            style ={{objectFit: 'inherit',
                unicodeBidi: 'isolate'}}>
                <img className="size-full max-h-[inherit]  min-h-[inherit] min-w-[inherit] max-w-[inherit]
                 text-clip"
                style={{overflowClipMarginBlock: 'content-box',
                    objectFit: 'inherit'}} src="https://www.redditstatic.com/shreddit/assets/hmm-snoo.png"
                />

            </div>
            <div className="block" style={{unicodeBidi: 'isolate'}}>
                u/{name} hasn&apos;t {verb()} yet
            </div>


        </div>
    );
}
Empty.propTypes = {
    section: PropTypes.string,
    name: PropTypes.string,
};
