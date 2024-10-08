import React, { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useScreenNavigition = ({
  initialPage = 0,
  wrapperRef,
  sectionClassName = '.home__section',
} = {}) => {
  const [page, setPage] = useState(initialPage);
  const sections = wrapperRef.current
    ? wrapperRef.current.querySelectorAll(sectionClassName)
    : 0;
  let sectionsCount = sections.length;

  useGSAP(
    () => {
      if (!sectionsCount)
        sectionsCount =
          wrapperRef.current.querySelectorAll(sectionClassName).length;

      const transformX = (100 / sectionsCount).toFixed(2) * page;
      gsap.to(wrapperRef.current, {
        xPercent: -transformX,
        duration: 1,
        delay: 0.15,
      });
    },
    {
      dependencies: [page, sectionsCount],
      scope: wrapperRef,
    }
  );

  return {
    setPage: setPage,
    prevDisabled: page === 0,
    nextDisabled: page + 1 === sectionsCount,
    nextPage: () => setPage(page + 1),
    prevPage: () => setPage(page - 1),
  };
};

export default useScreenNavigition;
