import React from "react";

import styled from "styled-components";

import Card from "components/generic/Card";
import RoundButton from "components/generic/RoundButton";
import ProjectCarousel from "components/About/ProjectCarousel";
import "components/About/Carousel.scss";

import liveSubtitles from "images/live-subtitles.png";
import apolloBlogImg from "images/rogersblog1.jpg";
import betterBCHousing from "images/better-bc-housing.png";

const StyledProjectsSection = styled.div`
  text-align: center;
`;

let projects = [
  <Card title="Live AR Subtitles" image={liveSubtitles} />,
  <Card title="React Blog Platform" image={apolloBlogImg} />,
  <Card title="Better BC Housing" image={betterBCHousing} />
];

const ProjectsSection = () => {
  return (
    <StyledProjectsSection>
      <ProjectCarousel
        components={[...projects, ...projects, ...projects]}
        active={0}
      />
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
