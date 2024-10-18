import React, { useEffect, useState } from "react";
import { getLeaderBoard } from "./api/getLeaderBoard";
import { leaderboardData } from "./api/data";

const LeaderboardScreen = () => {
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
    document.body.classList.add("hideButtons");
    return () => document.body.classList.remove("hideButtons");
  }, []);

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
        <li style={{ height: "15px" }}></li>
        {state.slice(3, 15).map((data, index) => (
          <li key={index}>
            {/* <img
              src={data.imgURL}
              alt={data.userFullname}
              style={{
                overflow: 'hidden',
                borderRadius: '50%',
                width: '1em',
                height: '1em',
              }}
            /> */}
            <a href={data.userURL}>{`${index + 1}. ${data.userFullname}`}</a>
          </li>
        ))}
      </ul>
      {state && (
        <>
          <LeaderStone
            url={state[0].userURL}
            imgURL={state[0].imgURL}
            username={state[0].userFullname}
            type={"first"}
          />
          <LeaderStone
            url={state[1].userURL}
            imgURL={state[1].imgURL}
            username={state[1].userFullname}
            type={"second"}
          />
          <LeaderStone
            url={state[2].userURL}
            imgURL={state[2].imgURL}
            username={state[2].userFullname}
            type={"third"}
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
        <LeaderStone username={"loading"} type={"first"} />
        <LeaderStone username={"loading"} type={"second"} />
        <LeaderStone username={"loading"} type={"third"} />
      </div>
    </>
  );
};

const LeaderStone = ({ url, imgURL, username, type }) => {
  const profileName = url ? url.replace("https://x.com/", "") : "";

  return (
    <div className={`leaderboard__item _${type}`}>
      {!imgURL && (
        <div className="leaderboard__item-image">
          <img src="/images/placeholder-stone.png" alt="stone" />
        </div>
      )}
      {(imgURL || profileName) && (
        <div className="leaderboard__item-image">
          <img
            src={`https://unavatar.io/twitter/${profileName}`}
            alt={profileName}
          />
          {/* <img src={imgURL} alt={username} /> */}
        </div>
      )}
      <div className="leaderboard__item-bg">
        {type === "first" && (
          <img src="/images/leaderboard/frame-1.png" alt="stone" />
        )}
        {type === "second" && (
          <img src="/images/leaderboard/frame-2.png" alt="stone" />
        )}
        {type === "third" && (
          <img src="/images/leaderboard/frame-3.png" alt="stone" />
        )}
      </div>
      <div className="leaderboard__item-text">{username}</div>
    </div>
  );
};
export default LeaderboardScreen;
