import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {historyClasses} from './history.styles.js';
import {useHistory} from './history.hook.js';
/**
 * History component
 * @return {React.Component}
 */
export function History({Topics}) {
    const {style} = useHistory();
    return (
        <span className={historyClasses.root} data-testid={`profile-history`}>
            <NavLink to={Topics.link} className={style} end data-testid={`profile-select-history`}>
                <span className={historyClasses.spanA}>
                    <span className={historyClasses.spanB}>
                        <span className={historyClasses.spanC}>
                            {Topics.main}
                        </span>
                    </span>
                </span>
            </NavLink>
        </span>
    );
}
History.propTypes = {
    Topics: PropTypes.object.isRequired,
};
