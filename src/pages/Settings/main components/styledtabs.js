import * as React from 'react';

// Assuming these components are correctly implemented in their respective files
import {AccountSettings} from './tabs/accountsettings.js';
import {EmailSettings} from './tabs/emailsettings.js';
import {ProfileSettings} from './tabs/profilesettings.js';
import {SafetySettings} from './tabs/safetysettings.js';
import {FeedSettings} from './tabs/feedsettings.js';
import {NotificationSettings} from './tabs/notificationsettings.js';
import {SubscriptionSettings} from './tabs/subscriptionsettings.js';
import {ChatSettings} from './tabs/chatsettings.js';
import {ToggleProvider} from '../pop ups/togglecontext.js';
import {GenericPopup} from '../pop ups/genericpopup.js';
import {AddSocialLinks} from '../pop ups/addsociallinks.js';
import {NfswPopUp} from '../pop ups/nfswpopup.js';
import {AddSocialLinksTwo} from '../pop ups/addsociallinkstwo.js';
import {ConnectWithGoogle} from '../pop ups/connectwithgoogle.js';
import {DeletePopUp} from '../pop ups/deleteAccPopup.js';
import PropTypes from 'prop-types';


/**
 * CustomTabPanel component renders the tab panel content based on the current active tab.
 *
 * @param {Object} props - The props for the CustomTabPanel component.
 * @param {React.ReactNode} props.children - The content of the tab panel.
 * @param {number} props.value - The current active tab index.
 * @param {number} props.index - The index of the current tab panel.
 * @param {Object} other - Other props passed to the tab panel.
 * @return {React.ReactElement} The tab panel component.
 */
export function BasicTabs({id}) {
    const [selectedTab, setSelectedTab] = React.useState('Account');


    /**
 * Updates the currently selected tab.
 *
 * @param {string} newTab - The identifier of the new tab to be selected.
 */
    function handleTabChange(newTab) {
        setSelectedTab(newTab);
    }


    /**
 * Renders the component associated with the currently selected tab.
 *
 * @return {JSX.Element|null} The component corresponding to the selected tab or null if no such tab exists.
 */
    function renderTabContent() {
        switch (selectedTab) {
        case 'Account':
            return <AccountSettings />;
        case 'Profile':
            return <ProfileSettings />;
        case 'Safety & Privacy':
            return <SafetySettings />;
        case 'Feed settings':
            return <FeedSettings />;
        case 'Notifications':
            return <NotificationSettings />;
        case 'Emails':
            return <EmailSettings />;
        case 'Subscriptions':
            return <SubscriptionSettings />;
        case 'Chat & Messaging':
            return <ChatSettings />;
        default:
            return null; // Or some default content
        }
    }


    return (
        <ToggleProvider>
            <div>
                <div id='tabsDiv' className='ml-[calc(100vw_-_100%)] min-h-[calc(100vh_-_88px)] pb-10'>

                    <div className="relative box-border">
                        <h3 className='mx-auto my-0 max-w-screen-nd fill-white
                px-5
                pb-5 pt-4 text-lg font-medium leading-[22px]
                text-[color:var(--newCommunityTheme-bodyText)]'>User settings
                        </h3>

                        <div role='tablist' className='mx-auto
                 my-0 max-w-screen-nd border-b border-solid
                 border-b-[color:var(--newCommunityTheme-line)]
                  px-5 py-0'>
                            {['Account', 'Profile', 'Safety & Privacy', 'Feed settings',
                                'Notifications', 'Emails', 'Subscriptions', 'Chat & Messaging'].map((tab, index) => (
                                <a
                                    id={`tab-${tab}`} // Using index to ensure uniqueness
                                    key={tab}
                                    className={`mr-2 inline-block cursor-pointer
            px-3 pb-3 pt-[15px] text-sm font-bold leading-[unset] ` +
            `hover:text-[color:var(--newCommunityTheme-bodyText)] ` +
            `focus:text-[color:var(--newCommunityTheme-bodyText)] ` +
            `${selectedTab === tab ?
                'border-b-[3px] border-solid border-b-[color:var(--newCommunityTheme-button)] ' +
                'text-[color:var(--newCommunityTheme-bodyText)]' :
                'border-b-[none] text-[color:var(--newCommunityTheme-metaText)]'
            }`}
                                    aria-selected={selectedTab === tab ? 'true' : 'false'}
                                    role="tab"
                                    onClick={() => handleTabChange(tab)}>
                                    {tab}
                                </a>
                            ))}


                        </div>
                    </div>
                    <div className='mx-auto my-0 flex max-w-screen-nd px-4 py-0'>

                        {renderTabContent()}

                    </div>

                </div>


                <GenericPopup head='Change your email address'
                    text="To change your email address you need to create a
                     Reddit password first. We'll walk you through it." />
                <AddSocialLinks/>
                <NfswPopUp/>
                <AddSocialLinksTwo/>
                <ConnectWithGoogle/>
                <DeletePopUp/>


            </div>
        </ToggleProvider>
    );
}

BasicTabs.propTypes = {
    id: PropTypes.string,
};
