import React, { useEffect } from "react";

const LeaderboardScreen = () => {
  // useEffect(() => {
  //   document.body.classList.add("hideButtons");
  //   return () => document.body.classList.remove("hideButtons");
  // }, []);
  return (
    <div className="leaderboard screen">
      <div className="leaderboard__bg screen__bg">
        <img
          src="/images/screens/leaderboard-screen.webp"
          alt="app-screen-frame"
        />
      </div>
      <ul className="leaderboard__list">
        <li>1 John Johnson</li>
        <li>2 Jones Williams</li>
        <li>3 Michael Brown</li>
        <li>5 William Garcia</li>
        <li>6 David Miller</li>
        <li>7 Richard Davis</li>
        <li>8 Charles Roodriges</li>
        <li>9 Thomas Martinez</li>
        <li>10 Joseph Hernandez </li>
        <li>11 Christoper Lopez </li>
        <li>12 Daniel Gonzales </li>
        <li>13 Paul Wilson</li>
        <li>14 Mark Anderson</li>
        <li>15 Donald Thomas</li>
        <li>16 Kenneth Taylor</li>
        <li>17 George Martin</li>
        <li>18 Steven Moore</li>
        <li>19 Edward Jacson</li>
        <li>20 Brian Sanches</li>
      </ul>
      <div className="leaderboard__item _first">
        <div className="leaderboard__item-image">
          <img src="/images/placeholder-stone.png" alt="stone" />
        </div>
        <div className="leaderboard__item-bg">
          <img src="/images/leaderboard/frame-1.png" alt="stone" />
        </div>
        <div className="leaderboard__item-text">1 John Johnson</div>
      </div>
      <div className="leaderboard__item _second">
        <div className="leaderboard__item-image _lg">
          <img src="/images/placeholder-stone.png" alt="stone" />
        </div>
        <div className="leaderboard__item-bg">
          <img src="/images/leaderboard/frame-2.png" alt="stone" />
        </div>
        <div className="leaderboard__item-text">2 Jones Williams</div>
      </div>
      <div className="leaderboard__item _third">
        <div className="leaderboard__item-image _lg">
          <img src="/images/placeholder-stone.png" alt="stone" />
        </div>
        <div className="leaderboard__item-bg">
          <img src="/images/leaderboard/frame-3.png" alt="stone" />
        </div>
        <div className="leaderboard__item-text">3 Michael Brown</div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
