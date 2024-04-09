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
        <li className={classes.container}>
            <div className={classes.innerContainer}>
                <span className={classes.imageContainer}>
                    <span className={classes.imageWrapper}>
                        <span className={classes.imageInnerWrapper}>
                            <img
                                src={pictureSrc}
                                alt={`u/${name} avatar`}
                                className={classes.image}
                            />
                        </span>
                    </span>
                </span>
                <span className={classes.textContainer}>
                    <span className={classes.username}>
                        <a
                            className={classes.usernameLink}
                            target="_blank"
                            onClick={() => window.open(`/user/${name}`, '_blank')}
                        >
                            {`u/${name}`}
                        </a>
                    </span>
                    <span className={classes.displayName}>
                        {displayName}
                    </span>
                </span>
                <span className={classes.extraContainer}>
                    <span className={classes.extraContent} />
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
