// componentsMap.js
import {CommunityDetailsWidget} from './CommunityDetails/communitydetailswidget.js';
import {BookmarksWidget} from './CommunityBookmarks/bookmarkswidget.js';
import {RulesWidget} from './Rules/ruleswidget.js';
import {CommunityModeratorsWidget} from './Moderators/CommunityModerators/communitymoderatorswidget.js';
import {CommunitySettingsWidget} from './CommunitySettings/communitysettingswidget.js';
import {TextAreaWidget} from './TextArea/textareawidget.js';

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

