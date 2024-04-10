import React from 'react';
import PropTypes from 'prop-types';
import {infoClasses} from './info.styles';
import {infoStyles} from './info.styles';
/**
 * Info component
 * @return {React.Component}
 */
export function Info({info, title}) {
    return (
        <div className={infoClasses.root}>
            <p className={infoClasses.p1}
                style={infoStyles.p}>
                <span className={infoClasses.span}>
                    {info}
                </span>
            </p>
            <p className={infoClasses.p2}
                style={infoStyles.p}>
                {title}
            </p>
        </div>
    );
}

Info.propTypes = {
    info: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
