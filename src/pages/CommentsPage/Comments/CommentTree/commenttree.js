import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect, useMemo} from 'react';
import {Comment} from './Comment/comment.js';
import {Fallback} from './Fallback/fallback';
import {Sorter} from './Sorter/sorter';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import uuid from 'react-uuid';
/**
 * Renders CommentTree Components
 * @param {string} postId
 * @return {JSX.Element} The rendered CommentTree component.
 */
export function CommentTree({
    postId,
    endpoint,
    WrapperComponent,
    wrapperProps,
}) {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [lastPage, setLastPage] = useState(1);
    const commentElements = useMemo(() =>
        comments.map((comment) =>
            WrapperComponent ? (
                <WrapperComponent key={comment._id} {...wrapperProps} commentId={comment._id}>
                    <Comment key={uuid()} {...comment} postId={postId} />
                </WrapperComponent>
            ) : (
                <Comment key={uuid()} {...comment} postId={postId} />
            )), [comments]);
    const limit = 5;
    useEffect(() => {
        if (!endpoint) {
            setComments([]);
            return;
        }
        const fetchComments = async () => {
            setLoading(true);
            try {
                if (hasMore === false) {
                    setLoading(false);
                    return;
                }
                const response = await axios.get(endpoint(page, limit));
                if (page === 1) {
                    setComments(response.data.comments);
                } else if (lastPage !== page) {
                    setComments((prevComments) => [...prevComments, ...response.data.comments]);
                }
                if (response.data.comments.length < limit) {
                    setHasMore(false);
                }
                setLastPage(page);
                setLoading(false);
            } catch (error) {
                if (error?.response?.data?.message === 'The retrieved array is empty') {
                    setHasMore(false);
                    setLoading(false);
                } else if (error?.response?.status === 500) {
                    setHasMore(false);
                    setLoading(false);
                } else {
                    // // console.error(error);
                }
            }
        };

        fetchComments();
    }, [endpoint, page]);

    useEffect(() => {
        const handleScroll = (event) => {
            const {scrollHeight, scrollTop, clientHeight} = event.target.documentElement;
            if (Math.abs(scrollHeight - scrollTop - clientHeight) < 1) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);
    return (
        <div className='relative flex flex-col gap-4 px-4 xs:px-0' data-testid={`commentTree-${postId}`}>
            {comments.length === 0 ?
                <Fallback />:
                <>
                    <Sorter />
                    {commentElements}
                </>}
        </div>
    );
}

CommentTree.propTypes = {
    postId: PropTypes.string.isRequired,
    endpoint: PropTypes.func,
    WrapperComponent: PropTypes.elementType,
    wrapperProps: PropTypes.object,
};
