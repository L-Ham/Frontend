
import React from 'react';
import './usersection.css';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {useSelector} from 'react-redux';

/**
 * Renders the user section.
 * @return {JSX.Element} The rendered component.
 */
export function UserSection() {
    const user = useSelector((state) => state.user);

    const EditIcon = getIconComponent('edit', false);
    const FlairProfileIcon = getIconComponent('flair-profile');
    return (
        <div className="user-section mt-[12px]">
            <hr className="mx-0
            my-[16px] h-px border-none bg-[var(--newCommunityTheme-widgetColors-lineColor)]"/>
            <div className="mt-[12px]">
                <div className="flex items-center
            justify-between text-[10px]/[12px]
            font-[700] uppercase tracking-[0.5px]">
                    preview
                    <button
                        role="button"
                        tabIndex={0}
                        className="font relative ml-auto box-border flex min-h-[32px]
                    w-auto min-w-[32px]
                    cursor-pointer items-center justify-center break-words rounded-full border-DEFAULT
                    border-solid border-transparent bg-transparent fill-[var(--newCommunityTheme-button)]
                     p-0 text-center text-[14px]/[17px]
                     font-[700] tracking-[unset] text-[var(--newCommunityTheme-button)]"
                        onClick={() => alert('not supported yet :)')}
                    >
                        <EditIcon className="icon cursor-pointer
                    break-words
                    fill-[var(--newCommunityTheme-button)] text-center text-[var(--newCommunityTheme-button)]"/>
                    </button>
                </div>
                <div className="mx-0 my-[8px] flex w-full ">
                    <div className="flex max-w-full items-center justify-center ">
                        <div className="relative h-full ">
                            <FlairProfileIcon
                                className="content-box mt-[6px] box-border
                             size-[28px] overflow-hidden border-DEFAULT border-solid
                              bg-[#d7dfe2] fill-white object-cover
                              object-center"
                                viewBox="0 0 320 320"
                                xmlns="http://www.w3.org/2000/svg"
                            />
                        </div>
                        <div className="ml-[8px] flex min-w-0 flex-col items-start fill-[var(--newRedditTheme-bodyText)]
                    text-[var(--newRedditTheme-bodyText)]">
                            <div className="flex w-full items-center break-words">
                                <span className="truncate
                            text-[12px]/[16px] font-[500]
                            text-[var(--newCommunityTheme-widgetColors-sidebarWidgetTextColor)]">
                                    {user.displayName || user.username || 'Equivalent_Serve_549'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
