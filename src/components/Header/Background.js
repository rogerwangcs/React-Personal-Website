import React, { Component } from "react";

import styled from "styled-components";
import { viewport } from "constants/viewport";
import theme from "constants/theme.js";
import { animationTimings } from "constants/animationTimings";
import FadeIn from "utils/FadeIn";

import Cubes from "components/Header/Cubes";

import Logo from "media/bg-logo-foreground.png";

const StyledHeaderBg = styled.div`
  overflow-x: hidden;
  z-index: -100;
  position: relative;
  background-color: ${theme.colors.darkblue};
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const LogoWrapper = FadeIn.extend`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > img {
    user-select: none;
  }

  @media (max-width: ${viewport.MOBILE}) {
    > img {
      width: 100vw;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    > img {
      width: 600px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    > img {
      width: 800px;
    }
  }
`;

class HeaderBg extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <StyledHeaderBg>
        <Cubes />
        <LogoWrapper delay={animationTimings.loadDelay + 50}>
          <img draggable="false" src={Logo} />
        </LogoWrapper>
      </StyledHeaderBg>
    );
  }
}

export default HeaderBg;