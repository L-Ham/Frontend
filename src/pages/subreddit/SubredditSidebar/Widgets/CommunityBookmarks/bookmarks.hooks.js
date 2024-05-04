import React from 'react';
import {MultiLinkButton} from '../../MultilinkButton/multilinkbutton.js';

export const useBookmarksWidget = ({data}) => {
    console.log('bookmarks widget', data);
    if (!data) return null;

    const multiLinkButtonsComponents = data.map((bookmark) => (
        <MultiLinkButton key={bookmark.text} data={bookmark}/>
    ));

    return {
        multiLinkButtonsComponents,
    };
};
