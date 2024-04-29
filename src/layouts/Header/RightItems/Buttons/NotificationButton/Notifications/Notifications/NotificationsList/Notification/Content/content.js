import React from 'react';
import propTypes from 'prop-types';
import {timeSince, truncate} from '../../../../../../../../../../generic components/utils.js';

/**
 * Content
 * @param {object} props - props
 * @param {string} props.title - title
 * @param {string} props.description - description
 * @param {string} props.time - time
 * @param {string} props.view - view
 * @return {JSX.Element} Content
 * @constructor
 * */
export function Content({title, description, time, view}) {
    return (
        <div className='flex flex-col items-start justify-center text-[12px]' data-testid="main-div-%%%$%^&*S">
            <div data-testid="title-div-)*Y*SASS">
                <span className="font-semibold text-[var(--color-secondary-plain)]" data-testid="title-span-%^*&!*">
                    {view == 'COMPACT' ? truncate(title, 58) : title}
                </span>
                <span className="font-normal text-[var(--color-secondary-weak)]" data-testid="time-span">
                    <span data-testid="separator-&*T&ASJ8%^&"> • </span>
                    <div className='inline-block' data-testid="time-div-%GBANKSJsss">
                        {timeSince(time)}
                    </div>
                </span>
            </div>
            {/** */}
            <div
                className="col-start-2 font-normal text-[var(--color-neutral-content-weak)]"
                data-testid="body-div-^HAKSLKSss"
            >
                {description}
            </div>
        </div>
    );
}

Content.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    time: propTypes.string.isRequired,
    view: propTypes.string,
};
