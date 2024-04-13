import React from 'react';
import {useNavigate} from 'react-router-dom';
import propTypes from 'prop-types';
import {classes} from './directorylink.styles.js';

/**
 * Renders the directory link.
 * @param {object} props - The props.
 * @param {object} props.ExternalIcon - The external icon.
 * @return {JSX.Element} The rendered component.
 */
export function DirectoryLink({ExternalIcon}) {
    const navigate = useNavigate();
    return (
        <div className={classes.directoryLink}>
            <strong id="position">Top 1%</strong>
            <a
                className={classes.rankLink}
                onClick = {() => navigate('/best/communities/1/#t5_2rfz5')}
            >
            Rank by size{' '}
                <ExternalIcon className="relative bottom-[-2px] ml-1"/>
            </a>
        </div>
    );
}

DirectoryLink.propTypes = {
    ExternalIcon: propTypes.elementType.isRequired,
};
