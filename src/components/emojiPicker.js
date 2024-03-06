import React from "react";

const EmojiPicker = ({ onEmojiClick }) => {
  // List of emojis
  const emojis = [
    "😀",
    "😂",
    "😍",
    "😭",
    "😅",
    "😎",
    "😜",
    "😊",
    "🎉",
    "❤️",
    "👍",
    "👻",
  ];

  return (
    <div className="absolute bottom-16 left-4 bg-gray-900 shadow-xl p-2 rounded">
      <div className="flex flex-wrap justify-center gap-2">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className="text-2xl focus:outline-none"
            onClick={() => onEmojiClick(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;
