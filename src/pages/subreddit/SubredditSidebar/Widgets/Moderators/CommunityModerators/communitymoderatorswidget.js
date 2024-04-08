import React from 'react';
import propTypes from 'prop-types';
import {communityWidgetClasses as classes} from './communitymoderatorswidget.styles';
import {useCommunityModeratorsWidget} from './communitymoderatorswidget.hooks';
import {SubredditWidget} from '../../Widget/subredditwidget';


/**
 * Renders the community moderators widget.
 * @param {Object} props - The component props.
 * @param {Array} props.mods - The moderators.
 * @param {number} props.totalMods - The total number of moderators.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityModeratorsWidget({mods, totalMods}) {
    const {multiLinkButtonsComponents, moderatorComponents} = useCommunityModeratorsWidget(mods, totalMods);

    if (!moderatorComponents.length) return null;

    return (
        <SubredditWidget title='moderators'>
            <div>
                <ul className={classes.list}>
                    {moderatorComponents}
                </ul>
                <div className={classes.flexColumn}>
                    {multiLinkButtonsComponents}
                </div>
            </div>
        </SubredditWidget>
    );
}

CommunityModeratorsWidget.propTypes = {
    mods: propTypes.array.isRequired,
    totalMods: propTypes.number.isRequired,
};
