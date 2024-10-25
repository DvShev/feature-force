'use client';

import { useState } from 'react';

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
          // Boolean flag to check if the message is from the user
          const isMyMessage = message.user === 'You';

          return (
            <div
              key={message.id}
              className={`mb-4 flex ${
                isMyMessage ? 'justify-end' : 'justify-start'
              }`}
            >
              <div>
                {/* User who sent the message */}
                <div
                  className={`text-sm font-semibold ${
                    isMyMessage
                      ? 'text-right text-gray-500'
                      : 'text-left text-gray-700'
                  }`}
                >
                  {message.user}
                </div>
                {/* Message Content */}
                <div
                  className={`inline-block rounded-lg px-4 py-2 ${
                    isMyMessage
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-300 text-gray-900' // changed to darker text color for visibility
                  }`}
                >
                  {message.content}
                </div>
                {/* Timestamp */}
                <div
                  className={`text-xs mt-1 ${
                    isMyMessage
                      ? 'text-right text-gray-400'
                      : 'text-left text-gray-400'
                  }`}
                >
                  {message.timestamp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatWindow;
