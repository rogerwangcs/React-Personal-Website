import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { animateScroll } from "react-scroll";

import styled from "styled-components";
import { viewport } from "utils/viewport";
import { animationTimings } from "utils/animationTimings";
import FadeIn from "components/generic/FadeIn";

import Menu from "components/Navigation/Menu";

const NavbarWrapper = FadeIn.extend`
  text-align: center;
  @media (max-width: ${viewport.MOBILE}) {
    margin-top: 125px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    margin-top: 150px;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    margin-top: 200px;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSticky: false
    };
  }

  handleRoute = url => {
    this.props.history.push(url);
    animateScroll.scrollTo(window.innerHeight);
  };

  render() {
    return (
      <React.Fragment>
        <NavbarWrapper
          nav={this.props.nav}
          delay={animationTimings.loadDelay + 750}
        >
          <Menu handleRoute={this.handleRoute} />
        </NavbarWrapper>
      </React.Fragment>
    );
  }
}

export default withRouter(Nav);
