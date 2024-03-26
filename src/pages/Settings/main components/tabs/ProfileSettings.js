import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/SettingsGenericItemRight';
import {SettingsGenericItemDown} from '../../generic components/SettingsGenericItemDown';
import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';

/**
 * ProfileSettings function component renders the profile customization settings.
 * It allows users to set and modify their profile information such as display name, about section,
 * social links, avatar and banner images, and various privacy and visibility settings.
 * The component utilizes `SettingsTabHeading` for section headings, `SettingsGenericItemRight`,
 * and `SettingsGenericItemDown` for individual settings options.
 *
 * @return {React.Component} A div container with settings to customize the user's profile.
 */
function ProfileSettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Customize Profile</h3>
            <SettingsTabHeading text="PROFILE INFORMATION " />

            <SettingsGenericItemDown head="Display name (optional)" text="Set display name" thirdComponent={'text30'} />
            <SettingsGenericItemDown head="About (optional)" text="A brief description
             of yourself shown on your profile." thirdComponent={'text200'} />
            <SettingsGenericItemDown head="Social links (5 max)" text="People who visit
             your profile will see your social links." thirdComponent={'mr'} />

            <SettingsTabHeading text="Images" />
            <SettingsGenericItemDown head="Avatar and banner image" text="Images
             must be .png or .jpg format" thirdComponent={'2images'} />

            <SettingsTabHeading text="PROFILE CATEGORY" />
            <SettingsGenericItemRight head="NSFW" text="This content is NSFW
             (may contain nudity, pornography, profanity, or inappropriate
              content for those under 18)" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="Advanced" />
            <SettingsGenericItemRight head="People to follow you" text="Followers
             will be notified about posts you make to your profile and see them in
              their home feed." thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Control visibility" text="Posts to this
             profile can appear in r/all and your profile can be discovered in /users" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Active in communities visibility" text="Show
             which communities I am active in on my profile." thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Clear history" text="Delete your post views
             history." thirdComponent={'mr'} />

            <SettingsTabHeading text="PROFILE MODERATION" />
        </div>
    );
}

export {ProfileSettings};
