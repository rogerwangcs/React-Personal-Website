import React, { Component } from "react";

import { viewport } from "utils/viewport";
import styled from "styled-components";

import Background from "components/Header/Background";
import Text from "components/Header/Text";
import Navigation from "components/Navigation/Navigation";
import SocialButtons from "components/Header/SocialButtons";
// import OpenArrow from 'components/Header/OpenArrow'

const HeaderContent = styled.div`
  > * {
    position: absolute;
    top: ${props => props.height / 2 + "px"};
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Background />
        <SocialButtons />
        <HeaderContent height={window.innerHeight}>
          <Text />
          <Navigation />
        </HeaderContent>
      </React.Fragment>
    );
  }
}

export default Header;
