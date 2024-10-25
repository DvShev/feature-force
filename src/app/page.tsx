import { ChatWindow, MessageInput, Sidebar } from '@/components';

export default function Home() {
  return (
    <div className="flex h-[100dvh]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <ChatWindow />
        <MessageInput />
      </div>
    </div>
  );
}
