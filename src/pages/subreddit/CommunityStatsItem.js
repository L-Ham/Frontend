import React from 'react';
import PropTypes from 'prop-types';
// icons
import {ReactComponent as OnlineIcon} from '../../assets/icons/online.svg';
import {ReactComponent as ExternalIconOutline} from '../../assets/icons/external-outline.svg';


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
        <div className="flex flex-auto flex-col items-start">
            <h3 className="m-0 font-bold text-white">{title}</h3>
            <div className="flex flex-row items-center">
                {icon === 'online' && <OnlineIcon className='mr-1'style={{r: 4, cx: 4, cy: 5}}/>}
                {text === 'Rank by size' ?
                    <a href='https://www.reddit.com/best/communities/1/' target='_blank' rel="noreferrer"
                        className="flex items-center whitespace-nowrap">
                        {text}<ExternalIconOutline className='ml-0.5'/>
                    </a> :
                    <p>{text}</p>}
            </div>
        </div>
    );
}

CommunityStatsItem.propTypes = {
    item: PropTypes.object.isRequired,
};
