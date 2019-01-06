import React, { Component } from "react";

import styled from "styled-components";

import Card from "components/generic/Card";
import RoundButton from "components/generic/RoundButton";

import apolloBlogImg from "media/rogersblog1.jpg";
import betterBCHousing from "media/better-bc-housing.PNG";

const StyledProjectsSection = styled.div`
  text-align: center;

  .project-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-bottom: 25px;
  }
`;

const ProjectsSection = props => {
  return (
    <StyledProjectsSection>
      <div className="project-cards">
        <Card title="React Blog Platform" image={apolloBlogImg} />
        <Card title="Better BC Housing" image={betterBCHousing} />
      </div>
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
