import React from "react";
import backgroundImage from "../../assets/images/store-background.jpg";
import { HERO_HEADING, HERO_SUBHEADING } from "../../AppConstants";
import "./Hero.scss";

interface IHero {}

export const Hero = (props: IHero) => {
  return (
    <div className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="hero-content text-center">
        <div className="hero-content-heading">{HERO_HEADING}</div>
        <div className="hero-content-subheading">{HERO_SUBHEADING}</div>
      </div>
    </div>
  );
};
