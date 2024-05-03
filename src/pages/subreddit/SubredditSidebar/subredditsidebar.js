import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {WidgetsRenderer} from './Widgets/WidgetsRenderer/widgetsrenderer.js';
import {subredditSidebarClasses as classes} from './subredditsidebar.styles.js';
import {useSubreddit, loadData} from '../subredditcontext.js';
import {OverlayContainer} from '../General/Components/overlaycontainer.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {useNotifications} from '../../../generic components/Notifications/notificationsContext.js';

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
        <div id='right-sidebar-container' data-scroll-restore
            className={classes.sidebarContainer} data-testid="sidebar-container">
            <aside className={classes.sidebarAside} data-testid="sidebar-aside">
                <div className={classes.sidebarDiv} data-testid="sidebar-div">
                    <WidgetsRenderer data-testid="widgets-renderer"/>
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

// /////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const GenericForm = ({inputConfigs, onSubmit, onClose, onDelete, isDeleteDisabled}) => {
    const [formData, setFormData] = useState(
        inputConfigs.reduce((acc, input) => ({...acc, [input.name]: input.value || input.defaultValue || ''}), {}),
    );

    // CSS classes for action buttons
    const actionButtonsPrimaryBtn = `post-creation-form-footer__primaryBtn 
    font relative box-border flex min-h-[32px] w-full min-w-[32px] 
    cursor-pointer items-center justify-center rounded-full border-none bg-[color:var(--newCommunityTheme-button)] 
    fill-[color:var(--newCommunityTheme-body)] px-[16px] py-[4px] text-center align-middle text-[14px]/[17px] 
    font-[700] tracking-[unset] text-[color:var(--newCommunityTheme-body)]`;

    const actionButtonsDeleteBtn = `post-creation-form-footer__borderedBtn 
    font relative box-border flex min-h-[32px] min-w-[32px] 
    cursor-pointer items-center justify-center rounded-full border-solid border-[color:var(--newCommunityTheme-button)] 
    bg-transparent fill-[color:var(--newCommunityTheme-button)] p-[4px_16px] text-[14px]/[17px] font-[700] 
    text-[color:var(--newCommunityTheme-button)] w-full`;

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    const handleDelete = () => {
        onDelete();
        onClose();
    };

    // Styles for form, labels, inputs, and close button
    const formStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        zIndex: '1000',
        backgroundColor: 'var(--newCommunityTheme-field)',
    };

    const labelStyle = {
        margin: '10px 0',
        fontWeight: 'bold',
        color: '#333',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        border: '2px solid #ddd',
        borderRadius: '5px',
        width: '95%',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit} className='bg-[var(--background)]'>
            <div style={closeButtonStyle} onClick={onClose}>X</div>
            {inputConfigs.map((input) => (
                <div key={input.name}>
                    <label style={labelStyle} htmlFor={input.name}>{input.label}:</label>
                    {
                        input.type === 'textarea' ?
                            <textarea
                                style={inputStyle}
                                id={input.name}
                                name={input.name}
                                defaultValue={input.value}
                                value={formData[input.name]}
                                onChange={handleChange}
                                required={input.required || false}
                            /> :
                            <input
                                style={inputStyle}
                                type={input.type}
                                id={input.name}
                                name={input.name}
                                defaultValue={input.value}
                                value={formData[input.name]}
                                onChange={handleChange}
                                required={input.required || false}
                            />
                    }
                </div>
            ))}
            <div className='mt-5 flex flex-col-reverse items-center justify-between gap-2'>
                {!isDeleteDisabled && <button
                    className={actionButtonsDeleteBtn}
                    type="button" onClick={handleDelete} style={{borderWidth: '1px'}}
                >Delete</button>}
                <button className={`${actionButtonsPrimaryBtn}`} type="submit">Submit</button>
            </div>
        </form>
    );
};

GenericForm.propTypes = {
    inputConfigs: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        required: PropTypes.bool,
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    isDeleteDisabled: PropTypes.bool,
};

