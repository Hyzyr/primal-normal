import React, { useEffect, useState } from 'react';
import { getLeaderBoard } from './api/getLeaderBoard';
import { leaderboardData } from './api/data';

const LeaderboardScreen = ({ active }) => {
  const [state, setState] = useState(leaderboardData);

  // useEffect(() => {
  //   getLeaderBoard()
  //     .then(({ status, data }) => {
  //       if (data) setState(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  useEffect(() => {
    if (active) document.body.classList.add('hideButtons');
    else document.body.classList.remove('hideButtons');
    return () => document.body.classList.remove('hideButtons');
  }, [active]);

  if (!state) return <LoadingScreen />;
  return (
    <div className="leaderboard screen">
      loading
      <div className="leaderboard__bg screen__bg">
        <img
          src="/images/screens/leaderboard-screen.png"
          alt="app-screen-frame"
        />
      </div>
      <ul className="leaderboard__list">
        <li style={{ height: '15px' }}></li>
        {state.slice(3, 50).map((data, index) => (
          <li key={index}>
            <span>
              {index < 6 ? '0' : ''}
              {index + 4}
            </span>
            <img
              className="user-image"
              src={data.imgURL}
              alt={data.userFullname}
            />
            <a href={data.userURL}>{data.userFullname}</a>
            <img
              className="golden-stone"
              src={'/images/golden-stone.png'}
              alt={'golden-stone'}
            />
            <span>{(parseFloat(data.score) / 1000).toFixed(2)}K</span>
          </li>
        ))}
      </ul>
      {state && (
        <>
          <LeaderStone
            url={state[0].userURL}
            imgURL={state[0].imgURL}
            username={state[0].userFullname}
            type={'first'}
          />
          <LeaderStone
            url={state[1].userURL}
            imgURL={state[1].imgURL}
            username={state[1].userFullname}
            type={'second'}
          />
          <LeaderStone
            url={state[2].userURL}
            imgURL={state[2].imgURL}
            username={state[2].userFullname}
            type={'third'}
          />
        </>
      )}
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <>
      <div className="leaderboard screen">
        <div className="leaderboard__bg screen__bg">
          <img
            src="/images/screens/leaderboard-screen.png"
            alt="app-screen-frame"
          />
        </div>
        <ul className="leaderboard__list">
          <li>loading</li>
        </ul>
        <LeaderStone username={'loading'} type={'first'} />
        <LeaderStone username={'loading'} type={'second'} />
        <LeaderStone username={'loading'} type={'third'} />
      </div>
    </>
  );
};

const LeaderStone = ({ url, imgURL, username, type }) => {
  const profileName = url ? url.replace('https://x.com/', '') : '';

  return (
    <div className={`leaderboard__item _${type}`}>
      {!imgURL && (
        <div className="leaderboard__item-image">
          <img src="/images/placeholder-stone.png" alt="stone" />
        </div>
      )}
      {(imgURL || profileName) && (
        <div
          className={`leaderboard__item-image  ${
            type !== 'first' ? '_lg' : ''
          }`}>
          <img
            src={`https://unavatar.io/twitter/${profileName}`}
            alt={profileName}
          />
          {/* <img src={imgURL} alt={username} /> */}
        </div>
      )}
      <div className="leaderboard__item-bg">
        {type === 'first' && (
          <img src="/images/leaderboard/frame-1.png" alt="stone" />
        )}
        {type === 'second' && (
          <img src="/images/leaderboard/frame-2.png" alt="stone" />
        )}
        {type === 'third' && (
          <img src="/images/leaderboard/frame-3.png" alt="stone" />
        )}
      </div>
      <div className="leaderboard__item-text">{username}</div>
    </div>
  );
};
export default LeaderboardScreen;
