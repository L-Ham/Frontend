import React, {useState, useEffect, useMemo} from 'react';
import {Post} from './Post/post.js';
import PropTypes from 'prop-types';
import {FeedFilter} from './FeedFilter/feedfilter.js';
import {DATA} from './Post/data.js';
import {axiosInstance as axios} from '../requests/axios.js';
import {useNavigate} from 'react-router-dom';
/**
 * Renders the Feed component.
 * @param {string} viewContext The view context.
 * @param {string[]} postList The list of post ids.
 * @param {string} endpoint The endpoint for the feed.
 * @param {string} type The type of feed.
 * @param {JSX.Element} FallbackComponent The fallback component to render when no posts are available.
 * @param {string} name The name of the response data.
 * @param {func} WrapperComponent The wrapper component.
 * @param {object} wrapperProps The wrapper component props.
 * @return {JSX.Element} The rendered component.
 */
export function Feed({
    viewContext,
    postList,
    endpoint,
    type,
    FallbackComponent,
    name,
    WrapperComponent,
    wrapperProps = {},
}) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [lastPage, setLastPage] = useState(1);
    const postElements = useMemo(() =>
        posts.map((postel) =>
            WrapperComponent ? (
                <WrapperComponent key={postel._id}
                    {...postel} {...wrapperProps} postId={postel._id}>
                    <Post key={postel._id} viewContext={viewContext} {...postel} />
                </WrapperComponent>
            ) : (
                <Post key={postel._id} viewContext={viewContext} {...postel} />
            )), [posts, viewContext]);
    const limit = 5;
    useEffect(() => {
        if (!endpoint || type === 'ids') {
            setPosts(postList);
            return;
        }
        const fetchPosts = async () => {
            setLoading(true);
            try {
                if (hasMore === false) {
                    setLoading(false);
                    return;
                }
                const response = await axios.get(endpoint(page, limit));
                if (page === 1) {
                    setPosts(response.data[name]);
                    console.log(response.data[name]);
                } else if (lastPage !== page) {
                    setPosts((prevPosts) => [...prevPosts, ...response.data[name]]);
                    console.log(response.data[name]);
                }
                setLastPage(page);
                setLoading(false);
            } catch (error) {
                // if response message 'The retrieved array is empty' is received, set hasMore to false
                if (error?.response?.data?.message === 'The retrieved array is empty') {
                    setHasMore(false);
                    setLoading(false);
                } else if (error?.response?.status === 500) {
                    // error code is 500 (Internal Server Error) then set hasMore to false and dont request again
                    setHasMore(false);
                    setLoading(false);
                } else {
                    // console.error(error);
                }
            }
        };

        fetchPosts();
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
    if (type === 'ids' && postList) {
        postList = postList.map((postId) => DATA[postId]);
    }
    return (
        <>
            {posts.length === 0 ? FallbackComponent || <>
                <FeedFilter />
                <div>No Posts</div>
            </> : (
                <>
                    <FeedFilter />
                    {postElements}
                    {loading && 'Loading...'}
                </>
            )}
        </>
    );
}

/**
 * Returns the empty feed component.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditEmptyFeed() {
    const navigate = useNavigate();
    return (
        <>
            <FeedFilter />
            <div className='flex flex-col items-center justify-center pt-40'>
                <h1 className='mb-2 text-center text-4xl text-[var(--color-neutral-content-strong)]'>
                This Community doesn&apos;t have any posts yet
                </h1>
                <p className='mb-2 text-[var(--color-neutral-content-weak)]'>Make one and get this feed started</p>
                <button className="mx-2 rounded-3xl bg-[var(--color-primary-background)]
                px-5 py-2 text-[var(--color-global-white)] hover:bg-[var(--color-primary-background-hover)]"
                href='submit' onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    navigate('submit');
                }}>
                Create a post
                </button>
            </div>
        </>
    );
}


Feed.propTypes = {
    viewContext: PropTypes.string.isRequired,
    postList: PropTypes.arrayOf(PropTypes.string),
    endpoint: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    FallbackComponent: PropTypes.object,
    name: PropTypes.string,
    WrapperComponent: PropTypes.func,
    wrapperProps: PropTypes.object,
};

