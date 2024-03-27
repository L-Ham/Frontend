import React from 'react';
import PropTypes from 'prop-types';

/**
 * User drawer element component
 * This component is used to render an element in the user drawer
 * @component
 * @param {object} props - The component props
 * @param {element} props.icon - The icon element
 * @param {string} props.textMain - The main text
 * @param {string} props.textWeak - The weak text
 * @param {string} props.href - The href link. If the drawer element should redirect to a link (optional)
 * @param {function} props.onClick - The onClick function for the div (optional)
 * @param {element} props.component1 - The first component. For custom components (optional)
 * @param {element} props.component2 - The second component. For custom components (optional)
 * @example
 * // Render the user drawer element
 * <UserDrawerElement />
 * /
 * @return {JSX.Element} The user drawer element component
 */
function UserDrawerElement({icon, textMain, textWeak, href, onClick, component1, component2}) {
    return (
    // either create an anchor tag or a div element based on the presence of the href prop

        href && (
            <a
                href={href}
                className="flex items-center gap-2 px-4 py-2 text-[#0f1a1c]
                 no-underline -outline-offset-1 hover:bg-[#f2f4f5] hover:text-black
                  hover:no-underline active:bg-[#00000029]"
            >
                <span className="flex items-center gap-2">
                    <span className="flex items-center justify-center">
                        {component1 && (component1) || (
                            <>
                                <span className="flex items-center justify-center pr-2">
                                    {icon}
                                </span>
                                <span className="flex shrink-0 flex-col justify-center py-2">
                                    <span className="text-sm">
                                        <span className="ml-1 inline-block leading-5">
                                            <span className="text-[#2a3c42]">
                                                {textMain}
                                            </span>
                                        </span>
                                    </span>
                                    {textWeak && (
                                        <span className="text-xs text-[#576f76]">
                                            <span className="ml-1 inline-block pb-2 text-[#2a3c42]">
                                                <span className="mb-2 inline-block">
                                                    {textWeak}
                                                </span>
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </>
                        )}

                    </span>
                    <span className="flex flex-col justify-center py-[var(--rem6)]">
                        <span className="text-xs text-[#576f76]">{component2}</span>
                    </span>
                </span>
            </a>
        ) || (
            <div
                className="flex items-center gap-2 px-4 py-2 text-[#0f1a1c] no-underline
                 -outline-offset-1"
                onClick={onClick}
            >
                <span className="flex items-center gap-2">
                    <span className="flex items-center justify-center">
                        {component1 && (component1) || (
                            <>
                                <span className="flex items-center justify-center pr-2">
                                    {icon}
                                </span>
                                <span className="flex flex-col justify-center py-[var(--rem6)]">
                                    <span className="text-sm">
                                        <span className="ml-1 inline-block  leading-5">
                                            <span className="text-[#2a3c42]">
                                                {textMain}
                                            </span>
                                        </span>
                                    </span>
                                    {textWeak && (
                                        <span className="text-xs text-[#576f76]">
                                            <span className="ml-1 inline-block pb-2 text-[#2a3c42]">
                                                <span className="mb-2 inline-block">
                                                    {textWeak}
                                                </span>
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </>
                        )}

                    </span>
                    <span className="flex flex-col justify-center py-[var(--rem6)]">
                        <span className="text-xs text-[#576f76]">{component2}</span>
                    </span>
                </span>
            </div>
        )
    );
}

UserDrawerElement.propTypes = {
    icon: PropTypes.element,
    textMain: PropTypes.string,
    textWeak: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    component1: PropTypes.element,
    component2: PropTypes.element,
};

export {UserDrawerElement};
