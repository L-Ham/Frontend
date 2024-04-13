import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {PostCreationFormTab} from './PostCreationFormTab/postcreationformtab.js';
import {usePostCreation} from '../postcreationcontext.js';


/**
 * Renders the post creation form tabs.
 * @param {Object} props The component props.
 * @param {string} props.activeTab The active tab.
 * @param {Function} props.setActiveTab The active tab setter.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormTabs() {
    const {activeTab, setActiveTab} = usePostCreation();
    const PostIconOutline = getIconComponent('post', false);
    const PostIconFill = getIconComponent('post', true);
    const ImageIconOutline = getIconComponent('image', false);
    const ImageIconFill = getIconComponent('image', true);
    const LinkIcon = getIconComponent('link');
    const PollIcon = getIconComponent('poll');


    const tabs = [{
        title: 'Post',
        Icon: activeTab === 'post' ? <PostIconFill className="icon mr-[8px]"/> :
            <PostIconOutline className="icon mr-[8px]"/>,
        isActive: activeTab === 'post',
        onClick: () => setActiveTab('post'),
    }, {
        title: 'Images & Video',
        Icon: activeTab === 'img' ? <ImageIconFill className="icon mr-[8px]"/> :
            <ImageIconOutline className="icon mr-[8px]"/>,
        isActive: activeTab === 'img',
        onClick: () => setActiveTab('img'),
    },
    {
        title: 'Link',
        Icon: <LinkIcon className="icon mr-[8px]"/>,
        isActive: activeTab === 'link',
        onClick: () => setActiveTab('link'),
    }, {
        title: 'Poll',
        Icon: <PollIcon className="icon mr-[8px]"/>,
        isActive: activeTab === 'poll',
        onClick: () => setActiveTab('poll'),
    }];

    return (
        <div className="m-[0_0_12px]">
            <div className="flex items-stretch">
                {tabs.map((tab) => (<PostCreationFormTab key={tab.title} {...tab}/>))}
            </div>
        </div>
    );
}

PostCreationFormTabs.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};
