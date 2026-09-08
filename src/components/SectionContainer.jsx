import React from 'react';
import { UserBubble, AssistantResponseBox } from './ChatMessage';
import './SectionContainer.css';

export const SectionContainer = ({ userQuery, assistantHeading, children }) => {
  return (
    <div className="section-view-container fade-in">
      <UserBubble text={userQuery} />
      <AssistantResponseBox title={assistantHeading}>
        {children}
      </AssistantResponseBox>
    </div>
  );
};
