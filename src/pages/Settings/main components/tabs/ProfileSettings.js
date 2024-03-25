import React from 'react';
import {SettingsComponent} from '../../generic components/SettingsComponent';

import {SettingsComponentDown} from '../../generic components/SettingsComponentDown';
import {Header} from '../../general components/text/Header';

const ProfileSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Customize Profile</h3>
            <Header text="PROFILE INFORMATION " />

            <SettingsComponentDown head="Display name (optional)" text="Set display name" thirdComponent={'text30'} />

            <SettingsComponentDown head="About (optional)" text="A brief descrip
      tion of yourself shown on your profile." thirdComponent={'text200'} />


            <SettingsComponentDown head="Social links
            (5 max)" text="People who visit your profile will see your social links.
      " thirdComponent={'mr'} />
            <Header text="Images" />

            <SettingsComponentDown head="Avatar and banner image" text="Images must be .png or .jpg format
       " thirdComponent={'2images'} />

            <Header text="PROFILE CATEGORY" />

            <SettingsComponent head="NSFW" text="This content is NSFW (may contain nudity,
        pornography, profanity or inappropriate
         content for those under 18" thirdComponent={'Toggle'} />

            <Header text="Advanced" />
            <SettingsComponent head="People to follow you" text="Followers will be notifi
      ed about posts you make to your p
      rofile and see them in their home feed." thirdComponent={'Toggle'} />

            <SettingsComponent head="Control visibility" text="Posts to this profile
       can appear in r/all
        and your profile can be discovered in /users" thirdComponent={'Toggle'} />


            <SettingsComponent head="Active in communities visibility" text="Show which
       communities I am active in on my profile.
        " thirdComponent={'Toggle'} />

            <SettingsComponent head="Clear history" text="Delete your post views history." thirdComponent={'mr'} />
            <Header text="PROFILE MODERATION" />

        </div>
    );
};

export {ProfileSettings};
