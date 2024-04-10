import React from 'react';
import PropTypes from 'prop-types';
import {infoClasses} from './info.styles';
/**
 * Info component
 * @return {React.Component}
 */
export function Info({info, title}) {
    return (
        <div className={infoClasses.root}>
            <p className={infoClasses.p1}
                style={{
                    marginBlockStart: '0em',
                    marginBlockEnd: '0em',
                    marginInlineStart: '0px',
                    marginInlineEnd: '0px',
                    unicodeBidi: 'isolate',
                }}>
                <span className={infoClasses.span}>
                    {info}
                </span>
            </p>
            <p className={infoClasses.p2}
                style={{
                    marginBlockStart: '0em',
                    marginBlockEnd: '0em',
                    marginInlineStart: '0px',
                    marginInlineEnd: '0px',
                    unicodeBidi: 'isolate',
                }}>
                {title}
            </p>
        </div>
    );
}

Info.propTypes = {
    info: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
