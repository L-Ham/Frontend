import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AccountSettings} from './tabs/accountsettings';
import {EmailSettings} from './tabs/emailsettings';
import {ProfileSettings} from './tabs/profilesettings';
import {SafetySettings} from './tabs/safetysettings';
import {FeedSettings} from './tabs/feedsettings';
import {NotificationSettings} from './tabs/notificationsettings';
import {SubscriptionSettings} from './tabs/subscriptionsettings';
import {ChatSettings} from './tabs/chatsettings';

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
function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

/**
 * Generates accessibility props for a tab.
 *
 * @param {number} index - The index of the tab.
 * @return {Object} The accessibility props for the tab.
 */
function a11yProps(index) {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

/**
 * BasicTabs component provides a tab interface for navigating between different settings.
 *
 * It uses Material UI components to render tabs and manages the current active tab state.
 * @return {React.ReactElement} The rendered tab interface.
 */
export function BasicTabs() {
    const [value, setValue] = React.useState(0);

    /**
     * Handles the change event of the tabs.
     *
     * @param {object} event - The event object.
     * @param {number} newValue - The new value of the tabs.
     */
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Box sx={{width: '100%', bgcolor: 'white'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider', height: '100%'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '.MuiTabs-indicator': {
                            backgroundColor: 'blue',
                            transition: 'none',
                        },
                        '.MuiTabs-flexContainer': {
                            justifyContent: 'flex-start',
                        },
                        '.MuiTab-root': {
                            'fontWeight': 'bold',
                            'border': 0,
                            'textAlign': 'left',
                            'color': 'text.secondary',
                            '&:hover': {
                                color: 'text.primary',
                                opacity: 1,
                            },
                            '&.Mui-selected': {
                                color: 'text.primary',
                            },
                            '&:focus': {
                                color: 'text.primary',
                                outline: 'none',
                                borderLeft: 'none',
                                borderRight: 'none',
                            },
                            '&.Mui-focusVisible': {
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                border: 'none',
                            },
                            '&.Mui-disabled': {
                                opacity: 0.5,
                            },
                            'disableRipple': true,
                        },
                    }}
                >
                    <Tab label="Account" style = {{marginLeft: '65px'}} {...a11yProps(0)} disableRipple />
                    <Tab label="Profile" {...a11yProps(1)} disableRipple />
                    <Tab label="Safety & Privacy" {...a11yProps(2)} disableRipple />
                    <Tab label="Feed Settings" {...a11yProps(3)} disableRipple />
                    <Tab label="Notifications" {...a11yProps(4)} disableRipple />
                    <Tab label="Emails" {...a11yProps(5)} disableRipple />
                    <Tab label="Subscriptions" {...a11yProps(6)} disableRipple />
                    <Tab label="Chat & Messaging" {...a11yProps(7)} disableRipple />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AccountSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ProfileSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SafetySettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <FeedSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <NotificationSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <EmailSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
                <SubscriptionSettings />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
                <ChatSettings />
            </CustomTabPanel>
        </Box>
    );
}
