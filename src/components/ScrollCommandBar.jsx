import React from 'react';
import { ArrowUp, Plus } from 'lucide-react';
import './ScrollCommandBar.css';

export const ScrollCommandBar = ({ onScrollClick }) => {
  return (
    <div className="scroll-command-bar fade-in">
      <div className="scroll-command-left">
        <Plus size={20} className="command-plus-icon" />
        <div className="command-divider"></div>
        <span className="command-text">
          Know More About Myself
        </span>
      </div>
      <button
        className="scroll-down-btn"
        onClick={onScrollClick}
        title="Know More About Myself"
        aria-label="Know More About Myself"
      >
        <ArrowUp size={19} strokeWidth={2.2} />
      </button>
    </div>
  );
};
