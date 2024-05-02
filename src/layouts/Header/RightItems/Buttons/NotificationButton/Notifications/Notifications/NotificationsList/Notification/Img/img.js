import React from 'react';
import propTypes from 'prop-types';
import defaultSubreddit from '../../../../../../../../../../assets/icons/default-subreddit.svg';

/**
 * Img
 * @param {object} props - props
 * @param {string} props.img - img
 * @return {JSX.Element} Img
 * @constructor
 * */
export function Img({img}) {
    return (
        <div className="items-start" data-testid="main-div-#$OLXMA>Z<X?:s">
            <div className='relative pt-1' data-testid="inner-div-,kzolSOMss">
                <span className='inline-flex items-center justify-center' data-testid="span-container-A&SAKaskdlmSS">
                    <span className='relative inline-block
             size-8 rounded-full [&>:first-child]:mb-0 [&>:first-child]:rounded-full'
                    data-testid="image-span-PANOASasdDJ@$">
                        <img className='max-w-full' src={img || defaultSubreddit} data-testid="image-)()@##$$(JSXDm,xx">
                        </img>
                    </span>
                </span>
                {/* type image TODO:later */}
            </div>
        </div>
    );
}

Img.propTypes = {
    img: propTypes.string.isRequired,
};
