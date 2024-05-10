import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance} from '../../../requests/axios';
import {API_ROUTES} from '../../../requests/routes';
/*eslint-disable*/
function AddChat({ reverse,fetch }) {
    const [input, setInput] = useState('');
    const [groupname, setGroupname] = useState('');
    const [usernames, setUsernames] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await axiosInstance.get(API_ROUTES.getUsernamesForSearch(input));
                // console.log('Search usernames received:', response.data);
                setSuggestions(response.data.matchingUsernames);
            } catch (error) {
                // console.error('Failed to fetch usernames:', error);
            }
        };

        if (input) {
            fetchUserName();
        } else {
            setSuggestions([]);
        }
    }, [input]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleGroupnameChange = (e) => {
        setGroupname(e.target.value);
    };

    const selectUser = (user) => {
        if (!usernames.some(u => u._id === user._id)) {
            setUsernames([...usernames, user]);
        }
        setInput('');
        setSuggestions([]);
    };

    const handleRemoveUser = (userId) => {
        setUsernames(usernames.filter(u => u._id !== userId));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSuggestions([]);
        }
    };

    const canStartChat = usernames.length > 1 ? groupname : usernames.length === 1;

    async function handleCreateChat() {
        const chatObject = {
            chatName: usernames.length > 1 ? groupname : "single chat",
            participants: usernames.map(user => user.userName)
        };
        // console.log('Creating chat:', chatObject);
        try {
            await axiosInstance.post(API_ROUTES.createChat, chatObject);
            // console.log('Chat created successfully:', chatObject);
            fetch();
            reverse();  // Assuming reverse is used to close this component or indicate success
        } catch (error) {
            // console.error('Failed to create chat:', error);
        }
    }

    return (
        <div ref={wrapperRef} className="flex h-screen flex-col">
            <div className="bg-gray-200 px-2 py-4">
                {usernames.length > 1 && (
                    <input
                        type="text"
                        placeholder="Enter group name"
                        value={groupname}
                        onChange={handleGroupnameChange}
                        className="w-full mb-2 rounded border px-4 py-2"
                    />
                )}
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Type username(s)"
                    />
                    {suggestions.length > 0 && (
                        <ul className="absolute top-full left-0 z-10 w-full list-none bg-white shadow-lg">
                            {suggestions.map(suggestion => (
                                <li key={suggestion._id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => selectUser(suggestion)}>
                                    {suggestion.userName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {usernames.map((user) => (
                        <div key={user._id} className="flex items-center gap-2 rounded-full bg-gray-300 px-2 py-1">
                            {user.avatarImageUrl ? (
                                <img src={user.avatarImageUrl} alt={user.userName} className="h-6 w-6 rounded-full" />
                            ) : (
                                <span className="inline-block h-6 w-6 rounded-full bg-gray-500" />
                            )}
                            <span>{user.userName}</span>
                            <button onClick={() => handleRemoveUser(user._id)} className="text-red-500 hover:text-red-700">✖</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grow bg-gray-200" />
            <div className="flex justify-between bg-white px-4 py-2">
                <button className="rounded-lg bg-gray-200 px-4 py-2" onClick={() => {
                    setInput('');
                    setGroupname('');
                    setUsernames([]);
                    reverse();
                }}>
                    Cancel
                </button>
                <button onClick={handleCreateChat} className={`rounded-lg bg-blue-500 px-4 py-2 text-white ${canStartChat ? '' : 'cursor-not-allowed opacity-50'}`} disabled={!canStartChat}>
                    Start Chat
                </button>
            </div>
        </div>
    );
}

AddChat.propTypes = {
    reverse: PropTypes.func.isRequired,
};

export { AddChat };
