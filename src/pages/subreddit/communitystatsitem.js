import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the CommunityStats item.
 * @param {object} item - The item to render.
 * @param {string} isSmallView - The isSmallView.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStatsItem({item, isSmallView}) {
    const {
        title,
        text,
        icon: IconComponent,
    } = item;

    return (
        <div className={`flex flex-auto items-start ${isSmallView ? 'mr-2 flex-row' : 'flex-col'}`}>
            {!isSmallView && <h3 className={`m-0`}>{title}</h3>}
            <div className="flex flex-row items-center">
                {text === 'Online' && IconComponent}
                {isSmallView && <span className='mr-1'>{title}</span>}
                {text === 'Rank by size' ?
                    <a href='https://www.reddit.com/best/communities/1/' target='_blank' rel="noreferrer"
                        className="flex items-center whitespace-nowrap">
                        {text}{IconComponent}
                    </a> :
                    <span>{text}</span>}
            </div>
        </div>
    );
}

CommunityStatsItem.propTypes = {
    item: PropTypes.object.isRequired,
    isSmallView: PropTypes.bool.isRequired,
};

