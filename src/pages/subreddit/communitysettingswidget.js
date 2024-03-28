import React from 'react';
// components
import {Edit} from '../../generic components/edit';
import {SubredditWidget} from './subredditwidget';

/**
 * Renders the community settings.
 * @return {JSX.Element} The rendered component.
 */
export function CommunitySettingsWidget() {
    return (
        <SubredditWidget title='COMMUNITY SETTINGS'>
            <div className="relative mb-3 flex items-center justify-between py-1">
                <span>Community Appearance</span>
                <Edit className='relative right-0 top-0'/>
            </div>
            <button className="rounded-3xl bg-[#0045ac] px-5 py-2
             text-[white] hover:bg-[#003584]">
                Edit Widgets
            </button>
        </SubredditWidget>
    );
}


