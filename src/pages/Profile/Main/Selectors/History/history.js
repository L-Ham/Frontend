import React from 'react';
/* eslint-disable */

import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
/**
 * History component
 * @return {React.Component}
 */
export function History({Topics}) {
    const notSelected=`box-border
    inline-flex h-[38px] cursor-pointer
    items-center justify-center truncate rounded-[999px]
    px-3.5 text-center text-[color:var(--color-neutral-content-strong)]
    shadow-[var(--button-shadow)] hover:underline`;
    const style = ({isActive}) => {

        return isActive?`${notSelected} bg-[color:var(--color-secondary-background-selected)]`:notSelected;
        
    };
    return (
        <span className="flex shrink-0">
            <NavLink to={Topics.link} className={style} end>
                <span className="flex items-center justify-center">
                    <span className="font-semibold flex items-center gap-2">
                        <span className="flex">
                            {Topics.main}
                        </span>
                    </span>
                </span>
            </NavLink>
        </span>
    );
}
History.propTypes = {
    Topics: PropTypes.string,
};
