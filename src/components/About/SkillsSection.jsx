import React, { Component } from "react";

import styled from "styled-components";
import { viewport } from "utils/viewport";
import theme from "utils/theme.js";

import Divider from "components/generic/Divider";

const StyledSkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillBox = styled.div`
  width: 30%;

  padding-left: 10px;
  margin-bottom: 15px;

  text-align: left;

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    > p {
      margin: 6px 15px 6px 0px;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SkillsSection = props => {
  return (
    <StyledSkillsSection>
      <SkillBox>
        <Divider>
          <h3>Languages</h3>
        </Divider>
        <div className="items">
          <p>Python</p>
          <p>Javascript</p>
          <p>SQL</p>
          <p>Java</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>App Development</h3>
        </Divider>
        <div className="items">
          <p>React.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Graphql</p>
          <p>MongoDB</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Data Analysis</h3>
        </Divider>
        <div className="items">
          <p>Numpy + Pandas</p>
          <p>Matplotlib</p>
        </div>
      </SkillBox>
      {/*
      <SkillBox>
        <Divider>
          <h3>Web Development</h3>
        </Divider>
        <div className="items">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript(ES6)</p>
          <p>SQL</p>
          <p>React.js + Apollo</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Graphql</p>
          <p>MongoDB</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Machine Learning</h3>
        </Divider>
        <div className="items">
          <p>Python</p>
          <p>Pandas + Numpy</p>
          <p>scikit-learn</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Tools</h3>
        </Divider>
        <div className="items">
          <p>Git</p>
          <p>Unix</p>
          <p>Heroku</p>
          <p>AWS</p>
          <p>Photoshop CC</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Tools</h3>
        </Divider>
        <div className="items">
          <p>Git</p>
          <p>Unix</p>
          <p>Heroku</p>
          <p>AWS</p>
          <p>Photoshop CC</p>
        </div>
      </SkillBox>*/}
    </StyledSkillsSection>
  );
};

export default SkillsSection;
