import React from 'react';
import {Edit} from '../../generic components/Edit';
import {SubredditWidget} from './SubredditWidget';

/**
 * Renders the community settings.
 * @return {JSX.Element} The rendered component.
 */
export function CommunitySettings() {
    return (
        <SubredditWidget title='COMMUNITY SETTINGS'>
            <div className="relative mb-3 flex items-center justify-between py-1">
                <span>Community Appearance</span>
                <Edit className='relative right-0 top-0'/>
            </div>
            <button className={`rounded-3xl px-5 py-2 bg-[#0045ac]
             text-[white] hover:bg-[#003584]`}>
                Edit Widgets
            </button>
        </SubredditWidget>
    );
}


