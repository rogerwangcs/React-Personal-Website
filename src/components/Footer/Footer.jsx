import React from "react";

import styled from "styled-components";
import theme from "utils/theme.js";
import { viewport } from "utils/viewport";

import github from "images/github.png";
import linkedin from "images/linkedin.png";
import gmail from "images/gmail.png";

const StyledFooter = styled.div`
  user-select: none;

  z-index: 100;
  position: relative;

  background-color: ${theme.colors.darkblue};

  padding-top: 30px;

  height: 150px;
  width: 100vw;

  > p {
    font-size: 16px;
    color: ${theme.colors.gray2};
    text-align: center;
  }
`;

const StyledSocialButtons = styled.div`
  text-align: center;
`;

const StyledIcon = styled.a`
  display: inline-block;

  transition: all 200ms ease-in-out;
  background-color: ${theme.colors.blue};

  margin: 15px;
  padding: 10px;
  border-radius: 25%;

  img {
    transition: transform 200ms ease-in-out;
    vertical-align: middle;
    width: 40px;
    height: 40px;
  }
  :hover {
    cursor: pointer;
    background-color: ${theme.colors.buttonblue};
    img {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${viewport.MOBILE}) {
    padding: 8px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon href="https://github.com/rogerwangcs" target="_blank">
        <img alt="github" draggable="false" src={github} />
      </StyledIcon>
      <StyledIcon
        href="https://www.linkedin.com/in/rogerwangcs/"
        target="_blank"
      >
        <img alt="linkedin" draggable="false" src={linkedin} />
      </StyledIcon>
      <StyledIcon href="mailto:rogerwangcs@gmail.com">
        <img alt="gmail" draggable="false" src={gmail} />
      </StyledIcon>
    </StyledSocialButtons>
  );
};

const Footer = props => {
  let date = new Date();

  return (
    <StyledFooter>
      <SocialButtons />
      <p>© Roger Wang {date.getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
