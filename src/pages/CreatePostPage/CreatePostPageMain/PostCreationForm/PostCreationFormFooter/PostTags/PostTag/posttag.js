/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../generic components/iconsmap';

/**
 * Renders the post types.
 * @param {Object} props - The component props.
 * @param {string} props.tag - The tag.
 * @param {Function} props.setPostTags - The function to set the post tags.
 * @param {boolean} props.isActive - The active status.
 * @return {JSX.Element} The rendered component.
 */
export function PostTag({tag, setPostTags, isActive}) {
    const baseClasses = `font relative z-[1] mb-[8px] mr-[4px] box-border flex min-h-[32px] border-[1px]
    w-auto
    min-w-[32px]
    cursor-pointer items-center
    justify-center overflow-visible rounded-full border-DEFAULT
    border-solid
     p-[4px_16px] text-center text-[14px] font-[700]
    tracking-[unset] `;

    const inActiveClasses = `border-[color:var(--newCommunityTheme-actionIcon)]
    bg-transparent fill-[color:var(--newCommunityTheme-actionIcon)] text-[color:var(--newCommunityTheme-actionIcon)]`;

    const OCCLasses = `bg-[rgb(255,69,0)] border-[rgb(255,69,0)]`;
    const spoilerClasses = `bg-[#000] border-[#000]`;
    const NSFWClasses = `bg-[rgb(255,88,91)] border-[rgb(255,88,91)]`;
    const activeTextColor = `text-[#fff]`;

    let activeClasses = '';

    if (isActive) {
        switch (tag) {
        case 'SPOILER':
            activeClasses += spoilerClasses;
            break;
        case 'OC':
            activeClasses += OCCLasses;
            break;
        case 'NSFW':
            activeClasses += NSFWClasses;
            break;
        default:
            activeClasses += NSFWClasses;
            break;
        }
        activeClasses += ' ' + activeTextColor;
    }

    const btnClasses = `${baseClasses} ${isActive ? activeClasses : inActiveClasses}`;


    const handleTagCLick = () => {
        if (isActive) {
            setPostTags((prevTags) => prevTags.filter((t) => t !== tag));
        } else {
            setPostTags((prevTags) => [...prevTags, tag]);
        }
    };

    const PlusIcon = getIconComponent('plus', true);
    const CheckMarkIcon = getIconComponent('checkmark', true);

    const Icon = isActive ? CheckMarkIcon : PlusIcon;

    return (
        <button className={btnClasses} key={tag} onClick={() => handleTagCLick()}>
            <Icon className={`icon inline-block size-[20px] p-[0_8px_0_0] text-[20px]/[20px]  box-content
            ${isActive ? activeTextColor : ''}`}/>
            <span>{tag}</span>
        </button>
    );
}

PostTag.propTypes = {
    tag: PropTypes.string.isRequired,
    setPostTags: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

