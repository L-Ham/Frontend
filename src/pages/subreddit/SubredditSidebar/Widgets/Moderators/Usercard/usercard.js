import React from 'react';
import PropTypes from 'prop-types';
import {userCardClasses as classes} from './usercard.styles.js';

/**
 * Renders the user flair.
 * @param {string} name - The username of the user.
 * @param {string} displayName - The display name of the user.
 * @param {string} pictureSrc - The source of the profile picture.
 * @return {JSX.Element} The rendered component.
 */
export function UserCard({name, displayName='', pictureSrc}) {
    return (
        <li className={classes.container} data-testid="usercard-container">
            <div className={classes.innerContainer} data-testid="inner-container">
                <span className={classes.imageContainer} data-testid="image-container">
                    <span className={classes.imageWrapper} data-testid="image-wrapper">
                        <span className={classes.imageInnerWrapper} data-testid="image-inner-wrapper">
                            <img
                                src={pictureSrc}
                                alt={`u/${name} avatar`}
                                className={classes.image}
                                data-testid="user-avatar"
                            />
                        </span>
                    </span>
                </span>
                <span className={classes.textContainer} data-testid="text-container">
                    <span className={classes.username} data-testid="username-span">
                        <a
                            className={classes.usernameLink}
                            target="_blank"
                            onClick={() => window.open(`/user/${name}`, '_blank')}
                            data-testid="username-link"
                        >
                            {`u/${name}`}
                        </a>
                    </span>
                    <span className={classes.displayName} data-testid="display-name-span">
                        {displayName}
                    </span>
                </span>
                <span className={classes.extraContainer} data-testid="extra-container">
                    <span className={classes.extraContent} data-testid="extra-content" />
                </span>
            </div>
        </li>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string,
    pictureSrc: PropTypes.string.isRequired,
};
