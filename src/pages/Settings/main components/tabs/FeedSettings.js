import React from 'react';
import {SettingsComponent} from '../../generic components/SettingsComponent';

import {Header} from '../../general components/text/Header';


const FeedSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Feed Settings</h3>
            <Header text="CONTENT PREFERENCES" />

            <SettingsComponent head="Show mature (18+) content" text="See NSFW (Not Safe for Work) mature
       and adult images, videos, written content
       , and other media in your Reddit feeds and search results." thirdComponent={'Toggle'} />

            <SettingsComponent head="Enable home feed recommendations" text="Allow us to introduce recommended posts
 in your home feed." thirdComponent={'Toggle'} />

            <SettingsComponent head="Autoplay media" text="Play videos and gifs automatically
 when in the viewport." thirdComponent={'Toggle'} />

            <SettingsComponent head="Reduce Animations" text="Reduce animations on posts,
 comments, and feeds." thirdComponent={'Toggle'} />

            <SettingsComponent head="Community themes" text="Use custom themes for all communities.
       You can also turn this off on a per community basis." thirdComponent={'Toggle'} />


            <SettingsComponent head="Community content
             sort" text="Choose how you would like content organized in communities you visit.
       This will not affect global feeds such as Home, or Popular.
      " thirdComponent={'rm'} />

            <SettingsComponent head="Global content view" text="Choose how you would like
 content displayed in feeds. This control is also found above your feed.
      " thirdComponent={'rm'} />


            <SettingsComponent head="Open posts in new tab" text="Enable to always open posts in a new tab.
       " thirdComponent={'Toggle'} />

            <Header text="POST PREFERENCES" />


            <SettingsComponent head="Default to markdown" text="When posting, your input will default
     to markdown text instead of fancy pants.
         " thirdComponent={'Toggle'} />


        </div>
    );
};

export {FeedSettings};
