// componentsMap.js
import {CommunityDetailsWidget} from './CommunityDetailsWidget';
import {BookmarksWidget} from './BookmarksWidget';
import {SpoilInstructions} from './SpoilInstructions';
import {Rules} from './Rules';
import {CommunityModeratorsWidget} from './CommunityModeratorsWidget';
import {CommunitySettings} from './CommunitySettings';
import {TextAreaWidget} from './TextAreaWidget';

export const WIDGETS_MAP = {
    'community-details': CommunityDetailsWidget,
    'menu': BookmarksWidget,
    'spoill-nstructions': SpoilInstructions,
    'subreddit-rules': Rules,
    'moderators': CommunityModeratorsWidget,
    'textarea': TextAreaWidget,
    'id-card': CommunityDetailsWidget,
    'community-settings': CommunitySettings,
};

