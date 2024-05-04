import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const PostCreationContext = createContext();

/**
 * Provides the context for the post creation form.
 *  @return {Object} The post creation context.
 */
export function usePostCreation() {
    return useContext(PostCreationContext);
}

/**
 * Provides the context for the post creation form.
 * @param {Object} props The component props.
 * @param {React.ReactNode} props.children The children.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('post');
    const [postTitle, setPostTitle] = useState('');
    const [text, setText] = useState('');
    const [files, setFiles] = useState([]);
    const [link, setLink] = useState('');
    const [linkErrorMessage, setLinkErrorMessage] = useState('');
    const [pollData, setPollData] = useState({options: {0: '', 1: ''}, votingLength: 3});
    const [postTags, setPostTags] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [isSendPostNotifications, setIsSendPostNotifications] = useState(true);
    const [scheduledData, setScheduledData] = useState({Date: '', Time: ''});

    const value = {
        loading, setLoading,
        activeTab, setActiveTab,
        postTitle, setPostTitle,
        text, setText,
        files, setFiles,
        link, setLink,
        linkErrorMessage, setLinkErrorMessage,
        pollData, setPollData,
        postTags, setPostTags,
        activeFilters, setActiveFilters,
        isSendPostNotifications, setIsSendPostNotifications,
        scheduledData, setScheduledData,
    };

    return (
        <PostCreationContext.Provider value={value}>
            {children}
        </PostCreationContext.Provider>
    );
}

PostCreationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
