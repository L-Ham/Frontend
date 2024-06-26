import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import {classes} from './header.styles.js';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext.js';

/**
 * Renders the header for the create post page.
 * @param {Object} props - The component props.
 * @param {number} props.numberDrafts - The number of drafts.
 * @return {JSX.Element} The rendered header.
 */
export function Header({numberDrafts}) {
    const {addNotification} = useNotifications();
    return (
        <div className={classes.headerDiv} style={{borderBottomWidth: '1px'}} data-testid="header-div">
            <div className={classes.headerInnerDiv} data-testid="header-inner-div">
        Create a post
            </div>
            <button className={classes.headerButton} onClick={() => {
                addNotification({type: 'failure', message: 'Not supported yet :('});
            }} data-testid="header-button">
        Drafts
                <span className={classes.headerButtonSpan} data-testid="header-button-span">
                    {numberDrafts}
                </span>
            </button>
        </div>
    );
}

Header.propTypes = {
    numberDrafts: PropTypes.number.isRequired,
};
