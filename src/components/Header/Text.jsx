import React from "react";

import styled from "styled-components";
import { viewport } from "utils/viewport.js";
import FadeIn from "components/generic/FadeIn";
import { animationTimings } from "utils/animationTimings";

const StyledText = FadeIn.extend`
  margin-top: -50px;
  text-align: center;

  > * {
    display: block;
    color: white;
  }

  @media (max-width: ${viewport.MOBILE}) {
    margin-top: -10px;
    width: 80%;
    > h1 {
      font-size: 3em;
    }
    > h4 {
      margin-top: 25px;
      font-size: 14px;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80%;
    > h1 {
      font-size: 5em;
    }
    > h4 {
      font-size: 18px;
      margin-top: 40px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 75%;
    > h1 {
      font-size: 8em;
    }
    > h4 {
      font-size: 20px;
      margin-top: 50px;
    }
  }
`;

const HeaderText = props => {
  return (
    <StyledText delay={animationTimings.loadDelay + 550}>
      <h1>Roger Wang</h1>
      <h4>College Student, Full Stack Developer</h4>
    </StyledText>
  );
};

export default HeaderText;
