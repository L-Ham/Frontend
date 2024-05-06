
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';

/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Queue({name, tab}) {
    const tabConfig = {
        'unmoderated': {
            isremoved: false,
            isreported: false,
        },
        'reported': {
            isremoved: false,
            isreported: true,
        },
        'removed': {
            isremoved: true,
            isreported: false,
        },
        'edited': {
            isremoved: false,
            isreported: false,
        },
        'modqueue': {
            isremoved: false,
            isreported: false,
        },
    };
    return (
        <Modpost name={name} {...tabConfig[tab]}>
        </Modpost>
    );
}

Queue.propTypes = {
    name: PropTypes.string,
    tab: PropTypes.string,
};

export {Queue};
