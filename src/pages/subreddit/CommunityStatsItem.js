import React from 'react';
import PropTypes from 'prop-types';
// icons
import {ReactComponent as OnlineIcon} from '../../assets/icons/online.svg';
import {ReactComponent as ExternalIconOutline} from '../../assets/icons/external-outline.svg';
// styles
import './CommunityStatsItem.css';


/**
 * Renders the CommunityStats item.
 * @param {object} item - The item to render.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStatsItem({item}) {
    const {
        title,
        text,
        icon,
    } = item;

    return (
        <div className="subredditinfo__CommunityStats__item">
            <h3>{title}</h3>
            <div>
                {icon === 'online' && <OnlineIcon className='icon'/>}
                {text === 'Rank by size' ?
                    <a href='https://www.reddit.com/best/communities/1/' target='_blank' rel="noreferrer">
                        {text}<ExternalIconOutline className='icon'/>
                    </a> :
                    <p>{text}</p>}
            </div>
        </div>
    );
}

CommunityStatsItem.propTypes = {
    item: PropTypes.object.isRequired,
};
