import React from 'react';
import { ClaudeIcon } from './ClaudeIcon';
import './ChatMessage.css';

export const AssistantBubble = ({ text }) => {
  return (
    <div className="chat-row-assistant fade-in">
      <div className="chat-bubble-assistant">
        <ClaudeIcon size={20} />
        <span>{text}</span>
      </div>
    </div>
  );
};

export const UserBubble = ({ text }) => {
  return (
    <div className="chat-row-user fade-in">
      <div className="chat-bubble-user">
        <span>{text}</span>
      </div>
      <div className="chat-user-avatar">M</div>
    </div>
  );
};

export const AssistantResponseBox = ({ title = "Here's your about section ✨", children }) => {
  return (
    <div className="chat-response-box fade-in">
      <div className="chat-response-header">
        <ClaudeIcon size={22} />
        <span className="chat-response-title">{title}</span>
      </div>
      {children}
    </div>
  );
};
