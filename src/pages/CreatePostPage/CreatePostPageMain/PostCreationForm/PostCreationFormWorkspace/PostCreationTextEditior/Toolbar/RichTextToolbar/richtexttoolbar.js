/*eslint-disable*/
import React ,{useState, useRef, useEffect} from 'react';
import {getIconComponent} from '../../../../../../../../generic components/iconsmap.js';
import {FormatOption} from
    './FormatOption/formatoption.js';


/**
 * Renders the text editor options for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function RichTextToolbar() {
    const ThreeDotsIcon = getIconComponent('threedots', true);
    const [isMoreOptionsVisible, setIsMoreOptionsVisible] = useState(false);
    const toolbarRef = useRef(null);
    const [toolbarWidth, setToolbarWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (toolbarRef.current) {
                setToolbarWidth(toolbarRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);


    // const optionsList = [
    //     {name: 'bold', icon: 'bold'},
    //     {name: 'italics', icon: 'italics'},
    //     {name: 'link', icon: 'link'},
    //     {name: 'strikethrough', icon: 'strikethrough'},
    //     {name: 'inline code', icon: 'inline code'},
    //     {name: 'superscript', icon: 'superscript'},
    //     {name: 'spoiler', icon: 'spoiler'},
    //     {name: 'heading', icon: 'heading'},
    //     {name: 'bulleted list', icon: 'bulleted list'},
    //     {name: 'numbered list', icon: 'numbered list'},
    //     {name: 'quote block', icon: 'quote block'},
    //     {name: 'code block', icon: 'code block'},
    //     {name: 'table', icon: 'table'},
    //     {name: 'add an image', icon: 'add an image'},
    //     {name: 'add a video', icon: 'add a video'},
    // ];

    const optionsList = [
        {name: 'bold', icon: 'bold'},
        {name: 'italics', icon: 'bold'},
        {name: 'link', icon: 'bold'},
        {name: 'strikethrough', icon: 'bold'},
        {name: 'inline code', icon: 'bold'},
        {name: 'superscript', icon: 'bold'},
        {name: 'spoiler', icon: 'bold'},
        {name: 'heading', icon: 'bold'},
        {name: 'bulleted list', icon: 'bold'},
        {name: 'numbered list', icon: 'bold'},
        {name: 'quote block', icon: 'bold'},
        {name: 'code block', icon: 'bold'},
        {name: 'table', icon: 'bold'},
        {name: 'add an image', icon: 'bold'},
        {name: 'add a video', icon: 'bold'},
    ];
    const middleIndex = Math.floor(toolbarWidth / 34);

    const visibleOptionsList = optionsList.slice(0, middleIndex);
    const nonVisibleOptionsList = optionsList.slice(middleIndex, optionsList.length);


    return (
        <div ref={toolbarRef} className='relative ml-[4px] flex size-full items-center '>
            <div className='absolute flex items-center'>
                {visibleOptionsList.map((option) =>
                    (<FormatOption key={option.name} option={option}/>))}
                <span>
                    <div className="mx-1.5
                    my-0 box-border h-3.5
                    w-px border-r border-solid border-r-[color:var(--newCommunityTheme-line)]" />
                </span>
                <div className="relative ml-[5px]
                size-[32px]">
                    {(visibleOptionsList.length != optionsList.length) && <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label="more options"
                        id="Post--Overflow-Dropdown__5c39d4"
                        data-adclicklocation="overflow_menu"
                        className="h-[24px] w-full
                        cursor-pointer rounded-[2px] border-0 bg-transparent"
                        onClick={() => setIsMoreOptionsVisible(!isMoreOptionsVisible)}
                    >
                        <ThreeDotsIcon className="icon h-[32px] text-[var(--newCommunityTheme-actionIcon)]"/>
                    </button>}
                    <div className='absolute left-0 top-[24px] z-10 mt-0
                    flex
                    overflow-visible
                    rounded-[4px]
                    border-DEFAULT border-solid
                     bg-[var(--newCommunityTheme-body)]
                     text-[var(--newCommunityTheme-bodyText)]
                     shadow-[0_2px_4px_0_var(--newCommunityTheme-bodyTextAlpha20)]
                     '>
                        {isMoreOptionsVisible &&  nonVisibleOptionsList.map((option) =>
                            (<FormatOption key={option.name} option={option}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}
