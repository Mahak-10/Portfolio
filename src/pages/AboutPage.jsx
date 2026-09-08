import React, { useRef } from 'react';
import { AssistantBubble, UserBubble, AssistantResponseBox } from '../components/ChatMessage';
import { ProfileCard } from '../components/ProfileCard';
import { ScrollCommandBar } from '../components/ScrollCommandBar';
import { ExploreMoreSection } from '../components/ExploreMoreSection';

export const AboutPage = () => {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-page-wrapper">
      {/* First Viewport — Fits cleanly on screen matching reference layout */}
      <div className="chat-viewport">
        <div className="chat-flow-container">
          <AssistantBubble text="Hi! Tell me about yourself." />
          <UserBubble text="I'm Mahak Singh, a passionate developer. Show my about section." />
          <AssistantResponseBox title="Here's your about section ✨">
            <ProfileCard />
          </AssistantResponseBox>
        </div>

        {/* Command Bar with 'Know More About Myself' text below response box */}
        <ScrollCommandBar onScrollClick={scrollToExplore} />
      </div>

      {/* Second Viewport — Explore More 3x3 Grid */}
      <ExploreMoreSection sectionRef={exploreRef} />
    </div>
  );
};
