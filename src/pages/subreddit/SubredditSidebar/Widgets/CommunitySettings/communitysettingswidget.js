import React from 'react';
import {SubredditWidget} from '../Widget/subredditwidget.js';
import './communitysettingswidget.css';
import {useSubreddit} from '../../../subredditcontext.js';
import {CommunityAppearance} from '../../../CommunityAppearance/communityappearance.js';


/**
 * Renders the community settings.
 * @return {JSX.Element} The rendered component.
 */
export function CommunitySettingsWidget() {
    const {isAppearanceSettingsVisible, setIsAppearanceSettingsVisible,
        setIsAddNewWidgetsVisible,
    } = useSubreddit();
    return (
        <>
            <SubredditWidget title='Community Settings' data-testid="subreddit-widget">
                <div className="flex
             items-center justify-between">
                    <span className="flex items-center
                gap-1 text-[0.75rem]/[1rem]">
                 Community Appearance</span>
                    <span className="flex items-center gap-1">
                        <div className="nd:visible"
                            data="{&quot;target&quot;:null}">
                            <slot>
                                <button aria-label="edit community appearance" className="
                        commset-button-small commset-button-secondary
                        commset-icon
                        commset-button
                        inline-flex items-center
                        justify-center px-[var(--rem6)] " type="button"
                                onClick={()=>{
                                    setIsAppearanceSettingsVisible(true);
                                }}>
                                    <span className="flex items-center justify-center">
                                        <span className="flex">
                                            <svg
                                                fill="currentColor"
                                                height="16"
                                                viewBox="0 0 20 20" width="16"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="m18.236 3.158-1.4-1.4a2.615 2.615 0 0 0-3.667-.021L1.336
         13.318a1.129 1.129 0 0 0-.336.8v3.757A1.122 1.122 0 0 0 2.121
         19h3.757a1.131 1.131 0 0 0 .8-.337L18.256 6.826a2.616 2.616
         0 0 0-.02-3.668ZM5.824 17.747H2.25v-3.574l9.644-9.435L15.259
         8.1l-9.435 9.647ZM17.363 5.952l-1.23 1.257-3.345-3.345 1.257-1.23a1.362
         1.362 0 0 1 1.91.01l1.4 1.4a1.364 1.364 0 0 1 .008 1.908Z"></path>
                                            </svg></span>
                                    </span>
                                </button></slot>
                        </div> </span>
                </div>
                <button className="commset-button-small
            commset-button-primary commset-button
            mt-5
            inline-flex w-full
            items-center justify-center px-[var(--rem10)]"

                onClick={()=>{
                    setIsAddNewWidgetsVisible(true);
                }}
                >
                    <span className="flex items-center justify-center">

                        <span className="flex items-center gap-1">
                            <div
                                action="click"
                            >
                Edit Widgets
                            </div></span>
                    </span>

                </button>
            </SubredditWidget>
            {isAppearanceSettingsVisible && <CommunityAppearance/>}
        </>
    );
}


