import React, { useState } from "react";
import { Button } from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={process.env.PUBLIC_URL + "/images/banner.jpg"} alt="Hero" />
      <h2>Why join Two’20</h2>
      <p>
        Two’20 challenge made it easier for anyone irrespective of their
        age,profession to put their contribution to trustworthy charity Athani
        that helps in improving the lives of needy.
      </p>
      <br />
      <p>
        Anyone can be a part of this community who donate Rs.20 on the 2nd day
        of every month. It is obvious that many people are now coming forward to
        be a member of this community and to give a hand to athani for its
        betterment.
      </p>
      <br />
      <p>
        Surely by making a monthly donation you’re showing that you’re committed
        to help us ensure that every citizen has a chance to survive and prosper
      </p>
      <div className="hero-btns-set">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          DONATE NOW
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          REGISTER NOW
        </Button>
      </div>
      <div className="hero-btns-set2">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          MORE ABOUT ATHANI{" "}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
