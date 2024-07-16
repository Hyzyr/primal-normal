import React, { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useHomeBg = ({
  initialPage = 0,
  wrapperRef,
  sectionClassName = '.home__bg-screen',
} = {}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [screens, setScreens] = useState({
    screens: [],
    screensCount: 0,
  });

  const [page, setPage] = useState(initialPage);
  const [timeline, setTimeline] = useState(false);

  const navToPage = (pageIndex, fromRight = true) => {
    const screenCurrentPage = screens.screens[page];
    const screenNextPage = screens.screens[pageIndex];

    let d = fromRight ? 1 : -1;
    timeline
      .fromTo(
        screenCurrentPage,
        { xPercent: 0 },
        {
          xPercent: -100 * d,
          duration: 1,
          onStart: () => setIsAnimating(true),
        }
      )
      .fromTo(
        screenNextPage,
        { xPercent: 100 * d },
        { xPercent: 0, duration: 1 },
        '<'
      );
    setPage(pageIndex);
  };
  const nextPage = () => {
    if (isAnimating) return;
    let nextPageIndex = page + 1 === screens.screensCount ? 0 : page + 1;
    navToPage(nextPageIndex);
  };
  const prevPage = () => {
    if (isAnimating) return;
    let nextPageIndex = page === 0 ? screens.screensCount - 1 : page - 1;
    navToPage(nextPageIndex, false);
  };
  const initScreens = (screens) => {
    if (!screens) return;
    screens.forEach((screen, index) => {
      if (index !== initialPage) gsap.set(screen, { xPercent: 100 });
    });
  };

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const timeline = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      const sections = wrapper
        ? wrapper.querySelectorAll(sectionClassName)
        : [];
      const sectionsCount = sections.length;

      initScreens(sections);
      setScreens({
        screens: Array.from(sections),
        screensCount: sectionsCount,
      });
      setTimeline(timeline);
    },
    {
      dependencies: [wrapperRef],
      scope: wrapperRef,
    }
  );

  return {
    prevDisabled: isAnimating,
    nextDisabled: isAnimating,
    navToPage,
    nextPage,
    prevPage,
  };
};

export default useHomeBg;
