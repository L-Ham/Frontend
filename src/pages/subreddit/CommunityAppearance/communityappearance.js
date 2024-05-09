/*eslint-disable*/
import React from 'react';
import './communityappearance.css';
import {useSubreddit} from '../subredditcontext';
import {UploadArea} from './components/uploadarea';
import {SvgIcon} from './components/svgicon';
import {IconButton} from './components/iconbutton';
import {ListItem} from './components/ListItem';

/**
 * Renders the community appearance settings.
 * @return {JSX.Element} The rendered component.
 * */
export function CommunityAppearance() {
    const {setIsUploadAvatarVisible, setIsUploadBannerVisible, setIsAppearanceSettingsVisible,
        isUploadBannerVisible, isUploadAvatarVisible} = useSubreddit();
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    if (isCollapsed) {
        return (
            <div className='fixed -bottom-4 left-80 z-[1000] flex min-w-[400px] max-w-[400px]
            flex-col rounded-3xl bg-[var(--background)]
            px-5 pb-8 pt-5' data-testid="community-appearance-container">
                <div className='flex flex-row items-center justify-between px-4' data-testid="header-container">
                    <h2 className='mr-5' data-testid="header-title">Community appearance</h2>
                    <span data-testid="button-container">
                        <IconButton onClick={toggleCollapse} icon={
                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                        .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        } id="dock-button" data-testid="dock-button" />
                        <IconButton onClick={() => {
                            setIsUploadAvatarVisible(false);
                            setIsUploadBannerVisible(false);
                            setIsAppearanceSettingsVisible(false);
                        }} icon={
                            <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116
                        10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                        } id="close-button" data-testid="close-button" />
                    </span>
                </div>
            </div>
        );
    }

    if (isUploadAvatarVisible || isUploadBannerVisible) {
        return (
            <div className='fixed -bottom-4 left-80 z-[1000] flex min-w-[400px] max-w-[400px] flex-col rounded-3xl bg-[var(--background)]
        px-5 pb-8 pt-5' data-testid="community-appearance-container">
                <div className='flex flex-row items-center justify-between px-4' data-testid="header-container">
                    <h2 className='mr-5' data-testid="header-title">Community appearance</h2>
                    <span data-testid="button-container">
                        <IconButton onClick={toggleCollapse} icon={
                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        } id="dock-button" data-testid="dock-button" />
                        <IconButton onClick={() => {
                            setIsUploadAvatarVisible(false);
                            setIsUploadBannerVisible(false);
                            setIsAppearanceSettingsVisible(false);
                        }} icon={
                            <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116
                10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                        } id="close-button" data-testid="close-button" />
                    </span>
                </div>
                <UploadArea data-testid="upload-area" />
                <div className="box-border w-full p-4" data-testid="settings-container">
                    <hr className="my-3 border-[var(--color-neutral-border)]" />

                    <li className="relative mt-0 list-none" role="presentation" data-testid="dark-mode-container">
                        <div className="relative flex justify-between gap-2 px-4 py-2
            text-[color:var(--color-secondary)] -outline-offset-1 " data-testid="dark-mode-toggle">
                            <span className="flex min-w-0 shrink items-center gap-2">
                                <span className="flex size-8 shrink-0 items-center justify-center
                    text-[1.25rem]/[1.25rem] leading-4" data-testid="dark-mode-icon">
                                    <SvgIcon>
                                        <path d="M9.875 19a9.073 9.073 0 0 1-8.48-5.78 1.094 1.094
                            0 0 1 .247-1.191 1.145 1.145 0 0 1 1.232-.255c1.13.449
                            2.361.587 3.564.4A6.89 6.89 0 0 0 12.17 6.44a6.806 6.806
                            0 0 0-.394-3.564 1.148 1.148 0 0 1 .255-1.231 1.1 1.1
                            0 0 1 1.193-.248 9.082 9.082 0 0 1 5.746 9.254 9.184
                            9.184 0 0 1-8.32 8.32 11.93 11.93 0 0 1-.775.028Zm-7.206-5.967A7.871
                            7.871 0 1 0 13.033 2.668 8.116 8.116 0 0 1 2.669 13.033Z"></path>
                                    </SvgIcon>
                                </span>
                                <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]" data-testid="dark-mode-text">
                                    <span className="text-[1.25rem]/[0.875rem]">Dark Mode</span>
                                    <span className="text-[0.75rem]/[1rem] text-[color:var(--color-secondary-weak)]">
                                    </span>
                                </span>
                            </span>
                            <span className="flex shrink-0 items-center" data-testid="dark-mode-checkbox">
                                <div
                                    name="dark-mode"
                                    aria-checked="true"
                                    role="checkbox" tabIndex="0" aria-disabled="false">
                                </div>
                            </span>
                        </div>
                    </li>
                </div>
            </div>
        );
    }


    return (
        <div className='fixed -bottom-4 left-80 z-[1000] flex min-w-[400px] max-w-[400px] 
        flex-col rounded-3xl bg-[var(--background)]
    px-5 pt-5' data-testid="community-appearance-container">
            <div className='flex flex-row items-center justify-between px-4' data-testid="header-container">
                <h2 className='mr-5' data-testid="header-title">Community appearance</h2>
                <span data-testid="button-container">
                    <IconButton onClick={toggleCollapse} icon={
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                    } id="dock-button" data-testid="dock-button" />
                    <IconButton onClick={() => {
                        setIsUploadAvatarVisible(false);
                        setIsUploadBannerVisible(false);
                        setIsAppearanceSettingsVisible(false);
                    }} icon={
                        <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116
                10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                    } id="close-button" data-testid="close-button" />
                </span>
            </div>
            <div className="box-border w-full p-4" data-testid="settings-container">
                <ul className="!m-0 w-full !p-0" data-testid="settings-list">
                    <ListItem title="Avatar" onClick={() => setIsUploadAvatarVisible(true)} data-testid="avatar-list-item" />
                    <ListItem title="Banner" onClick={() => setIsUploadBannerVisible(true)} data-testid="banner-list-item" />
                    <ListItem title="Key color" onClick={() => {/* Handler for key color */}} data-testid="key-color-list-item" />
                    <ListItem title="Base color" onClick={() => {/* Handler for base color */}} data-testid="base-color-list-item" />
                    <ListItem title="Sticky post color" onClick={() => {/* Handler for sticky post color */}} data-testid="sticky-post-color-list-item" />
                </ul>

                <hr className="my-3 border-[var(--color-neutral-border)]" data-testid="settings-divider" />

                <li className="relative mt-0 list-none" role="presentation" data-testid="dark-mode-container">
                    <div className="relative flex justify-between gap-2 px-4 py-2
             text-[color:var(--color-secondary)] -outline-offset-1 " data-testid="dark-mode-toggle">
                        <span className="flex min-w-0 shrink items-center gap-2" data-testid="dark-mode-label">
                            <span className="flex size-8 shrink-0 items-center justify-center
                   text-[1.25rem]/[1.25rem] leading-4" data-testid="dark-mode-icon">
                                <SvgIcon data-testid="dark-mode-svg-icon">
                                    <path d="M9.875 19a9.073 9.073 0 0 1-8.48-5.78 1.094 1.094
                            0 0 1 .247-1.191 1.145 1.145 0 0 1 1.232-.255c1.13.449
                            2.361.587 3.564.4A6.89 6.89 0 0 0 12.17 6.44a6.806 6.806
                             0 0 0-.394-3.564 1.148 1.148 0 0 1 .255-1.231 1.1 1.1
                              0 0 1 1.193-.248 9.082 9.082 0 0 1 5.746 9.254 9.184
                               9.184 0 0 1-8.32 8.32 11.93 11.93 0 0 1-.775.028Zm-7.206-5.967A7.871
                               7.871 0 1 0 13.033 2.668 8.116 8.116 0 0 1 2.669 13.033Z"></path>
                                </SvgIcon>
                            </span>
                            <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]" data-testid="dark-mode-text">
                                <span className="text-[1.25rem]/[0.875rem]">Dark Mode</span>
                                <span className="text-[0.75rem]/[1rem] text-[color:var(--color-secondary-weak)]">
                                </span>
                            </span>
                        </span>
                        <span className="flex shrink-0 items-center" data-testid="dark-mode-checkbox">
                            <div
                                name="dark-mode"
                                aria-checked="true"
                                role="checkbox" tabIndex="0" aria-disabled="false">
                            </div>
                        </span>
                    </div>
                </li>
            </div>
        </div>
    );
}
