import React from 'react';
import PropTypes from 'prop-types';


/**
 * ThirdPartyAuthorization function component renders a UI element for managing third-party application authorizations.
 * It presents a user-friendly interface to navigate to detailed authorization settings and allows for actions like
 * revoking access. The component visually indicates its interactivity and navigational purpose.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.spacing=2] - Controls the horizontal space between the text and the navigation icon.
 * @return {React.Component} A Material UI Paper component containing the authorization management options.
 */
function ThirdPartyAuthorization({spacing = 2, id}) {
    /**
     * handleNavigation function to be called upon user interaction with the component.
     * It is designed to initiate navigation to a detailed settings
     *  page or modal for managing third-party app authorizations.
     * Placeholder for actual navigation implementation.
     */


    return (
        <div className="mb-16 flex flex-row flex-wrap">
            <div className="mr-2 flex max-w-[80%] flex-col">
                <a href="https://www.reddit.com/prefs/apps"
                    className="mb-1 flex h-5 text-base font-medium leading-5
                    text-[color:var(--newCommunityTheme-button)]">Manage third-party app authorization
                    <svg className=" ml-1 w-[18px] fill-[var(--newCommunityTheme-button)]
                    align-bottom
                    text-base font-medium
                    leading-5 text-[color:var(--newCommunityTheme-button)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                        <path d="M16 10.77a1 1 0 0 0-1
                    1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0
                    1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3
                    3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1
                     1 0 0 0-1-1z"></path>
                        <path d="M17.91 2.62A1
                      1 0 0 0 17 2h-4a1 1 0 0 0 0
                      2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16
                      5.41V7a1 1 0 0 0 2 0V3a1 1 0
                      0 0-.09-.38z"></path>
                    </svg>
                </a>
                <p className="text-xs font-normal leading-4
                text-[color:var(--newCommunityTheme-metaText)]">
                </p>
            </div>
            <div className="flex grow items-center justify-end">
                <a href="https://www.reddit.com/prefs/apps"
                    className="mb-1 flex h-5 text-base font-medium leading-5
                    text-[color:var(--newCommunityTheme-button)]">
                    <svg viewBox="0 0 11.4 11.4" version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[18px] fill-[var(--newCommunityTheme-button)]
                        text-base
                        font-medium leading-5 text-[color:var(--newCommunityTheme-button)]">
                        <g>
                            <path fill="inherit"
                                d="m11.17929,5.99479c0.08081,-0.19519
                         0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,
                         -0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,
                         -0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,
                         0.31279 -0.31283,0.81918 0,1.13118l3.43471,
                         3.43433l-7.66949,0c-0.44244,0 -0.80007,
                         0.3584 -0.80007,0.79999c0,0.44159 0.35763,
                         0.79999 0.80007,0.79999l7.66949,0l-3.43471,
                         3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,
                         0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,
                         -0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,
                         -0.0744 0.13281,-0.1624 0.17361,-0.2608"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
}

ThirdPartyAuthorization.propTypes = {
    spacing: PropTypes.number,
    id: PropTypes.string,

};

export {ThirdPartyAuthorization};
