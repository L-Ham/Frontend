/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import './searchpage.css';
import {RightSidebar} from '../PopularPage/RightSideBar/rightsidebar.js';
import {Post} from './Post/post.js';
import {Community} from './Community/community.js';
import {Comment} from './Comment/comment.js';
import {User} from './People/user.js';
import {Media} from './Media/media.js';
import {axiosInstance as axios} from '../../requests/axios.js';
import {API_ROUTES} from '../.././requests/routes';
import {useLocation} from 'react-router-dom';
import uuid from 'react-uuid';
import {NavLink} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import {SearchFilter} from './searchfilter.js';
import {useDispatch} from 'react-redux';
import {addRecentSearch} from '../../store/userSlice.js';

/**
 * Selectors component
 * @return {React.Component}
 */
function SearchPage() {
    const [searchResults, setSearchResults] = useState({
        posts: [],
        communities: [],
        users: [],
        comments: [],
        media: [],
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchType = queryParams.get('searchType') || 'posts';
    const searchQuery = queryParams.get('searchQuery') || '';
    const sortRelevance = queryParams.get('sortRelevance') || 'true';
    const sortTop = queryParams.get('sortTop') || 'false';
    const sortNew = queryParams.get('sortNew') || 'false';
    const isNSFW = queryParams.get('isNSFW') || 'false';
    const subredditName = queryParams.get('subredditName') || '';
    const mediaOnly = searchType == 'media';

    const dispatch = useDispatch();
    console.log('here2');
    dispatch(addRecentSearch({
        searchQuery,
    }));

    const tabs = subredditName !== '' ?
        [
            {name: 'Posts', type: 'posts'},
            {name: 'Comments', type: 'comments'},
            {name: 'Media', type: 'media'},
        ] :
        [
            {name: 'Posts', type: 'posts'},
            {name: 'Communities', type: 'communities'},
            {name: 'Comments', type: 'comments'},
            {name: 'Media', type: 'media'},
            {name: 'People', type: 'users'},
        ];

    // get search results
    const getPosts = () => {
        if (subredditName) {
            axios.get(API_ROUTES.searchSubredditPost(
                searchQuery,
                sortRelevance,
                sortTop,
                sortNew,
                mediaOnly,
                isNSFW,
                subredditName,
            ), {
            }).then((response) => {
                setSearchResults({...searchResults, posts: response.data.posts});
            }).catch((error) => {
                console.error(error);
            });
        } else {
            axios.get(API_ROUTES.searchPosts(
                searchQuery,
                sortRelevance,
                sortTop,
                sortNew,
                mediaOnly,
                isNSFW,
            ), {
            }).then((response) => {
                setSearchResults({...searchResults, posts: response.data.posts});
            }).catch((error) => {
                console.error(error);
            });
        }
    };

    const getCommunities = () => {
        axios.get(API_ROUTES.searchCommunities(
            searchQuery,
        ), {
        }).then((response) => {
            // setSearchCommunityResults(response.data.matchingNames);
            setSearchResults({...searchResults, communities: response.data.matchingNames});
        }).catch((error) => {
            console.error(error);
        });
    };

    const getUsers = () => {
        axios.get(API_ROUTES.searchUsers(
            searchQuery,
        ), {
        }).then((response) => {
            setSearchResults({...searchResults, users: response.data.matchingUsernames});
        }).catch((error) => {
            console.error(error);
        });
    };

    const getComments = () => {
        if (subredditName) {
            axios.get(API_ROUTES.searchSubredditComments(
                searchQuery,
                sortRelevance,
                sortTop,
                sortNew,
                subredditName,
            ), {
            }).then((response) => {
                console.log(response);
                // setSearchCommentResults(response.data.comments);
                setSearchResults({...searchResults, comments: response.data.comments});
            }).catch((error) => {
                console.error(error);
            });
        } else {
            axios.get(API_ROUTES.searchComments(
                searchQuery,
                sortRelevance,
                sortTop,
                sortNew,
            ), {
            }).then((response) => {
                console.log(response);
                // setSearchCommentResults(response.data.comments);
                setSearchResults({...searchResults, comments: response.data.comments});
            }).catch((error) => {
                console.error(error);
            });
        }
    };

    const getMedia = () => {
        if (subredditName) {
            axios.get(API_ROUTES.searchSubredditPost(
                searchQuery,
                sortRelevance,
                sortTop,
                sortNew,
                mediaOnly,
                isNSFW,
                subredditName,
            ), {
            }).then((response) => {
                setSearchResults({...searchResults, media: response.data.posts});
            }).catch((error) => {
                console.error(error);
            });
        } else {
            axios.get(API_ROUTES.searchPosts(
                searchQuery,
                sortRelevance,
                sortTop,
                sortNew,
                mediaOnly,
                isNSFW,
            ), {
            }).then((response) => {
                setSearchResults({...searchResults, media: response.data.posts});
            }).catch((error) => {
                console.error(error);
            });
        }
    };


    console.log('searchResults', searchResults);
    useEffect(() => {
        if (searchType == 'communities') {
            getCommunities();
        } else if (searchType == 'comments') {
            getComments();
        } else if (searchType == 'users') {
            getUsers();
        } else if (searchType == 'media') {
            getMedia();
        } else {
            getPosts();
        }
    }, [searchType, searchQuery, sortRelevance, sortTop, sortNew, mediaOnly, isNSFW]);

    const renderPost = (result) => (
        <React.Fragment key={uuid()}>
            <Post
                postData={result}
            />
            <hr className='w-full border-DEFAULT border-[var(--color-neutral-border-weak)]'/>
        </React.Fragment>
    );

    const renderCommunity = (result) => (
        <React.Fragment key={uuid()}>
            <Community
                name={result.name}
                URL={`/r/${result.name}`}
                imgSrc={result.appearance.avatarImage?.url ?? 'https://via.placeholder.com/150'}
                isNSFW={result.isNSFW}
                description={result.description}
                memberCount={result.membersCount}
                onlineCount={result.currentlyViewingCount}
            />
            <hr className='w-full border-DEFAULT border-[var(--color-neutral-border-weak)]'/>
        </React.Fragment>
    );

    const renderUser = (result) => (
        <React.Fragment key={uuid()}>
            <User
                name={result.userName}
                imgSrc={result.avatarImageUrl ?? 'https://via.placeholder.com/150'}
                isNSFW={result.profileSettings.NSFW}
                description={result.profileSettings.about}
                karma={0}
            />
            <hr className='w-full border-DEFAULT border-[var(--color-neutral-border-weak)]'/>
        </React.Fragment>
    );

    const renderComment = (result) => (
        <React.Fragment key={uuid()}>
            <Comment
                commentData={result}
            />
            <hr className='w-full border-DEFAULT border-[var(--color-neutral-border-weak)]'/>
        </React.Fragment>
    );

    const renderMedia = (result) => (
        <Media postData={result} key={uuid()}/>
    );

    return (
        <>
            <div className='order-2 mx-auto box-border flex
                w-full flex-col md:px-4 nd:col-start-2 nd:w-[1120px] nd:max-w-[calc(100vw-272px)]'>

                <div className='w-full'>
                    <div className='px-4 lg:px-0'>
                        <div className='flex flex-wrap items-center justify-between pt-4'>
                            <div className='flex items-center overflow-hidden'>
                                <span className="pr-4">
                                    <h1 className="my-0 whitespace-nowrap text-xs font-semibold
                                    text-[var(--color-secondary-weak)]">
                                        SEARCH RESULTS
                                    </h1>
                                </span>
                                <div className='py-2'>
                                    <div className='container'>
                                        <div className='flex flex-row items-center gap-[var(--button-gap)]
                                        overflow-auto'>
                                            {
                                                tabs.map((tab) => {
                                                    const queryParams = new URLSearchParams(location.search);
                                                    queryParams.set('searchType', tab.type);
                                                    const newUrl = `${location.pathname}?${queryParams.toString()}`;

                                                    return (
                                                        <span className='flex shrink-0' key={uuid()}>
                                                            <NavLink to={newUrl}
                                                                className={`inline-flex h-10
                                                                items-center justify-center
                                                                rounded-full px-[var(--rem14)]
                                                                text-[var(--color-neutral-content-strong)] hover:no-underline 
                                                                ${searchType == tab.type ? 'bg-[var(--color-secondary-background-selected)]' : ''}`}

                                                            >
                                                                <span className="flex items-center justify-center">
                                                                    <span className="flex items-center gap-2">
                                                                        <span className="flex">
                                                                            <span className="flex min-w-[40px] justify-center">
                                                                                {tab.name}
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </NavLink>
                                                        </span>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative flex flex-row-reverse items-center gap-2'>
                                <span className="switch-input-primary outer">
                                    <span className="knob">
                                    </span>
                                </span>
                                <label className='text-sm text-[var(--color-neutral-content-strong)]'>
                                    Safe Search
                                </label>
                            </div>
                        </div>

                        <div className='flex min-h-8 items-center gap-4 space-x-4'>
                            <div className='flex items-center gap-4'>
                                <span className="text-sm font-normal text-[var(--color-neutral-content-weak)]">
                                    Sort by:
                                </span>
                                <SearchFilter/>

                                <div className='flex items-center'>
                                    <div className='max-h-[50vh] overflow-y-auto'>

                                    </div>
                                </div>
                            </div>

                            <div className='ml-4 size-auto flex-1 border-x-0 border-b-0 border-t-[.0625rem]
                             border-solid border-[var(--color-neutral-border-weak)]'>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex w-full gap-4 pb-8'>
                    <main className='min-h-screen w-full scroll-mt-[var(--shreddit-header-height)]
                     md:scroll-mt-[56px] s:max-w-[calc(100%_-(16px_+_316px))] lxl:max-w-[756px]'>

                        <div className='mx-auto
                        min-h-[calc(100vh-var(--shreddit-header-height)-var(--shreddit-header-height))]
                        bg-[var(--color-neutral-background)]
                        xs:px-0 md:px-4 lg:px-0 '>

                            {searchType == 'posts' && searchResults.posts.map((result) => renderPost(result))}
                            {searchType == 'communities' && searchResults.communities.map((result) => renderCommunity(result))}
                            {searchType == 'users' && searchResults.users.map((result) => renderUser(result))}
                            {searchType == 'comments' && searchResults.comments.map((result) => renderComment(result))}
                            {searchType == 'media' && (
                                <Box sx={{width: '100%', height: '100%'}}>
                                    <ImageList cols={Math.min(searchResults.media.length, 3)} gap={20} variant='masonry'>
                                        {searchResults.media.map((result) => renderMedia(result))}
                                    </ImageList>
                                </Box>
                            )}

                        </div>
                    </main>
                    <div className='top-0 hidden
                                w-[316px] min-w-[316px] md:sticky md:top-[56px]
                                md:max-h-[calc(100vh-56px-1px)] md:overflow-y-auto
                                md:overflow-x-hidden s:block'>
                        {/* right side bar */}
                        <RightSidebar/>
                    </div>
                </div>


            </div>
        </>
    );
}

export {SearchPage};
