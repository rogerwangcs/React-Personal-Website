import React, {Component} from 'react';

import styled from 'styled-components'

const StyledPage = styled.div `
  z-index: 10;
  position: relative;
  background-color: white;
  
  width: 100vw;
  margin-top: -50px;

  transition: transform 500ms ease-in-out;

  transform: ${props => props.nav === true
  ? 'translateY(100vh)'
  : 'translateY(0px)'};
`;

export default StyledPage;