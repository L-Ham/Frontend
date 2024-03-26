import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/SettingsGenericItemRight';
import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';

/**
 * FeedSettings function component renders the user's feed settings interface.
 * It provides options to customize the viewing experience on Reddit, including content preferences
 * such as showing mature content, enabling home feed recommendations, autoplaying media, and more.
 * Additionally, it allows users to adjust post preferences and how content is sorted and displayed.
 *
 * @return {React.Component} A div container encompassing various settings to customize the Reddit feed experience.
 */
function FeedSettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Feed Settings</h3>
            <SettingsTabHeading text="CONTENT PREFERENCES" />

            <SettingsGenericItemRight
                head="Show mature (18+) content"
                text="See NSFW (Not Safe for Work) mature and adult
                 images, videos, written content, and other media in your Reddit feeds and search results."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight
                head="Enable home feed recommendations"
                text="Allow us to introduce recommended posts in your home feed."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight
                head="Autoplay media"
                text="Play videos and gifs automatically when in the viewport."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight
                head="Reduce Animations"
                text="Reduce animations on posts, comments, and feeds."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight
                head="Community themes"
                text="Use custom themes for all communities. You can also turn this off on a per community basis."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight
                head="Community content sort"
                text="Choose how you would like content
                 organized in communities you visit. This will not affect global feeds such as Home, or Popular."
                thirdComponent={'rm'}
            />

            <SettingsGenericItemRight
                head="Global content view"
                text="Choose how you would like content displayed in feeds. This control is also found above your feed."
                thirdComponent={'rm'}
            />

            <SettingsGenericItemRight
                head="Open posts in new tab"
                text="Enable to always open posts in a new tab."
                thirdComponent={'Toggle'}
            />

            <SettingsTabHeading text="POST PREFERENCES" />

            <SettingsGenericItemRight
                head="Default to markdown"
                text="When posting, your input will default to markdown text instead of fancy pants."
                thirdComponent={'Toggle'}
            />
        </div>
    );
}

export {FeedSettings};
