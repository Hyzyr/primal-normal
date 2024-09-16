import React from "react";

const AppScreen = ({}) => {
  return (
    <div className="appscreen screen">
      <div className="appscreen__bg screen__bg">
        <img src="/images/screens/app-screen.png" alt="app-screen-frame" />
      </div>
      <div className="appscreen__image">
        {/* <img src="/images/placeholder.jpg" alt="placeholder" /> */}
        <iframe
          src="https://primal-nomad-app.vercel.app/"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default AppScreen;
