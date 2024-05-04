/*eslint-disable*/
import React from 'react';
import './aboutsettings.css';
import {getIconComponent} from '../../generic components/iconsmap';
import {CustomSwitch} from '../../layouts/Header/RightItems/ProfileMenu/switch';


/**
 * The about settings page.
 * @component
 * @return {JSX.Element} The about settings page.
 */
export function AboutSettings() {
    const InfoIcon = getIconComponent('info');
    return (
        <div className='pb-[200px] _3mbqgd00Kdlh6nVVVhZYdS _2-rpR3swo9nJDSZs_i8E44'>
            <div className='_3mbqgd00Kdlh6nVVVhZYdS _2-rpR3swo9nJDSZs_i8E44 !ml-0'>
                <div className="_3rnK1gNGg1hiVaiRd9Hidl">Content controls
                    <a className="_3-yXs2bljbMxTPT6hDZU1I"
                        href="https://mods.reddithelp.com/hc/en-us/articles/360010322091"
                        target="_blank" rel="noreferrer" >
                    </a>
                </div>
            </div>
            {/** */}
            <div className="_2QhtAlu6f0_8F9xR-QkqGZ">
                Set requirements and restrictions for how people post and comment in your community
            </div>
            {/** */}
            <div className='_1d945r4X4wXFWdEw_bWVWK'>
                <Section1/>
                <Section2/>
            </div>
        </div>
    );
}

/**
 * The first section of the about settings page.
 * @component
 * @return {JSX.Element} The first section of the about settings page.
 */
const Section1 = () => {
    const items = [
        {
            title: 'Provide members with posting guidelines',
            description: `Posting guidelines let people who are new to your
             community or posting for the first time know what your
              expectations are. If you have specific flair or formatting requirements for posts, 
            this is the place to make it clear what you’d like..`,
        },
        {
            title: 'Require words in the post title',
            description: `Posts without these words
             in the title can’t be submitted. (Choose up to 15 words, 40 characters each.).`,
        },
        {
            title: 'Ban words from the post title',
            description: `Posts with these
             words in the title can’t be submitted. 
             (Choose up to 15 words, 40 characters each.)`,
        },
        {
            title: 'Ban words from the post body',
            description: `Posts with these words in the body can’t 
            be submitted. (Choose up to 15 words, 40 characters each.)`,
        },
        {
            title: 'Require or ban links from specific domains',
            description: `Posts with links that don’t fit your requirements can’t be submitted.`,
        },
        {
            title: 'Restrict how often the same link can be posted',
            description: `Posts that have a link that has already been posted to your community
             cannot be submitted within the number of days you select.`,
        },
    ];
    return (
        <div className=''>
            <legend className="_36NG9T5luXl1lTigni_X6H">Post Requirements</legend>
            {items.map((item, index) => (
                <SectionItem key={index} title={item.title} description={item.description}/>
            ))}
        </div>
    );
};

/**
 * The first section of the about settings page.
 * @component
 * @return {JSX.Element} The first section of the about settings page.
 */
const Section2 = () => {
    const items = [
        {
            title: 'Require post flair',
            description: `Posts without flair can’t be submitted. (Note that this requirement 
                is ignored if your community hasn’t set up flair yet.)`,
        },
        {
            title: 'Post text body            ',
            description: `Allow posts to have body text.`,
        },
        {
            title: 'Restrict post title length',
            description: `Set a minimum and/or maximum post title length
            `,
        },
        {
            title: 'Use title text RegEx requirements',
            description: `Use regular expressions for more advanced title matching. These use the Python RegEx syntax
            `,
        },
        {
            title: 'Use body text RegEx requirements',
            description: `Use regular expressions for more advanced body text matching. 
            These use the Python RegEx syntax
            `,
        },
    ];

    return (
        <div className='mt-[48px]'>
            <legend className="_36NG9T5luXl1lTigni_X6H">Advanced Post Requirements</legend>
            {items.map((item, index) => (
                <SectionItem key={index} title={item.title} description={item.description}/>
            ))}
        </div>
    );
};

const SectionItem = ({title, description}) => {
    return (
        <div className="_2f63as5b5FASHMqGd5P1o0 _1yyj9tAQLKPfYxZs1IsMn0 ">
            <div className="_3dLmvT0hpACHFxhncqzCOr">
                <div className="XZK-LTFT5CgGo9MvPQQsy">
                    <label htmlFor="1815">
                        <h3 className="asxizthf5kZpmoY27VBKd">{title}</h3>
                    </label>
                </div>
                <p className="_2nyJGeaFJbXTqTh9OGwxfu _1NdK7EwgYqUxJObBr3ym4o">{description}</p>
            </div>
            <div className="_1oREjd5ToMFah-VfX5Zt1z">
                <div className="_1kylDjSQ2hay_ez0zF7BEP">
                    <CustomSwitch/>
                </div>
            </div>
        </div>
    );
};
