import React from 'react';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext.js';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {useSubreddit, loadData} from '../../subredditcontext.js';
import {GenericForm} from './genericform.js';


/**
 * The community details form component.
 * @return {JSX.Element} The community details form component.
 * @constructor
 * */
export function CommunityDetailsForm() {
    const {
        about, setIsCommunityDetailsFormVisible, setAbout, setWidgets, setLoading,
    } = useSubreddit();

    const {communityDetails: {name}} = about;

    const {addNotification} = useNotifications();

    if (!about) return null;

    const onClose = () => setIsCommunityDetailsFormVisible(false);


    const editCommunityDetails = async (formData) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.patch(API_ROUTES.editCommunityDetails, {
            'subredditId': subredditId,
            'membersNickname': formData.membersNickname,
            'currentlyViewingNickname': formData.viewingNickname,
            'communityDescription': formData.communityDescription,
        });
        const data = response.data;
        return data;
    };


    const onSubmit = async (formData) => {
        try {
            if (formData.membersNickname.length < 3) {
                throw new Error('Members\' Nickname must be at least 3 characters long');
            }
            if (formData.viewingNickname.length < 3) {
                throw new Error('Currently Viewing Nickname must be at least 3 characters long');
            }
            if (formData.communityDescription.length < 3) {
                throw new Error('Community Description must be at least 3 characters long');
            }
            await editCommunityDetails(formData);
            loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
            addNotification({message: 'Community Details updated successfully', type: 'success'});
        } catch (error) {
            addNotification({message: error.message, type: 'error'});
        }
    };

    const inputConfigs = [
        {
            name: 'membersNickname', label: 'Members\' Nickname', type: 'text', required: true,
            value: about.communityDetails.membersNickname,
        },
        {
            name: 'viewingNickname', label: 'Currently Viewing Nickname', type: 'text', required: true,
            value: about.communityDetails.currentlyViewingNickname,
        },
        {
            name: 'communityDescription', label: 'Community Description', type: 'textarea', required: true,
            value: about.communityDetails.description,
        },
    ];

    return (
        <GenericForm
            inputConfigs={inputConfigs}
            onSubmit={onSubmit}
            onClose={onClose}
            isDeleteDisabled={true} />
    );
}
