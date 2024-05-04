
import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
/**
 *
 *
 * @return  {JSX.Element} Communityradio
 */
function Communityradio({onSelect}) {
    const [communityType, setCommunityType] = useState('Public');

    const handleOptionChange = (event) => {
        const newType = event.target.value;
        setCommunityType(newType);
        onSelect(newType);
    };

    return (
        <>
            <ul className='pl-0 ' role='menu' data-testid="wkgneognq3oeignvq3or">
                <li className="relative mt-0 list-none" role="presentation" data-testid="sdgewbrnhty">
                    <div
                        role="menuitemradio"
                        tabIndex="0"
                        className="relative flex h-20 cursor-pointer justify-between
                        gap-2 rounded-[12px] px-4 py-2 text-[#000000]
                         -outline-offset-1 hover:bg-[#eaedef] hover:no-underline"
                    >
                        <span className="flex min-w-0 shrink items-center gap-2">
                            <span className="flex size-8 shrink-0 items-center
                            justify-center text-xl leading-4" data-testid="wdfvergrbththmn">
                                <svg fill="currentColor" height="20" viewBox="0 0 20 20"
                                    width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.8 9.25H.038A10 10 0 0 1 9.22.039C7.114.879
                                    5.93 5.068 5.8 9.25Zm8.393 0h5.766A10 10 0 0 0 10.78.039c2.106.84
                                    3.29 5.029 3.421 9.211h-.007ZM10 1.375c-1.052 0-2.553 3.045-2.7
                                    7.875h5.4c-.148-4.83-1.649-7.875-2.7-7.875Zm0 17.25c1.051 0
                                    2.552-3.045 2.7-7.875H7.3c.147 4.83 1.648 7.875 2.7
                                    7.875ZM5.8 10.75H.038a10 10 0 0 0
                                    9.182 9.211c-2.106-.84-3.29-5.029-3.42-9.211Zm4.976
                                    9.211a10 10 0 0 0 9.183-9.211H14.2c-.13 4.182-1.315 8.371-3.42 9.211h-.004Z"></path>
                                </svg>
                            </span>
                            <span className="flex min-w-0 shrink flex-col justify-center py-1.5">
                                <span className="pl-2 text-sm leading-5">Public</span>
                                <span className="pl-2 text-xs leading-4 text-[#576f76]">
                                    Anyone can view, post, and comment to this community
                                </span>
                            </span>
                        </span>
                        <span className="flex shrink-0 items-center">
                            <span className="flex h-6 items-center justify-center">
                                <input
                                    type='radio'
                                    className="m-0 bg-[blue-500] focus:ring-blue-500"
                                    checked={communityType === 'Public'}
                                    name="type"
                                    value="Public"
                                    role="radio"
                                    tabIndex="0"
                                    aria-disabled="false"
                                    onChange={handleOptionChange}
                                    data-testid="ekvinjeruvneriu"
                                />
                            </span>
                        </span>
                    </div>
                </li>

                <li className="relative mt-0 list-none" role="presentation" data-testid="wknveqhfj">
                    <div
                        role="menuitemradio"
                        tabIndex="0"
                        className="relative flex h-20 cursor-pointer justify-between
                        gap-2 rounded-[12px] px-4 py-2 text-[#000000] -outline-offset-1
                        hover:bg-[#eaedef] hover:no-underline"
                    >
                        <span className="flex min-w-0 shrink items-center gap-2">
                            <span className="flex size-8 shrink-0 items-center justify-center text-xl leading-4">
                                <svg fill="currentColor" height="20" viewBox="0 0 20
                                 20" width="20" xmlns="http://www.w3.org/2000/svg" data-testid="wnnvkievniern">
                                    <path d="M4.078 9.691a9.85 9.85 0 0 0-.774 1A8.613
                                    8.613 0 0 1 1.97 9.683 8.192 8.192 0 0 1 .211
                                    7.377a1.94 1.94 0 0 1 0-1.753A8.757 8.757 0 0
                                    1 8.014 1a8.679 8.679 0 0 1
                                    7.735 4.5c.227.43.3.924.205
                                    1.4-.391-.157-.792-.29-1.2-.4a.885.885 0 0
                                     0-.106-.412A7.43 7.43 0 0 0 8.014 2.25a7.5 7.5 0
                                     0 0-6.689 3.941.7.7 0 0 0 0 .619 6.938 6.938 0 0 0
                                      1.49 1.953c.388.353.81.664 1.263.928Zm1.635-2.6a2.217
                                      2.217 0 0 1 .222-1.71A2.352 2.352 0 0 1 7.4
                                      4.278c.202-.051.408-.078.616-.078a2.372 2.372 0
                                      0 1 2.3 1.709c.029.113.048.228.06.344.411-.062.826-.1
                                      1.242-.113a3.513 3.513 0 0 0-.1-.563A3.648 3.648 0 0 0
                                      7.08 3.069a3.592 3.592 0 0 0-2.227 1.686 3.442 3.442 0
                                      0 0 .286 3.893c.314-.27.644-.52.988-.75a2.268 2.268 0
                                      0 1-.413-.808v.001Zm11.893 9.889a8.198 8.198 0 0 0
                                       2-2.488A2.142 2.142 0 0 0 19.6 12.5 8.499 8.499 0 0
                                        0 12 8a8.586 8.586 0 0 0-7.67 4.628 1.968 1.968 0 0
                                         0 0 1.745 8.176 8.176 0 0 0 1.726 2.306 8.78 8.78 0
                                         0 0 11.551.3v.001Zm.89-3.9a.899.899 0 0 1
                                         0 .833c-.422.808-1 1.524-1.7 2.108a7.527 7.527
                                          0 0 1-9.89-.254 6.926 6.926 0 0 1-1.464-1.954.716.716
                                          0 0 1 0-.626A7.328 7.328 0 0 1 12 9.25a7.262 7.262 0 0
                                          1 6.5 3.83h-.003Zm-5.572 3.849a3.546 3.546 0 0 0
                                          2.175-1.663 3.508 3.508 0 0 0 .352-2.687 3.588 3.588
                                          0 0 0-5.632-1.897 3.543 3.543 0 0 0-.92
                                          1.051 3.506 3.506 0 0 0-.352 2.686 3.582 3.582
                                          0 0 0 4.377 2.51Zm1.322-4.024a2.265 2.265 0
                                          0 1-.227 1.735 2.306 2.306 0 0 1-1.42 1.081
                                          2.334 2.334 0 0 1-2.849-1.628 2.265 2.265 0
                                          0 1 .227-1.735 2.298 2.298 0 0 1 1.416-1.08
                                          2.357 2.357 0 0 1 2.018.395c.406.308.7.74.835 1.232Z"></path>
                                </svg>
                            </span>
                            <span className="flex min-w-0 shrink flex-col justify-center py-1.5">
                                <span className="pl-2 text-sm leading-5">Restricted</span>
                                <span className="pl-2 text-xs leading-4 text-[#576f76]">
                                    Anyone can view, but only approved users can contribute
                                </span>
                            </span>
                        </span>
                        <span className="flex shrink-0 items-center">
                            <span className="flex h-6 items-center justify-center">
                                <input
                                    type='radio'
                                    className="m-0 bg-[blue-500] focus:ring-blue-500"
                                    checked={communityType === 'Restricted'}
                                    name="type"
                                    value="Restricted"
                                    role="radio"
                                    tabIndex="0"
                                    aria-disabled="false"
                                    onChange={handleOptionChange}
                                    data-testid="wefvwevwefvwevwefvwev"
                                />
                            </span>
                        </span>
                    </div>
                </li>

                <li className="relative mt-0 list-none" role="presentation" data-testid="wrehrjykuiloikjuhygt">
                    <div
                        role="menuitemradio"
                        tabIndex="0"
                        className="relative flex h-20 cursor-pointer
                        justify-between gap-2 rounded-[12px] px-4
                        py-2 text-[#000000] -outline-offset-1 hover:bg-[#eaedef] hover:no-underline"
                    >
                        <span className="flex min-w-0 shrink items-center gap-2">
                            <span className="flex size-8 shrink-0 items-center justify-center text-xl leading-4">
                                <svg fill="currentColor" height="20"
                                    viewBox="0 0 20 20" width="20"
                                    xmlns="http://www.w3.org/2000/svg" data-testid="wfegtryjuhygtfr">

                                    <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0
                                    0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0
                                    0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0
                                    0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0
                                    1 3.125 3.438V8Z"></path>
                                </svg>
                            </span>
                            <span className="flex min-w-0 shrink flex-col justify-center py-1.5">
                                <span className="pl-2 text-sm leading-5">Private</span>
                                <span className="pl-2 text-xs leading-4 text-[#576f76]">
                                    Only approved users can view and submit to this community
                                </span>
                            </span>
                        </span>
                        <span className="flex shrink-0 items-center">
                            <span className="flex h-6 items-center justify-center">
                                <input
                                    type='radio'
                                    className="m-0 bg-[blue-500] focus:ring-blue-500"
                                    checked={communityType === 'Private'}
                                    name="type"
                                    value="Private"
                                    role="radio"
                                    tabIndex="0"
                                    aria-disabled="false"
                                    onChange={handleOptionChange}
                                    data-testid="ujdfcnbfgtfbv"
                                />
                            </span>
                        </span>
                    </div>
                </li>
            </ul>
        </>
    );
}

Communityradio.propTypes = {
    onSelect: PropTypes.func.isRequired,
};

export {Communityradio};
