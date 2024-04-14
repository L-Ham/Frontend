import React from 'react';
import PropTypes from 'prop-types';
import {useEmpty} from './empty.hook';
import {emptyClasses} from './empty.styles.js';
import {emptyStyles} from './empty.styles.js';
/**
 * Empty component
 *  @return {React.Component}
 * @param {string} section
 */
export function Empty({name, section}) {
    const {verb} = useEmpty(section);
    return (
        <div className={emptyClasses.root} data-testid={`profile-empty-page`}>
            <div className={emptyClasses.rootC}
                style ={emptyStyles.div}>
                <img className={emptyClasses.img}
                    style={emptyStyles.img} src="https://www.redditstatic.com/shreddit/assets/hmm-snoo.png"
                />

            </div>
            <div className={emptyClasses.div} style={emptyStyles.text} data-testid={`profile-empty-text`}>
                u/{name} hasn&apos;t {verb()} yet
            </div>


        </div>
    );
}
Empty.propTypes = {
    section: PropTypes.string,
    name: PropTypes.string,
};
