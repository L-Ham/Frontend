import React, {useState, useEffect} from 'react';
import {VIEW_CONTEXTS} from '../../data';
import PropTypes from 'prop-types';
import '../../../../pages/CommentsPage/Comments/btn.css';
/**
 * PostLink component
 * @return {React.Component}
 */
export function PostLink({
    postId,
    url: link,
    viewContext,
}) {
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(() => {
        const url = 'https://screenshot-maker.p.rapidapi.com/browser/screenshot/_take?targetUrl=' + link;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '820056644dmsh09f85d54ec85952p1c485djsn60f85fb16c3d',
                'x-rapidapi-host': 'screenshot-maker.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground',
                'Content-Type': 'application/json',
            },
        };

        const sendRequest = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setThumbnail(data.imageUrl);
            } catch (error) {
                // console.error(error);
            }
        };
        if (viewContext === VIEW_CONTEXTS.COMMENTS_PAGE) {
            sendRequest();
        }
    }, [link]);
    return (
        <div data-testid={`link-${postId}`}>

            {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
                <>
                    <div className="relative isolate mb-2 cursor-pointer overflow-hidden
                    bg-[var(--color-neutral-background)] xs:rounded-[16px]">
                        <div className="pointer-events-none absolute inset-0
                    z-[3] border border-x-0 border-solid border-[var(--color-neutral-border-weak)] xs:rounded-[16px]
                    xs:border-x"/>
                        <div>
                            <div style={{height: thumbnail ? '12rem' : '0'}}>
                                <div className=' overflow-hidden'
                                    style={{height: `100%`}}>
                                    <img src={thumbnail} alt="thumbnail"
                                        className='w-full' />
                                </div>
                            </div>
                            <div>
                                <a href={link} className="flex flex-row justify-between border-x-0
                            border-b-0 border-t border-solid border-[var(--color-neutral-border-weak)]
                             bg-[var(--color-neutral-background)] px-4 py-2
                            hover:no-underline active:no-underline" target="_blank" rel="noreferrer">
                                    <span className="flex items-center justify-center
                                text-[var(--color-neutral-content-weak)] hover:underline">
                                        {link}
                                    </span>
                                    <button className='button-medium button-bordered button !inline-flex
                                     items-center justify-center !px-3.5'>
                                        <span className="flex items-center justify-center">
                                            <span className="flex items-center gap-1 text-sm
                                            font-semibold
                                            text-[var(--color-secondary-plain)]">Open</span>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </> :
                <a href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-a-hover)]"
                >
                    {link}
                </a>}
        </div>
    );
}

PostLink.propTypes = {
    postId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
