import React from "react";
import backgroundImage from "../../assets/images/store-background.jpg"
import "./Hero.scss";

interface IHero {}

export const Hero = (props: IHero) => {
    return (
        <div className="hero" style={{ backgroundImage }}>
            Hero container
        </div>
    )
}