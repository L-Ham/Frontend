import React, {useState} from 'react';
import {getIconComponent} from '../../../iconsmap';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {API_ROUTES} from '../../../../requests/routes';
import {axiosInstance as axios} from '../../../../requests/axios';
import {useSelector} from 'react-redux';
import {formatNumber} from '../../../utils';
/**
 * PostPoll component
 * @return {React.Component}
 */
export function PostPoll({
    postId,
    poll = {
        options: [
            {
                option: 'Option 1',
                voters: [],
                _id: 'asdasdasd21323',
            },
            {
                option: 'Option 2',
                voters: [],
                _id: 'asdasdasd21323asd',
            },
        ],
        startTime: null,
        endTime: null,
        votingLength: 0,
    },
    createdAt,
}) {
    const RadioButtonIconOutline = getIconComponent('radio-button', false);
    const RadioButtonIconFilled = getIconComponent('radio-button', true);
    const [selectedOption, setSelectedOption] = useState(null);
    const userId = useSelector((state) => state?.user?.userId) || '662ae1cfc1f1157462fbadc123123123';
    const isUserVoted = poll?.options?.some((option) => option.voters.includes(userId));
    const votedOption = isUserVoted ? poll?.options?.findIndex((option) => option.voters.includes(userId)) : null;
    const pollVotes = poll?.options?.map((option) => option.voters.length);
    const totalVotes = pollVotes.reduce((acc, curr) => acc + curr, 0);
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);
    const votingEndDate = new Date(createdAtDate.setDate(createdAtDate.getDate() + poll?.votingLength));
    const numDays = Math.floor((votingEndDate - currentDate) / (1000 * 60 * 60 * 24));
    const isVoteOpen = currentDate < votingEndDate;
    const pollOptions = poll?.options?.map((option, index) => {
        const isSelected = selectedOption === index;
        return (
            <div key={uuid()} onClick={() => setSelectedOption(index)}
                className="visible mx-4 my-2 flex h-auto items-center text-[var(--color-secondary)]">
                {isSelected ? <RadioButtonIconFilled className="fill-[var(--color-primary-background)]"/> :
                    <RadioButtonIconOutline className="hover:fill-[var(--color-primary-background)]"/>}
                <input className='pointer-events-none h-full w-px border-0 p-0 opacity-0' type='radio' />
                <label>{option.option}</label>
            </div>
        );
    });
    const CheckMarkIconFill = getIconComponent('checkmark', true);
    return (
        <div className='relative isolate mb-2 cursor-pointer
         overflow-hidden rounded-[16px] bg-[var(--color-neutral-background)]'>
            <div className="pointer-events-none absolute inset-0 z-[3] rounded-[16px] border-[0.0625rem] border-solid
             border-[var(--color-neutral-border-weak)]" />
            {isUserVoted || !isVoteOpen ?
                <>
                    <div className="mx-4 border-x-0 border-b
                    border-t-0 border-solid
                    border-[var(--color-neutral-border-weak)] py-2 text-xs leading-4">
                        <span className="text-[var(--color-neutral-content)]">Open</span>
                        <span className="text-[var(--color-neutral-content)]"> •{' '}
                            {formatNumber(totalVotes)} total votes</span>
                    </div>
                    <div className="px-4 py-3">
                        {poll?.options?.map((option, index) => (
                            <div key={uuid()} className="relative isolate mb-2 flex items-center">
                                <div className="absolute left-0 top-0 h-full min-w-1 rounded
                                bg-[var(--color-vote-background-selected)] text-black"
                                style={{width: votedOption === index ? '100%' : '0%'}} />
                                <div className="z-10 whitespace-nowrap py-1 pl-4 font-bold">
                                    {option?.voters?.length || 0}
                                </div>
                                <div className="z-10 flex items-center truncate pl-6">
                                    <span className="mr-2"> {option?.option || 'Empty'} </span>
                                    {votedOption === index && <CheckMarkIconFill />}
                                </div>
                            </div>
                        ))}
                    </div>
                </> :
                <div>
                    <div className='p-2'>
                        {pollOptions}
                    </div>
                    <div className='flex items-center px-4 pb-2 text-sm leading-4
                    text-[var(--color-neutral-content-weak)]'>
                        <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-full
                    ${selectedOption !== null ? `bg-[var(--button-color-background)] 
                    text-[var(--color-neutral-content-strong)] hover:bg-[var(--color-secondary-background-hover)]`:
            'bg-[var(--color-interactive-background-disabled)]'}
                    px-2.5 py-2`}
                        style={{font: 'var(--font-12-16-semibold)'}} disabled={selectedOption === null}
                        onClick={(event) => {
                            event.stopPropagation();
                            try {
                                const handler = async () => await axios.patch(API_ROUTES.votePoll,
                                    {postId, option: poll?.options[selectedOption]?.option});
                                handler().finally(() => {
                                    // should add userId to voters array
                                    poll.options[selectedOption].voters.push(userId);
                                    // trigger re-render
                                    setSelectedOption(null);
                                });
                            } catch (error) {
                                if (error.response && error.response.status === 400) {
                                // Handle error code 400
                                    // console.log('Error: Bad Request');
                                } else {
                                // // console.log('Error:', error.message);
                                }
                            }
                        }}
                        >
                            <span className="flex items-center justify-center">
                                <span className="flex items-center gap-2">Vote</span>
                            </span>
                        </button>
                        <span className='ml-2 flex grow'>
                            {isVoteOpen ? `Closes in ${numDays} days` : 'Closed'}
                        </span>
                    </div>
                </div>}
        </div>
    );
}

PostPoll.propTypes = {
    postId: PropTypes.string.isRequired,
    poll: PropTypes.object,
    createdAt: PropTypes.string,
};
