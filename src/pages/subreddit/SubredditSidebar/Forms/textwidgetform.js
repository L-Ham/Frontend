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
export function TextWidgetForm() {
    const {textWidgetId, textWidget, setIsTextWidgetFormVisible,
        about, setTextWidgetId, setAbout, setWidgets, setLoading, setTextWidget,
    } = useSubreddit();
    const {addNotification} = useNotifications();

    const {communityDetails: {name}} = about;


    const isEdit = textWidgetId !== null;

    const inputConfigs = [
        {name: 'widgetName', label: 'Widget Name', type: 'text', required: true, value: textWidget.shortName},
        {name: 'text', label: 'Text', type: 'textarea', required: true, value: textWidget.text},
    ];

    const addTextWidget = async (formData) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.post(API_ROUTES.editTextWidget, {
            'subredditId': subredditId,
            'widgetName': formData.widgetName,
            'text': formData.text,
            'textHtml': '<p>' + formData.text + '</p>',
            'shortName': formData.widgetName,
        });
        const data = response.data;
        return data;
    };

    const deleteTextWidget = async () => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.delete(API_ROUTES.editTextWidget, {
            data: {
                'subredditId': subredditId,
                'textWidgetId': textWidgetId,
            },
        });
        const data = response.data;
        return data;
    };

    const editTextWidget = async (formData) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.patch(API_ROUTES.editTextWidget, {
            'subredditId': subredditId,
            'textWidgetId': textWidgetId,
            'widgetName': formData.widgetName,
            'text': formData.text,
            'textHtml': '<p>' + formData.text + '</p>',
            'shortName': formData.widgetName,
        });
        const data = response.data;
        return data;
    };

    const onClose = () => {
        setIsTextWidgetFormVisible(false);
        setTextWidgetId(null);
        setTextWidget({});
    };

    const onDelete = async () => {
        try {
            await deleteTextWidget();
            loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
            addNotification({message: 'Text Widget deleted successfully', type: 'success'});
        } catch (error) {
            addNotification({message: 'failed to delete text widget T T', type: 'error'});
        }
    };

    const onSubmit = async (formData) => {
        try {
            if (formData.widgetName.length < 3) {
                throw new Error('Widget Name must be at least 3 characters long');
            }
            if (formData.text.length < 3) {
                throw new Error('Text must be at least 3 characters long');
            }
            if (!isEdit) {
                await addTextWidget(formData);
                setTextWidgetId(null);
                loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
                addNotification({message: 'Text Widget added successfully', type: 'success'});
            } else {
                await editTextWidget(formData);
                loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
                addNotification({message: 'Text Widget updated successfully', type: 'success'});
            }
        } catch (error) {
            addNotification({message: error.message, type: 'error'});
        }
    };


    return (
        <GenericForm
            inputConfigs={inputConfigs}
            onSubmit={onSubmit}
            onClose={onClose}
            isDeleteDisabled={!isEdit}
            onDelete={onDelete} />
    );
}
