
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';

/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Removed({name}) {
    return (
        <Modpost name={name} isremoved={true} isreported={false}/>
    );
}

Removed.propTypes = {
    name: PropTypes.string,
};

export {Removed};
