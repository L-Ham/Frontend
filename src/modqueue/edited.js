
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';

/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Edited({name}) {
    return (
        <Modpost name={name} isremoved={false} isreported={false}/>
    );
}

Edited.propTypes = {
    name: PropTypes.string,
};

export {Edited};
