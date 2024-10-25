'use client';

import { useState } from 'react';
import MessageItem from './MessageItem'; // Import MessageItem from the same folder

const ChatWindow = () => {
  const [channelName] = useState('General');
  const [messages] = useState([
    {
      id: 1,
      user: 'Lucy',
      content:
        'GOAL: To assist you with any current challenges, strategic planning...',
      timestamp: '10:49 AM',
    },
    {
      id: 2,
      user: 'You',
      content: 'Hey',
      timestamp: '10:49 AM',
    },
  ]);

  return (
    <div className="flex flex-col flex-1 bg-gray-100">
      {/* Channel Name */}
      <div className="p-4 bg-purple-200 text-purple-900 text-lg font-semibold flex items-center justify-between">
        <span>{channelName}</span>
        <span className="text-sm text-purple-600">
          Last message at {messages[messages.length - 1]?.timestamp}
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => {
          const isMyMessage = message.user === 'You'; // Boolean flag for current user's messages

          return (
            <MessageItem
              key={message.id}
              user={message.user}
              content={message.content}
              timestamp={message.timestamp}
              isMyMessage={isMyMessage} // Pass the flag to the MessageItem component
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatWindow;
