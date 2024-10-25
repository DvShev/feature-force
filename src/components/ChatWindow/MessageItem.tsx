interface MessageItemProps {
  user: string;
  content: string;
  timestamp: string;
  isMyMessage: boolean;
}

const MessageItem = ({
  user,
  content,
  timestamp,
  isMyMessage,
}: MessageItemProps) => {
  return (
    <div
      className={`mb-4 flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}
    >
      <div>
        {/* User who sent the message */}
        <div
          className={`text-sm font-semibold ${isMyMessage ? 'text-right text-gray-500' : 'text-left text-gray-700'}`}
        >
          {user}
        </div>
        {/* Message Content */}
        <div
          className={`inline-block rounded-lg px-4 py-2 ${isMyMessage ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-900'}`}
        >
          {content}
        </div>
        {/* Timestamp */}
        <div
          className={`text-xs mt-1 ${isMyMessage ? 'text-right text-gray-400' : 'text-left text-gray-400'}`}
        >
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
