import React from 'react';
import {WidgetsRenderer} from './Widgets/WidgetsRenderer/widgetsrenderer.js';
import {subredditSidebarClasses as classes} from './subredditsidebar.styles.js';
import {useSubreddit} from '../subredditcontext.js';
import {OverlayContainer} from '../General/Components/overlaycontainer.js';
import {AddNewWidgets} from './Forms/addnewwidgets.js';
import {BookmarksForm} from './Forms/bookmarksform.js';
import {CommunityDetailsForm} from './Forms/communitydetailsform.js';
import {TextWidgetForm} from './Forms/textwidgetform.js';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    const {isBookmarksFormVisible,
        setIsBookmarksFormVisible,
        isCommunityDetailsFormVisible,
        setIsCommunityDetailsFormVisible,
        isTextWidgetFormVisible,
        setIsTextWidgetFormVisible, isAddNewWidgetsVisible} = useSubreddit();

    return (
        <div id='right-sidebar-container-12322134' data-scroll-restore
            className={classes.sidebarContainer} data-testid="subreddit-sidebar-276t5r4RS5">
            <aside className={classes.sidebarAside} data-testid="sidebar-aside-124214">
                <div className={classes.sidebarDiv} data-testid="sidebar-div-124124">
                    <WidgetsRenderer/>
                </div>
            </aside>
            {isBookmarksFormVisible &&

            <OverlayContainer>
                <BookmarksForm
                    onSubmit={(formData) => console.log(formData)}
                    onClose={() => setIsBookmarksFormVisible(false)}
                />
            </OverlayContainer>
            }

            {isCommunityDetailsFormVisible &&
            <OverlayContainer>
                <CommunityDetailsForm
                    onSubmit={(formData) => console.log(formData)}
                    onClose={() => setIsCommunityDetailsFormVisible(false)}
                />
            </OverlayContainer>
            }

            {isTextWidgetFormVisible &&
            <OverlayContainer>
                <TextWidgetForm
                    onSubmit={(formData) => console.log(formData)}
                    onClose={() => setIsTextWidgetFormVisible(false)}
                />
            </OverlayContainer>
            }
            {
                isAddNewWidgetsVisible &&
                <OverlayContainer>
                    <AddNewWidgets/>
                </OverlayContainer>
            }
        </div>
    );
}


