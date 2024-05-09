import React, {useState} from 'react';
import {ImageButton} from './imagebutton';
import {MessageBox} from './messagebox';
import {SendMessageButton} from './sendmessagebutton';
/*eslint-disable*/
function BottomBar({sendText, sendImage}) {
    const [textMessage, setTextMessage] = useState('');
    const [imageMessage, setImageMessage] = useState(null); // for sending
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // for display

    const handleSendMessage = async (type = 1) => {
        if (type === 1 && textMessage.trim() !== '') {
            sendText(textMessage);
            setTextMessage(''); // Reset text message
        } else if (type === 2 && imageMessage) {
            sendImage(imageMessage);
            setImageMessage(null); // Reset image message
            setImagePreviewUrl(null); // Also reset the image preview URL
        }
    };

    const handleRemoveImage = () => {
        setImageMessage(null);
        setImagePreviewUrl(null);
    };

    return (
        <div>
            {imagePreviewUrl && (
                <div className="relative flex items-center justify-center border border-gray-300 bg-white p-2">
                    <img id = 'img1' src={imagePreviewUrl} alt="Preview" className="max-h-[100px]" />
                    <button id = 'ab' onClick={handleRemoveImage} className="absolute right-0 top-0 rounded-full bg-white p-1">
                        &#x2715;
                    </button>
                </div>
            )}
            <form id = '3'
                className='flex gap-[var(--spacer-2xs)] p-[var(--spacer-xs)]'
                onSubmit={(e) => e.preventDefault()}
            >
                <ImageButton setImage={setImageMessage} setPreview={setImagePreviewUrl} />
                <MessageBox setMessage={setTextMessage} message={textMessage} />
                <SendMessageButton sendMessage={handleSendMessage} image={imageMessage} />
            </form>
        </div>
    );
}

export {BottomBar};
