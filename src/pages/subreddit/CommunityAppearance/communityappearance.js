import React from 'react';
import PropTypes from 'prop-types';
import './communityappearance.css';
import {useSubreddit} from '../subredditcontext';
import {UploadArea} from './uploadarea';

/**
 * Renders an SVG icon.
 * @param {Object} props The component props.
 * @param {string} props.children The SVG path.
 * @param {string} props.viewBox The SVG viewbox.
 * @return {JSX.Element} The rendered component.
 * */
function SvgIcon({children, viewBox = '0 0 20 20'}) {
    return (
        <svg fill="currentColor" height="16" width="16" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    );
}

// propTypes
SvgIcon.propTypes = {
    children: PropTypes.node.isRequired,
    viewBox: PropTypes.string,
};


/**
 * Renders an icon button.
 * @param {Object} props The component props.
 * @param {Function} props.onClick The click handler for the button.
 * @param {JSX.Element} props.icon The icon to render.
 * @param {string} props.className The class name for the button.
 * @param {string} props.id The id for the button.
 * @return {JSX.Element} The rendered component.
 * */
function IconButton({onClick, icon, className = '', id}) {
    return (
        <button className={`commset-button-small commset-button-secondary
         commset-icon commset-button mr-3 inline-flex items-center 
         justify-center px-[var(--rem6)] ${className}`} id={id} onClick={onClick}>
            <span className="flex items-center justify-center">
                <SvgIcon>{icon}</SvgIcon>
            </span>
        </button>
    );
}

// propTypes
IconButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
};

/**
 * Renders a list item for the community appearance settings.
 * @param {Object} props The component props.
 * @param {string} props.title The title of the list item.
 * @param {Function} props.onClick The click handler for the list item.
 * @return {JSX.Element} The rendered component.
 * */
function ListItem({title, onClick}) {
    return (
        <li className="relative mt-0 list-none" role="presentation">
            <div tabIndex="0" className="active:bg-interactive-pressed relative flex
            cursor-pointer justify-between gap-2 px-4 py-2 text-[color:var(--color-secondary)]
            -outline-offset-1 hover:bg-[var(--color-neutral-background-hover)]
            hover:text-[color:var(--color-secondary)] hover:no-underline"
            onClick={onClick}>
                <span className="flex min-w-0 shrink items-center gap-2">
                    <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]">
                        <span className="text-[1.25rem]/[0.875rem]">{title}</span>
                        <span className="text-[0.75rem]/[1rem] text-[color:var(--color-secondary-weak)]"></span>
                    </span>
                </span>
                <span className="flex shrink-0 items-center">
                    <SvgIcon>
                        <path d="m7.942 15.442-.884-.884L11.616
                         10 7.058 5.442l.884-.884 5 5a.624.624
                         0 0 1 0 .884l-5 5Z"></path>
                    </SvgIcon>
                </span>
            </div>
        </li>
    );
}

// propTypes
ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

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
            <div className='fixed -bottom-4 left-80 z-[9999] flex min-w-[400px]
            flex-col rounded-3xl bg-[var(--background)]
            px-5 pb-8 pt-5'>
                <div className='flex flex-row items-center justify-between px-4'>
                    <h2 className='mr-5'>Community appearance</h2>
                    <span>
                        <IconButton onClick={toggleCollapse} icon={
                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                        .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        } id="dock-button" />
                        <IconButton onClick={() => {
                            setIsUploadAvatarVisible(false);
                            setIsUploadBannerVisible(false);
                            setIsAppearanceSettingsVisible(false);
                        }} icon={
                            <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116
                        10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                        } id="close-button" />
                    </span>
                </div>
            </div>
        );
    }

    if (isUploadAvatarVisible || isUploadBannerVisible) {
        return (
            <div className='fixed -bottom-4 left-80 z-40 flex min-w-[400px] flex-col rounded-3xl bg-[var(--background)]
        px-5 pb-8 pt-5'>
                <div className='flex flex-row items-center justify-between px-4'>
                    <h2 className='mr-5'>Community appearance</h2>
                    <span>
                        <IconButton onClick={toggleCollapse} icon={
                            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                    .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        } id="dock-button" />
                        <IconButton onClick={() => {
                            setIsUploadAvatarVisible(false);
                            setIsUploadBannerVisible(false);
                            setIsAppearanceSettingsVisible(false);
                        }} icon={
                            <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116
                    10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                        } id="close-button" />
                    </span>
                </div>
                <UploadArea />
                <div className="box-border w-full p-4">
                    <hr className="my-3 border-[var(--color-neutral-border)]" />

                    <li className="relative mt-0 list-none" role="presentation">
                        <div className="relative flex justify-between gap-2 px-4 py-2
                     text-[color:var(--color-secondary)] -outline-offset-1 ">
                            <span className="flex min-w-0 shrink items-center gap-2">
                                <span className="flex size-8 shrink-0 items-center justify-center
                           text-[1.25rem]/[1.25rem] leading-4">
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
                                <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]">
                                    <span className="text-[1.25rem]/[0.875rem]">Dark Mode</span>
                                    <span className="text-[0.75rem]/[1rem] text-[color:var(--color-secondary-weak)]">
                                    </span>
                                </span>
                            </span>
                            <span className="flex shrink-0 items-center">
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
        <div className='fixed -bottom-4 left-80 z-40 flex min-w-[400px] flex-col rounded-3xl bg-[var(--background)]
    px-5 pt-5'>
            <div className='flex flex-row items-center justify-between px-4'>
                <h2 className='mr-5'>Community appearance</h2>
                <span>
                    <IconButton onClick={toggleCollapse} icon={
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
                        .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                    } id="dock-button" />
                    <IconButton onClick={() => {
                        setIsUploadAvatarVisible(false);
                        setIsUploadBannerVisible(false);
                        setIsAppearanceSettingsVisible(false);
                    }} icon={
                        <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116
                        10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                    } id="close-button" />
                </span>
            </div>
            <div className="box-border w-full p-4">
                <ul className="!m-0 w-full !p-0">
                    <ListItem title="Avatar" onClick={() => setIsUploadAvatarVisible(true)} />
                    <ListItem title="Banner" onClick={() => setIsUploadBannerVisible(true)} />
                    <ListItem title="Key color" onClick={() => {/* Handler for key color */}} />
                    <ListItem title="Base color" onClick={() => {/* Handler for base color */}} />
                    <ListItem title="Sticky post color" onClick={() => {/* Handler for sticky post color */}} />
                </ul>

                <hr className="my-3 border-[var(--color-neutral-border)]" />

                <li className="relative mt-0 list-none" role="presentation">
                    <div className="relative flex justify-between gap-2 px-4 py-2
                     text-[color:var(--color-secondary)] -outline-offset-1 ">
                        <span className="flex min-w-0 shrink items-center gap-2">
                            <span className="flex size-8 shrink-0 items-center justify-center
                           text-[1.25rem]/[1.25rem] leading-4">
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
                            <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]">
                                <span className="text-[1.25rem]/[0.875rem]">Dark Mode</span>
                                <span className="text-[0.75rem]/[1rem] text-[color:var(--color-secondary-weak)]">
                                </span>
                            </span>
                        </span>
                        <span className="flex shrink-0 items-center">
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
