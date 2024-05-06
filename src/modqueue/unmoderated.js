
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';

/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Unmoderated({name}) {
    return (
        <Modpost name={name} isremoved={false} isreported={false}/>
    );
}

Unmoderated.propTypes = {
    name: PropTypes.string,
};

export {Unmoderated};
