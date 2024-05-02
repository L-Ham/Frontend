import React from 'react';
import {Post} from '../../generic components/Post/post';
import {DATA, VIEW_CONTEXTS} from '../../generic components/Post/data';
import PropTypes from 'prop-types';
import {Comments} from './Comments/comments';
import {SubredditProvider} from '../subreddit/subredditcontext';
import {SubredditSidebar} from '../subreddit/SubredditSidebar/subredditsidebar';
import '../../layouts/SideBar/sidebar.css';
/**
 * Renders Comments Page
 * @return {JSX.Element} The rendered Comments Page component.
 */
export function CommentsPage({
    postId,
    subredditName,
}) {
    return (
        <div className='order-2 mx-auto box-border flex
        w-full flex-col md:px-4 nd:col-start-2 nd:w-[1120px] nd:max-w-[calc(100vw-272px)]'>
            <div className='flex w-full flex-wrap gap-4 pb-8 xs:flex-nowrap'>
                <div className='w-full scroll-mt-[56px] md:max-w-[calc(100%_-_(16px_+_316px))]
            nd:max-w-[calc(100%_-_(16px_+_316px))] lxl:max-w-[756px]'>
                    <Post {...DATA[postId]} viewContext={VIEW_CONTEXTS.COMMENTS_PAGE} />
                    <Comments postId={postId} />
                </div>
                <div className='styled-scrollbars block w-full overflow-hidden xs:sticky xs:top-[56px]
                xs:max-h-[calc(100vh_-_56px_-_1px)] xs:w-[316px] xs:min-w-[316px] xs:overflow-y-auto
                xs:overflow-x-hidden'>
                    <SubredditProvider name={'Dragon Oath'}>
                        <SubredditSidebar />
                    </SubredditProvider>
                </div>
            </div>
        </div>
    );
}


CommentsPage.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
};
