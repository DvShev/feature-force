'use client';

import { mockChannels } from '@/lib/mockData';
import { IChannel } from '@/types/channel.types';
import { FaUserCircle, FaPlus } from 'react-icons/fa';
import ChannelCreateModal from './ChannelCreateModal';
import { useState } from 'react';

const Sidebar = () => {
  const [channels, setChannels] = useState(mockChannels); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleCreateChannel = (name: string) => {
    const newChannel = { id: channels.length + 1, name };
    setChannels([...channels, newChannel]); // Add the new channel to the list
  };

  return (
    <div className="w-1/4 bg-gray-800 text-white h-full p-4">
      <div className='flex justify-between items-center'>
        <h2 className="text-xl font-bold mb-4">Channels</h2>
        <button onClick={() => setIsModalOpen(true)}>
          <FaPlus />
        </button>
      </div>
      <div className='h-full max-h-[90dvh] overflow-y-scroll custom-scrollbar'>
        <ul>
          {channels.map((channel: IChannel) => (
            <li
              key={channel.id}
              className="mb-2 flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
            >
              {/* Icon for channel */}
              <FaUserCircle className="text-3xl text-gray-400 mr-3" />

              <div className="flex-1">
                {/* Channel name */}
                <div className="font-semibold text-sm truncate">
                  {channel.name}
                </div>

                {/* Last message (hardcoded) */}
                <div className="text-xs text-gray-400 truncate">
                  Last message preview for {channel.name}
                </div>
              </div>

              {/* Optional: Add a dot or status indicator */}
              <span className="ml-2 h-2 w-2 bg-green-500 rounded-full"></span>
            </li>
          ))}
        </ul>
      </div>
      <ChannelCreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateChannel}
      />
    </div>
  );
};

export default Sidebar;
