import React, {useState, useEffect, useRef} from 'react';
import {BottomBar} from './bottombar';
import {MessageContainer} from './messages/messagecontainer';
import {TopBar} from './topbar';
import {LeftBar} from './leftbar';
import {Message} from './messages/message';
import {AddChat} from './new chat/addchat';
import {axiosInstance} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {io} from 'socket.io-client';

/* eslint-disable*/
 
 import {useSelector} from 'react-redux';

 //import {useSelector} from 'react-redux';
//const token = useSelector((state) => state.use.tokenr);
 





function ChatsFull({show}) {
    // Define default avatar and the conversion functions outside the component or hook logic to avoid re-creation on each render
    const defaultAvatar = 'https://i.redd.it/lif0817mz3951.png';
    const [message, setMessage] = useState('');
    const ourtoken = useSelector((state) => state.user.token);
    const socket = useRef(null);
    const [selectedChatId, setSelectedChatId] = useState('');
    const selectedChatIdRef = useRef(selectedChatId);
    const [receivedMessages, setReceivedMessages] = useState([]);
    const username = useSelector((state) => state.user.username);
    const [isFullScreen, setIsFullScreen] = useState(false);
    console.log('Username:', username);
    const addNewMessageToChat = (chatId, newMessage) => {
        
        setChats(prevChats => {
            const updatedChats = {...prevChats};
            // Check if the chat exists, if not log an error or handle appropriately
            if (updatedChats[chatId]) {
                updatedChats[chatId].messages.push(newMessage);
                console.log('adding the message', updatedChats[chatId].messages);
            } else {
                console.error("Chat ID not found, unable to add message:", chatId);
                // Optionally, you could initialize a new chat here if that's intended behavior
            }
            return updatedChats;
        });
    };
    
    
    useEffect(() => {
        selectedChatIdRef.current = selectedChatId;
    }, [selectedChatId]);
    
    //const [socket, setSocket] = useState([]);
    useEffect(() => {
        if (!socket.current) {
            console.log('Connecting to server with token:', ourtoken);
            socket.current = io('http://api.reddit-bylham.me', {
                query: { token: `Bearer ${ourtoken}` },
            });
    
            const handleNewMessage = (message) => {
                console.log('Received new message:', message);
                const formattedMessage = {
                    time: convertDateFormat(message.createdAt),
                    sender: message.senderName,
                    message: message.message || "",
                    imgsrc: message.imageUrl,
                    avatar: message.senderAvatar,
                    type: message.type,
                    isRead: message.isRead,
                    id: message._id
                };
                console.log('Formatted message based on type:', formattedMessage);
                console.log('Adding message to chat:', formattedMessage);


                addNewMessageToChat(selectedChatIdRef.current, formattedMessage);
            };
    
            socket.current.on('newMessage', handleNewMessage);
        }
    
        return () => {
            if (socket.current) {
                socket.current.off('newMessage');
                socket.current.disconnect();
                socket.current = null;
            }
        };
    }, [ourtoken]);  // Only re-run if `ourtoken` changes
     // Dependency on ourtoken to reconnect if it changes
    
    
    const toggleNow = () => {
        setNow(!now);
    }

    
    // Event listener for successfully connecting to the server

  
    function convertDateFormat(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const diffInSeconds = Math.round((now - date) / 1000);
        const diffInMinutes = Math.round(diffInSeconds / 60);
        const diffInHours = Math.round(diffInMinutes / 60);
        const diffInDays = Math.round(diffInHours / 24);

        if (diffInDays > 0) {
            return `${diffInDays} days ago`;
        } else if (diffInHours > 0) {
            return `${diffInHours} hours ago`;
        } else if (diffInMinutes > 0) {
            return `${diffInMinutes} minutes ago`;
        } else {
            return `a few seconds ago`;
        }
    }
    function convertData(data, username) {
        const chats = {};
        data.conversations.forEach((conversation) => {
            const chatId = conversation._id;
            let chatName = conversation.chatName; // Default to using the predefined chatName
    
            // Check if the conversation type is 'single' and has exactly two participants
            if (conversation.type === 'single' && conversation.participants.length === 2) {
                // Find the other participant's name that isn't the username
                chatName = conversation.participants.find(participant => participant !== username);
                console.log('Chat name:', chatName);
                console.log('Username:', username );
            }
    
            
            const avatarUrls = conversation.participantsAvatarUrls.map((avatar) => avatar || defaultAvatar);
    
            const messages = conversation.messages.map((message) => ({
                time: convertDateFormat(message.createdAt),
                sender: message.senderName,
                message: message.message || 'Image',
                imgsrc: message.imageUrl || null,
                type: message.type,
                avatar: avatarUrls[conversation.participants.indexOf(message.senderName)] || defaultAvatar,
            }));
    
            chats[chatId] = {
                name: chatName, // Use the dynamically determined chatName
                avatar: avatarUrls[0], // Assuming the first avatar is the primary one for the chat
                messages: messages,
                unreadCount: conversation.unreadCount,
            };
        });
        console.log('Chats:', chats);
        return chats;
    }
    
    
   /* useEffect(() => {
        // Listen for messages
        socket.on('newMessage', (message) => {
            console.log('Received message:', message);
        });

        // Cleanup on component unmount
        return () => {
            socket.off('newMessage');
        };
    }, []);*/
    const sendTextMessage = async (textMessage) => {
        const messageData = {
            chatId: selectedChatId,
            type: "text",
            message: textMessage,
        };
        console.log('Sending message:', messageData);
    
        try {
            const response = await axiosInstance.post(API_ROUTES.sendChatMessage, messageData);
            console.log('Message sent successfully:', response.data);
            addNewMessageToChat(selectedChatId, {
                sender: username, // Adjust according to your app's context
            type: "text",
            message: textMessage,
            avatar: defaultAvatar,

            });
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };
    const sendImageMessage = async (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('chatId', selectedChatId);
        formData.append('type', 'image');
    
        console.log('Sending image:', formData);
    
        try {
            const response = await axiosInstance.post(API_ROUTES.sendChatMessage, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            console.log('Image sent successfully:', response.data);
    
            // Add new message to chat history in state
            addNewMessageToChat(selectedChatId, {
                sender: username, // Adjust according to your app's context for sender identification
                type: "image",
                message: "", // Since it's an image, the message could be empty or an image description if you have it
                imgsrc: URL.createObjectURL(image), // This assumes you want to display the image immediately before any server 
                avatar: defaultAvatar,
            });
        } catch (error) {
            console.error('Failed to send image:', error);
        }
    };
    
    
     // const sendMessage = () => {
       // socket.emit('sendMessage', message);
       // setMessage('');
       // console.log('Sent message:', message);
      //};

    const [chats, setChats] = useState({});
    const [selectedChat, setSelectedChat] = useState({messages: []});
    const [now, setNow] = useState(false);

    const [addUser, setAddUser] = useState(false);
    const [chatsHidden, setChatsHidden] = useState(false);
   
    const toggleAddUser = () => {
        setAddUser(!addUser);
    };
    function minimize() {
        setChatsHidden(true);
    }
    function expand() {
        setIsFullScreen(!isFullScreen);
    }

    
        
    useEffect(() => {
        async function fetchAllChats() {
            try {
                const response = await axiosInstance.get(API_ROUTES.getAllChats);
                console.log('Chats response:', response);
                const newChats = convertData(response.data,username);
                console.log('newChats: ',newChats);
                setChats(newChats);
                if (Object.keys(newChats).length > 0) {
                    setSelectedChat(newChats[Object.keys(newChats)[0]]);
                    setSelectedChatId(Object.keys(newChats)[0]);
                    console.log('Selected chat id:', Object.keys(newChats)[0]);
                    console.log('Selected chat:', newChats[Object.keys(newChats)[0]]);
                }
            } catch (error) {
                console.error('Failed to fetch chats:', error);
            }
        }

        fetchAllChats();
    }, [now]);

    const handleChatSelection = (chatName) => {
        setSelectedChat(chats[chatName]);
        setSelectedChatId(chatName);
        console.log('Selected chat id:', chatName);
        console.log(chatName);
    };
    useEffect(() => {
        if (isFullScreen && !chatsHidden) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';  // or 'initial' if that was your default
        }

        // Cleanup function to reset overflow when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';  // or 'initial'
        };
    }, [isFullScreen,chatsHidden]);

    const messageComponents = selectedChat && selectedChat.messages 
    ? selectedChat.messages.map((message, index) => (
        <Message key={index} time={message.time} name={message.sender} message={message.message} avatar={message.avatar} imgsrc={message.imgsrc} type={message.type} />
      )) 
    : [];

    return (
        <div className={isFullScreen ? 'fixed top-0 right-0 bottom-0 left-0' : 'fixed bottom-0 right-8'} style={{ zIndex: 1000 }}>
            <div className='block min-w-0'>
                <div className='overflow-hidden rounded-t-[16px] border border-b-0 border-solid border-[color:var(--color-neutral-border-weak)] bg-[color:var(--color-neutral-background)] shadow-md'>
                    <div className={chatsHidden ? 'hidden' : ''}>
                        <div className={isFullScreen  ? 'h-screen w-full' : 'h-[506px] w-[632px]'}>
                            <div className='grid h-full grid-cols-[220px_1fr] overflow-hidden'>
                                <LeftBar chatsToLeft={chats} onSelectChat={handleChatSelection} addUser={toggleAddUser} />
                                <div className='h-full overflow-hidden'>
                                    <div className='relative flex h-full overflow-hidden'>
                                        <div className='flex h-full grow flex-col overflow-auto'>
                                            <TopBar name={selectedChat ? selectedChat.name : ''} minimize={minimize} expand = {expand} showing = {show} full = {isFullScreen}  />
                                            {!addUser && <MessageContainer messages={messageComponents} />}
                                            {addUser && <AddChat reverse={() => setAddUser(!addUser)} fetch = {toggleNow} />}
                                            {!addUser && <BottomBar sendText={sendTextMessage} sendImage={sendImageMessage} setChat={setSelectedChat} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {chatsHidden && <div className="group relative">
                        <button onClick={() => setChatsHidden(false)} className="flex min-w-[128px] cursor-pointer items-center border-none bg-transparent py-3 pl-4 pr-12" aria-label="Maximize chat view">
                            <p className="m-0 text-sm leading-4">Chat</p>
                        </button>
                        <button onClick = {()=>{show(false)}} className="button-x-small button-plain icon button absolute right-4 top-2 inline-flex items-center justify-center px-[var(--rem6)] opacity-0 focus:opacity-100 group-hover:opacity-100" data-testid="chat-close-button" type="button">
                            <span className="flex items-center justify-center">
                                <span className="flex">
                                    <svg fill="currentColor" height="12" viewBox="0 0 20 20" width="12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    );
    
}

export {ChatsFull};
