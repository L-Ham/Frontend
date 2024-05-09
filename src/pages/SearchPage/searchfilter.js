import React from 'react';
import {getIconComponent} from '../../generic components/iconsmap.js';
import {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {SortBy} from '../../generic components/FeedFilter/sortby.js';
// import {ViewOptions} from '../../generic components/FeedFilter/viewoptions.js';
import {useLocation} from 'react-router-dom';

/**
 *
 * @return {JSX.Element} The rendered FeedFilter component.
 */
function SearchFilter() {
    const menuRef = useRef(null);
    const CaretDownIcon = getIconComponent('caret-down', false);
    const [isSortByOpen, setIsSortByOpen] = useState(false);
    const sortbys = ['Relevance', 'Top', 'New'];
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const sorting = queryParams.get('sortRelevance') === 'true' ? 'Relevance' :
        queryParams.get('sortTop') === 'true' ? 'Top' :
            queryParams.get('sortNew') === 'true' ? 'New' : 'Relevance';

    useEffect(() => {
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsSortByOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <>
            <div className='mx-1 my-2' data-testid="feed-#$$satdasdy235">
                <div className='flex h-[32px]'>
                    <div className='flex items-center'>
                        <div className='nd:h-[32px] nd:max-h-[32px] nd:w-[54px]'>
                            <div className='' aria-label='Sort By'
                                style={{font: 'var(--font-12-16-semibold)'}}>
                                <button className='box-border inline-flex h-8
                                    cursor-pointer items-center justify-center
                                    overflow-hidden whitespace-nowrap rounded-full
                                    bg-transparent pl-2.5 pr-1.5
                                    text-[var(--color-neutral-content-weak)]
                                    hover:bg-[var(--color-secondary-background-hover)]
                                    active:bg-[var(--color-interactive-pressed)]'
                                onClick={(event) => {
                                    event.stopPropagation();
                                    event.preventDefault();
                                    setIsSortByOpen(!isSortByOpen);
                                }}>
                                    <span className='flex items-center justify-center'>
                                        <span className='flex items-center gap-2'>
                                            {sorting}
                                        </span>
                                    </span>
                                    <span className='ml-1 inline-flex rotate-0 transition duration-200 ease-in-out'>
                                        <CaretDownIcon className="size-[16px]"/>
                                    </span>
                                </button>
                            </div>
                            {isSortByOpen &&
                            <div ref={menuRef}
                                className='absolute z-[2] inline-flex max-h-[50vh] w-max
                                    justify-center overflow-hidden overflow-y-auto
                                    rounded-lg bg-[var(--color-neutral-background-strong)]
                                    shadow-[rgba(0,0,0,0.1)_0px_4px_8px_0px,rgba(0,0,0,0.25)_0px_6px_12px_0px]
                                    -outline-offset-1'
                                aria-label='menu'
                            >
                                <ul>
                                    <div className='m-4 mb-2 text-sm font-semibold text-[var(--color-tone-1)]'>
                                            Sort by
                                    </div>
                                    {sortbys.map((sortBy) => (
                                        <SortBy
                                            key={sortBy}
                                            sortBy={sortBy}
                                            setSortBy={() => {
                                                // const searchParams = new URLSearchParams();
                                                queryParams.set('sortRelevance', sortBy === 'Relevance');
                                                queryParams.set('sortTop', sortBy === 'Top');
                                                queryParams.set('sortNew', sortBy === 'New');
                                                // go to the new url
                                                navigate(`?${queryParams.toString()}`);
                                                setIsSortByOpen(false);
                                            }}
                                        />
                                    ))}
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-b-[0.0625rem] border-t-0 border-solid
            border-b-[var(--color-neutral-border-weak)] bg-transparent p-0' />
        </>
    );
}

export {SearchFilter};
