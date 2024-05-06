
import React from 'react';
import PropTypes from 'prop-types';
import {Modpost} from './unmoderatedposts';

/**
 *
 *
 * @return  {JSX.Element} Queue
 */
function Queue({name}) {
    return (
        <Modpost name={name} isremoved={false} isreported={false}/>
    );
}

Queue.propTypes = {
    name: PropTypes.string,
};

export {Queue};
