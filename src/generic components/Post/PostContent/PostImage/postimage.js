import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../iconsmap';


/**
 * PostImage component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostImage({
    postId,
    viewContext,
}) {
    const [imageOpened, setImageOpened] = React.useState(false);
    const rootClasses = imageOpened ? `relative isolate z-10 mb-2 cursor-pointer
    overflow-hidden rounded-[16px] bg-[var(--color-neutral-background)]` :
        `relative isolate mb-2 cursor-pointer
    overflow-hidden rounded-[16px] bg-[var(--color-neutral-background)]`;
    const original = imageOpened ? `relative hidden size-full
    max-h-[100vw] overflow-hidden bg-black object-contain` :
        `relative size-full
    max-h-[100vw] overflow-hidden bg-black object-contain`;
    const BigXIcon = getIconComponent('big-x');
    return (
        <div
            className={rootClasses}
            data-testid={`content-${postId}-${viewContext}`}
            onClick={(event) =>{
                event.stopPropagation();
                setImageOpened(true);
            }}
        >
            <div className='pointer-events-none absolute inset-0 z-[3] rounded-[16px] border-[0.0625rem] border-solid
            border-[var(--color-neutral-border-weak)]'/>
            <div ref={(el) => {
                el?.style.setProperty('--aspect-ratio', '1');
                el?.style.setProperty('--max-height', 'min(100%, 540px)');
            }} className='max-h-[540px]'>
                <div className='contents nd:visible'>
                    <div className={original}>
                        <img
                            alt=""
                            role="presentation"
                            className="absolute left-0 top-1/2 w-full -translate-y-1/2 scale-[1.2]
                        object-cover opacity-30 blur-xl"
                            loading="lazy"
                            src={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=webp&s=` +
                            `6dd3f3cecd4f3735d74623db2a6a21c9549889a1`}
                            srcSet={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?width=320` +
                            `&crop=smart&auto=webp&s=c02a65a13abb2d3654222ed2f3206b86d8bc168d 320w, https://p` +
                            `review.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=webp&s=6dd3f3cecd4f37` +
                            `35d74623db2a6a21c9549889a1 567w`}
                            sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"
                        />
                        <img
                            alt="r/Dinosaure - AVIS AU POLICIER!"
                            className="relative size-full h-[540px] max-h-[100vw] object-contain"
                            loading="lazy"
                            src={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=webp&s=` +
                            `6dd3f3cecd4f3735d74623db2a6a21c9549889a1`}
                            srcSet={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?width=320` +
                            `&crop=smart&auto=webp&s=c02a65a13abb2d3654222ed2f3206b86d8bc168d 320w, https://p` +
                            `review.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=webp&s=6dd3f3cecd4f37` +
                            `35d74623db2a6a21c9549889a1 567w`}
                            sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"
                        />
                    </div>
                    <div className={imageOpened ? 'block': 'hidden'}>
                        <div className='fixed bottom-0 left-0 box-border flex size-full items-center
                             justify-center'>
                            <div
                                className='relative size-full max-h-none overflow-hidden bg-black object-contain'
                            >
                                <img
                                    alt="r/Dinosaure - AVIS AU POLICIER!"
                                    className="absolute left-0 top-1/2 w-full -translate-y-1/2 scale-[1.2]
                                        object-cover opacity-30 blur-xl"
                                    loading="lazy"
                                    src={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=we` +
                                        `bp&s=6dd3f3cecd4f3735d74623db2a6a21c9549889a1`}
                                    srcSet={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?widt` +
                                        `h=320&crop=smart&auto=webp&s=c02a65a13abb2d3654222ed2f3206b86d8bc168d 320w,` +
                                        ` https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=webp&s` +
                                        `=6dd3f3cecd4f3735d74623db2a6a21c9549889a1 567w`}
                                    sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"
                                />
                                <img
                                    alt="r/Dinosaure - AVIS AU POLICIER!"
                                    className="relative size-full max-h-none object-contain"
                                    loading="lazy"
                                    src={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=we` +
                                        `bp&s=6dd3f3cecd4f3735d74623db2a6a21c9549889a1`}
                                    srcSet={`https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?widt` +
                                        `h=320&crop=smart&auto=webp&s=c02a65a13abb2d3654222ed2f3206b86d8bc168d 320w,` +
                                        ` https://preview.redd.it/avis-au-policier-v0-6r60kel9eosc1.jpeg?auto=webp&s` +
                                        `=6dd3f3cecd4f3735d74623db2a6a21c9549889a1 567w`}
                                    sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                            <button className='absolute right-3 top-3 inline-flex h-12 items-center
                             justify-center whitespace-nowrap rounded-full border-[length:var(--line-sm)]
                             border-solid border-[var(--color-button-secondary-border)]
                             bg-[var(--color-media-background)] px-3.5 text-white no-underline duration-300'
                            style={{font: 'var(--font-button)'}}
                            onClick={(event) =>{
                                event.stopPropagation();
                                setImageOpened(false);
                            }}>
                                <span className='flex items-center justify-center'>
                                    <span className='flex items-center gap-2'>
                                        <BigXIcon />
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

PostImage.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
