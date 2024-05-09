import React from 'react';
import {useNotifications} from '../../../../generic components/Notifications/notificationsContext.js';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {useSubreddit, loadData} from '../../subredditcontext.js';
import {GenericForm} from './genericform.js';
import {validateLink} from '../../../../generic components/utils';

/**
 * The bookmarks form component.
 * @return {JSX.Element} The bookmarks form component.
 * @constructor
 * */
export function BookmarksForm() {
    const {bookmarkWidgetId, about, setAbout,
        setWidgets, setLoading, setIsBookmarksFormVisible, setBookmarkWidgetId} = useSubreddit();

    const {addNotification} = useNotifications();

    const {communityDetails: {name}} = about;

    const isEdit = bookmarkWidgetId !== null;

    const onClose = () => {
        setIsBookmarksFormVisible(false);
        setBookmarkWidgetId(null);
    };

    // add only button with the initial add
    const addBookmarksWidget = async (formData) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.post(API_ROUTES.addBookmarksWidget, {
            'subredditId': subredditId,
            'widgetName': formData.widgetName,
            'description': formData.description,
            'buttons': [
                {
                    'label': formData.bookmarkName,
                    'link': formData.url,
                },
            ],
        });
        const data = response.data;
        return data;
    };

    const deleteBookmarksWidget = async () => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.delete(API_ROUTES.addBookmarksWidget, {
            data: {
                'subredditId': subredditId,
                'widgetId': bookmarkWidgetId,
            },
        });
        const data = response.data;
        return data;
    };

    const addBookmark = async (formData) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.post(API_ROUTES.addBookmark, {
            'widgetId': bookmarkWidgetId,
            'subredditId': subredditId,
            'button': {
                'label': formData.bookmarkName,
                'link': formData.url,
            },
        });
        const data = response.data;
        return data;
    };

    const onDelete = async () => {
        try {
            await deleteBookmarksWidget();
            setBookmarkWidgetId(null);
            loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
            addNotification({message: 'Bookmark deleted successfully', type: 'success'});
        } catch (error) {
            addNotification({message: 'failed to delete bookmark T T', type: 'error'});
        }
    };

    const onSubmit = async (formData) => {
        try {
            if (formData.bookmarkName.length < 3) {
                throw new Error('Bookmark Name must be at least 3 characters long');
            }
            if (formData.url.length < 3) {
                throw new Error('URL must be at least 3 characters long');
            }
            if (!validateLink(formData.url)) {
                throw new Error('failed to add new bookmark (Invalid URL)');
            }
            if (!isEdit) {
                await addBookmarksWidget(formData);
                loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
                addNotification({message: 'Bookmarks widget added successfully', type: 'success'});
            } else {
                await addBookmark(formData);
                setBookmarkWidgetId(null);
                loadData(name, null, setAbout, setWidgets, setLoading, addNotification);
                addNotification({message: 'Bookmark added successfully', type: 'success'});
            }
        } catch (error) {
            addNotification({message: error.message, type: 'error'});
        }
    };

    const inputConfigs = [
        {name: 'bookmarkName', label: 'Bookmark Name', type: 'text', required: true, value: ''},
        {name: 'url', label: 'URL', type: 'text', required: true, value: ''},
    ];

    if (!isEdit) {
        inputConfigs.unshift(
            {name: 'widgetName', label: 'Widget Name', type: 'text', required: true, value: ''},
            {name: 'description', label: 'Description', type: 'textarea', required: true, value: ''},
        );
    }

    return (
        <GenericForm
            inputConfigs={inputConfigs}
            onSubmit={onSubmit}
            onClose={onClose}
            isDeleteDisabled={!isEdit}
            onDelete={onDelete} />
    );
}
