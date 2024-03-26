import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the CommunityStats item.
 * @param {object} item - The item to render.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStatsItem({item}) {
    const {
        title,
        text,
        icon: IconComponent,
    } = item;

    return (
        <div className="flex flex-auto flex-col items-start">
            <h3 className="m-0 font-bold text-white">{title}</h3>
            <div className="flex flex-row items-center">
                {text === 'Online' && IconComponent}
                {text === 'Rank by size' ?
                    <a href='https://www.reddit.com/best/communities/1/' target='_blank' rel="noreferrer"
                        className="flex items-center whitespace-nowrap">
                        {text}{IconComponent}
                    </a> :
                    <p>{text}</p>}
            </div>
        </div>
    );
}

CommunityStatsItem.propTypes = {
    item: PropTypes.object.isRequired,
};

