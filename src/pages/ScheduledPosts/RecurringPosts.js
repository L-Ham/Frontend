import React from 'react';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function RecurringPosts() {
    return (
        <div className="_3Pz5gIKK5q2FYttguHTNa3 _1qL48rnJIqcVj5nNuXkDSw" data-testid="recurring-posts-div">
            <div className="p9wLLlADU1pVQu4nx3HCF text-[var(--newCommunityTheme-bodyText)]"
                data-testid="recurring-posts-subdiv">
                Recurring posts
                <div className="_3lBUQT-Vexm0jXk3WmIYJq" data-testid="recurring-posts-innerdiv">
                </div>
            </div>
            <div className="FIy4e_7DNe0P9cdi_1jVn _1Aurc-hBrd1zsfrQxHeZoq p-[30px]"
                data-testid="recurring-posts-contentdiv">
                <div className="_3V0T64xptTp5xLaY-1nsaz" data-testid="recurring-posts-text">No recurring posts</div>
                <svg className="_1BRYUIpfNcLUEr5L8DeJ8i geso-icon"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px"
                    height="16px" data-testid="recurring-posts-svg">
                    <path d="M 25 2 A 1.0001 1.0001 0 1 0 25 4 C 36.609534 4 46 13.390466 46 25
                     C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4
                      25 C 4 18.307314 7.130711 12.364806 12 8.5195312 L 12 15 A 1.0001
                       1.0001 0 1 0 14 15 L 14 6.5507812 L 14 5 L 4 5 A
                       1.0001 1.0001 0
                       1 0 4 7 L 10.699219 7 C 5.4020866 11.214814 2
                        17.712204 2 25 C 2
                        37.690466 12.309534 48 25 48 C 37.690466 48 48
                        37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z" data-testid="recurring-posts-path"/>
                </svg>
                <a className="_1mxUgytAdxfLqJuzRgGifT" href="/submit" data-testid="recurring-posts-link">
                    Schedule recurring post</a>
            </div>
        </div>
    );
}
