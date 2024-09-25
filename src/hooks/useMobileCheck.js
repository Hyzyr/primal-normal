import { useEffect, useState } from 'react';

const useMobileCheck = () => {
  // State variables to hold device type and orientation state
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    // Function to determine if the device is mobile
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /mobile/i.test(userAgent) || /tablet/i.test(userAgent);
    };

    // Function to determine the current orientation
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Set initial state
    setIsMobile(checkIfMobile());
    checkOrientation();

    // Add event listener to handle orientation changes
    window.addEventListener('resize', checkOrientation);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return { isMobile, isLandscape };
};

export default useMobileCheck;
