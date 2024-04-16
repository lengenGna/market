import React from "react";
import HomeInfo from "./HomeInfo";
import HomePicture from "./HomePicture";
import { homePage } from "../../data";
import "./screen.css"

const HomeEffect = () => {
  return (
    <div id="home" className="bir">
      <HomePicture />
      <div className="wrapper">
      <div className="infoPage">
      {homePage.map((info) => (
        <HomeInfo
          key={info.id}
          img1={info.imgI}
          about={info.about}
          what={info.what}
        />
      ))}
        </div>
      </div>
    </div>
  )
};

export default HomeEffect;