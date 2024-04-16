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
        <div className={classes.directoryLink} data-testid="directory-link">
            <strong id="position" className='text-[var(--color-tone-1)]' data-testid="position-strong">Top 1%</strong>
            <a
                className={classes.rankLink}
                onClick = {() => navigate('/best/communities/1/#t5_2rfz5')}
                data-testid="rank-link"
            >
        Rank by size{' '}
                <ExternalIcon className="relative bottom-[-2px] ml-1" data-testid="external-icon"/>
            </a>
        </div>
    );
}

DirectoryLink.propTypes = {
    ExternalIcon: propTypes.elementType.isRequired,
};
