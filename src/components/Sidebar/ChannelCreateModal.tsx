import { useState } from 'react';

interface ChannelCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

const ChannelCreateModal = ({ isOpen, onClose, onCreate }: ChannelCreateModalProps) => {
  const [channelName, setChannelName] = useState('');

  const handleCreate = () => {
    if (channelName.trim() !== '') {
      onCreate(channelName);
      setChannelName(''); // Reset input field after creating
      onClose(); // Close modal after creation
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4 text-black">Create New Channel</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
          placeholder="Channel name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-300 text-black rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-purple-500 text-white rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelCreateModal;
