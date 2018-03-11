import React, {Component} from 'react'

import styled, {keyframes} from 'styled-components'

const StyledHeaderCover = styled.div `
  z-index: 5;
  background-color: #c0c0c0;

  position: absolute;
  left: 0;
  
  width: 100vw;
  height: 80vh;

  transition: transform 400ms ease;
  transform-origin: 0% 100%;
  transform: ${props => props.nav === true
  ? 'scaleY(0)'
  : 'scaleY(1)'};
`;

const HeaderCover = (props) => {
  return (
    <StyledHeaderCover nav={props.nav}></StyledHeaderCover>
  );
}

export default HeaderCover;