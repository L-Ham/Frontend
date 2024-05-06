
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';

/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Reported({name}) {
    return (
        <Modpost name={name} isreported={true} isremoved={false} />

    );
}

Reported.propTypes = {
    name: PropTypes.string,
};

export {Reported};
