import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import {classes} from './header.styles.js';

/**
 * Renders the header for the create post page.
 * @param {Object} props - The component props.
 * @param {number} props.numberDrafts - The number of drafts.
 * @return {JSX.Element} The rendered header.
 */
export function Header({numberDrafts}) {
    return (
        <div className={classes.headerDiv} style={{borderBottomWidth: '1px'}}>
            <div className={classes.headerInnerDiv}>
        Create a post
            </div>
            <button className={classes.headerButton} onClick={() => {
                alert('not supported yet :)');
            }}>
        Drafts
                <span className={classes.headerButtonSpan}>
                    {numberDrafts}
                </span>
            </button>
        </div>
    );
}

Header.propTypes = {
    numberDrafts: PropTypes.number.isRequired,
};
