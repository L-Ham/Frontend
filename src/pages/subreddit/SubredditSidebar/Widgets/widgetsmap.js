// componentsMap.js
import {CommunityDetailsWidget} from './CommunityDetails/communitydetailswidget';
import {BookmarksWidget} from './CommunityBookmarks/bookmarkswidget';
import {RulesWidget} from './Rules/ruleswidget';
import {CommunityModeratorsWidget} from './Moderators/CommunityModerators/communitymoderatorswidget';
import {CommunitySettingsWidget} from './CommunitySettings/communitysettingswidget';
import {TextAreaWidget} from './TextArea/textareawidget';

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

