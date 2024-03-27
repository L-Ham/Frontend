// componentsMap.js
import {CommunityDetailsWidget} from './communitydetailswidget';
import {BookmarksWidget} from './bookmarkswidget';
import {RulesWidget} from './ruleswidget';
import {CommunityModeratorsWidget} from './communitymoderatorswidget';
import {CommunitySettingsWidget} from './communitysettingswidget';
import {TextAreaWidget} from './textareawidget';

// Map of widget kinds to their components.
export const WIDGETS_MAP = {
    'community-details': CommunityDetailsWidget,
    'menu': BookmarksWidget,
    'subreddit-rules': RulesWidget,
    'moderators': CommunityModeratorsWidget,
    'textarea': TextAreaWidget,
    'id-card': CommunityDetailsWidget,
    'community-settings': CommunitySettingsWidget,
};

