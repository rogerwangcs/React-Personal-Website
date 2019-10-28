import React, { Component } from "react";

import styled from "styled-components";
import theme from "utils/theme";
import { viewport } from "utils/viewport";

const ButtonGroup = styled.div`
  white-space: nowrap;
`;

const Button = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  > h3 {
    user-select: none;
    line-height: 44px;
    color: white;
    font-weight: 300;
  }
  @media (max-width: ${viewport.MOBILE}) {
    padding: 0 15px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    padding: 0 28px;
  }
`;

const ButtonBG = styled.div`
  z-index: -1;
  position: absolute;
  background-color: ${theme.colors.hoverblue};
  width: 100%;
  height: 44px;
  border-radius: 20px/50%;

  /* backface-visibility prevents the shaking/flickering effect during transition  */
  -webkit-backface-visibility: hidden;
  transition: all ease-out 200ms;
  transform: scale(0.8);
  opacity: 0;

  top: 0px;
  left: 0px;

  ${Button}:hover & {
    cursor: pointer;
    transform: scale(1);
    opacity: 1;
  }
`;

const Menu = props => {
  return (
    <ButtonGroup>
      <Button onClick={() => props.handleRoute("/")}>
        <h3>About</h3>
        <ButtonBG className="buttonBG" />
      </Button>
      <Button onClick={() => props.handleRoute("/projects")}>
        <h3>Projects</h3>
        <ButtonBG className="buttonBG" />
      </Button>
      {/* <a href="https://medium.com/@rogerwangcs/latest" target="_blank">
        <Button>
          <h3>Blog</h3>
          <ButtonBG className="buttonBG" />
        </Button>
      </a> */}
    </ButtonGroup>
  );
};

export default Menu;