const CommunityDetailsForm = () => {
    const {
        about,
        setIsCommunityDetailsFormVisible,
        setAbout,
        setWidgets,
        setLoading,
    } = useSubreddit();

    const {communityDetails: {name, isModerator}} = about;

    const {addNotification} = useNotifications();

    if (!about) return null;

    const onClose = () => setIsCommunityDetailsFormVisible(false);


    const editCommunityDetails = async (formData) => {
        const subredditId = about.communityDetails.subredditId;
        const response = await axios.patch(API_ROUTES.editCommunityDetails, {
            'subredditId': subredditId,
            'membersNickname': formData.membersNickname,
            'currentlyViewingNickname':
            formData.viewingNickname,
            'communityDescription':
            formData.communityDescription,
        } );
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
            loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
            addNotification({message: 'Community Details updated successfully', type: 'success'});
        } catch (error) {
            addNotification({message: error.message, type: 'error'});
        }
    };

    const inputConfigs = [
        {name: 'membersNickname', label: 'Members\' Nickname', type: 'text', required: true,
            value: about.communityDetails.membersNickname},
        {name: 'viewingNickname', label: 'Currently Viewing Nickname', type: 'text', required: true,
            value: about.communityDetails.currentlyViewingNickname},
        {name: 'communityDescription', label: 'Community Description', type: 'textarea', required: true,
            value: about.communityDetails.description},
    ];

    return (
        <GenericForm
            inputConfigs={inputConfigs}
            onSubmit={onSubmit}
            onClose={onClose}
            isDeleteDisabled={true}
        />
    );
};


const TextWidgetForm = () => {
    const {textWidgetId, textWidget, setIsTextWidgetFormVisible, about, setTextWidgetId,
        setAbout, setWidgets, setLoading, setTextWidget,
    } = useSubreddit();
    const {addNotification} = useNotifications();

    const {communityDetails: {name, isModerator}} = about;


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
            loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
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
                loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
                addNotification({message: 'Text Widget added successfully', type: 'success'});
            } else {
                await editTextWidget(formData);
                loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
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
            onDelete={onDelete}
        />
    );
};

TextWidgetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

const BookmarksForm = () => {
    const {bookmarkWidgetId, about, setAbout, setWidgets, setLoading,
        setIsBookmarksFormVisible, setBookmarkWidgetId} = useSubreddit();

    const {addNotification} = useNotifications();

    const {communityDetails: {name, isModerator}} = about;

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
            loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
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
            if (!isEdit) {
                await addBookmarksWidget(formData);
                loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
                addNotification({message: 'Bookmarks widget added successfully', type: 'success'});
            } else {
                await addBookmark(formData);
                setBookmarkWidgetId(null);
                loadData(name, null, setAbout, setWidgets, setLoading, isModerator, addNotification);
                addNotification({message: 'Bookmark added successfully', type: 'success'});
            }
        } catch (error) {
            addNotification({message: 'failed to add new bookmark T T', type: 'error'});
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
            onDelete={onDelete}
        />
    );
};

BookmarksForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

// /////////////////////////////////////////////////////////////////////////////
// contains three buttons that open forms for adding new widgets
// each one have label and onclick function
const AddNewWidgets = () => {
    const {setIsBookmarksFormVisible, setIsTextWidgetFormVisible,
        setIsAddNewWidgetsVisible,
        about} = useSubreddit();

    const classes = {
        addNewWidgetsContainer: 'flex flex-col gap-4 bg-[var(--background)]',
        addNewWidgetsBtn: `bg-[var(--newCommunityTheme-button)] 
        text-[color:var(--newCommunityTheme-body)] text-[14px]/[17px] 
        font-[700] tracking-[unset] text-center align-middle cursor-pointer px-[16px] py-[4px] rounded-full`,
        closeButton: `absolute top-0 right-0 p-2 cursor-pointer`,
    };

    const formStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        zIndex: '1000',
    };

    return (
        <div className={classes.addNewWidgetsContainer}
            style = {formStyle} data-testid="add-new-widgets-container"
        >
            <div className={classes.closeButton} onClick={() => setIsAddNewWidgetsVisible(false)}>
                X
            </div>
            <button
                className={classes.addNewWidgetsBtn}
                onClick={() => {
                    window.open(`r/${about.communityDetails.name}/about/rules`, '_self');
                }}
            >
                Add Rules
            </button>
            <button
                className={classes.addNewWidgetsBtn}
                onClick={() => {
                    setIsBookmarksFormVisible(true);
                    setIsAddNewWidgetsVisible(false);
                }}
            >
                Add Bookmarks
            </button>
            <button
                className={classes.addNewWidgetsBtn}
                onClick={() => {
                    setIsTextWidgetFormVisible(true);
                    setIsAddNewWidgetsVisible(false);
                }}
            >
                Add Text Widget
            </button>
        </div>
    );
};
