import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useScreen = () => {
  const [timeline, setTimeline] = useState();

  useGSAP(() => {
    setTimeline(gsap.timeline());
  });

  const hideScreen = (screen, timing = '>') => {
    if (!screen || !timeline) return;
    const onComplete = () => {
      gsap.set(screen, { display: 'none' });
    };
    timeline.fromTo(
      screen,
      { display: 'flex', yPercent: 0, opacity: 1 },
      {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3',
        onComplete,
      },
      timing
    );
  };
  const showScreen = (screen, timing = '>') => {
    if (!screen || !timeline) {
      if (screen) gsap.set(screen, { display: 'flex' });
      return;
    }
    timeline.fromTo(
      screen,
      { display: 'flex', yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3' },
      timing
    );
  };

  return {
    hideScreen,
    showScreen,
  };
};

export default useScreen;
