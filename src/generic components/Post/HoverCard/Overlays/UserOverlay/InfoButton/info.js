import React from 'react';
import {infoClasses} from './info.styles';
/**
 * What is karma? Button component
 * @return {React.Component} What is karma? Button
 */
export function InfoButton() {
    return (
        <div className={infoClasses.root}>
            <a
                className={infoClasses.link}
                href="https://www.reddithelp.com/hc/en-us/articles/204511829"
                target="_blank"
                rel="noreferrer"
                data-testid="info-link-what-is-karma"
            >
                What is karma?
            </a>
        </div>
    );
}
