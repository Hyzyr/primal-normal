import React, { useEffect, useRef, useState } from 'react';
import ButtonIcon from './buttons/ButtonIcon';

const AudioController = () => {
  const [isMuted, setMuted] = useState(true);
  const ref = useRef(null);
  const buttonSound = useRef(null);

  // button sound listener
  useEffect(() => {
    const listener = () => {
      if (!isMuted) buttonSound.current.play();
    };

    window.addEventListener('buttonsound', listener);
    return () => window.removeEventListener('buttonsound', listener);
  }, [isMuted]);

  useEffect(() => {
    if (!isMuted) ref.current.play();
    const listener = () => {
      if (!isMuted) ref.current.play();
    };

    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [isMuted]);

  useEffect(() => {
    const allSounds = document.querySelectorAll('audio');
    if (!allSounds) return;

    allSounds.forEach((item) => {
      item.muted = isMuted;
    });
  }, [isMuted]);

  return (
    <>
      <audio
        ref={ref}
        style={{ display: 'none' }}
        loop
        src="/sounds/bg-music.MP3"
        type="audio/mp3"
      />
      <audio
        ref={buttonSound}
        style={{ display: 'none' }}
        src="/sounds/stone-effect.MP3"
        type="audio/mp3"
      />
      <ButtonIcon
        addClass={`home-volume ${!isMuted ? 'active' : ''}`}
        icon={'/images/components/sound-off.png'}
        secondIcon={'/images/components/sound-on.png'}
        alt={'sound'}
        onClick={() => setMuted(!isMuted)}
      />
    </>
  );
};

export default AudioController;
