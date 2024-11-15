"use client";

import React from "react";
import { BannerDiv, ExploreDiv, H1Div, InnerDiv } from "./style";
import { FiArrowDownRight } from "react-icons/fi";
import "./main.css";

const Banner = () => {
  return (
    <BannerDiv className="Banner">
      <InnerDiv>
        <H1Div>
          <h1>
            Creating <span>Special</span>
            <br />
            <span>things</span> for whole world
          </h1>
        </H1Div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          deleniti eaque quis culpa harum suscipit dicta rem deserunt ipsam ea?
          Natus sed dignissimos ea. Incidunt odit earum beatae blanditiis
          soluta! Quas nam aliquam fuga alias autem quidem facilis distinctio
          ab.
        </p>
        <ExploreDiv>
          <span>
            <h1>
              Explore more
              <FiArrowDownRight />
            </h1>
          </span>
        </ExploreDiv>
      </InnerDiv>
    </BannerDiv>
  );
};

export default Banner;
