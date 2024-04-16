import React from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {usePostCreation} from '../postcreationcontext.js';

export const usePostCreationTabs = () => {
    const {activeTab, setActiveTab} = usePostCreation();
    const PostIconOutline = getIconComponent('post', false);
    const PostIconFill = getIconComponent('post', true);
    const ImageIconOutline = getIconComponent('image', false);
    const ImageIconFill = getIconComponent('image', true);
    const LinkIcon = getIconComponent('link');
    const PollIcon = getIconComponent('poll');

    const tabs = [
        {
            title: 'Post',
            Icon: activeTab === 'post' ?
                <PostIconFill className="icon mr-[8px]" /> :
                <PostIconOutline className="icon mr-[8px]" />,
            isActive: activeTab === 'post',
            onClick: () => setActiveTab('post'),
        },
        {
            title: 'Images & Video',
            Icon: activeTab === 'img' ?
                <ImageIconFill className="icon mr-[8px]" /> :
                <ImageIconOutline className="icon mr-[8px]" />,
            isActive: activeTab === 'img',
            onClick: () => setActiveTab('img'),
        },
        {
            title: 'Link',
            Icon: <LinkIcon className="icon mr-[8px]" />,
            isActive: activeTab === 'link',
            onClick: () => setActiveTab('link'),
        },
        {
            title: 'Poll',
            Icon: <PollIcon className="icon mr-[8px]" />,
            isActive: activeTab === 'poll',
            onClick: () => setActiveTab('poll'),
        },
    ];

    return {tabs};
};
