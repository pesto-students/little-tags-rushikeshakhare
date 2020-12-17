import React from "react";
import backgroundImage from "../../assets/images/store-background.jpg"
import "./Hero.scss";

interface IHero {}

export const Hero = (props: IHero) => {
    return (
        <div className="hero">
            <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})`  }} ></div>
            
            <div className="hero-content text-center">
                <div className="hero-content-heading">Online Flee Market for Clothes</div>
                <div className="hero-content-subheading">Its time to recycle</div>
            </div>
        </div>
    )
}