import React, { Component } from "react";

import theme from "utils/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";
import ProjectCard from "components/Projects/ProjectCard";

import liveSubtitles from "images/live-subtitles.png";
import writefast1 from "images/writefast1.jpg";
import apolloBlogImg from "images/rogersblog1.jpg";
import betterBCHousing from "images/better-bc-housing.png";

const Projects = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Projects</h2>
      </Divider>
      <ProjectCard
        title="Live Subtitles"
        date="April 2019"
        image={liveSubtitles}
        description="Display what people are saying as they are talking in real time! A quick app built during Hack Dartmouth V. Created by Roger Wang, David Shen, Jerry Han, and Alex Sun using React, Tensorflow.js, and Chrome's speech-to-text API."
        website="https://live-subtitles.herokuapp.com/"
        github="https://github.com/rogerwangcs/ar-dialogue-subtitles"
      />
      <ProjectCard
        title="React Apollo Graphql Blogging Platform"
        image={apolloBlogImg}
        date="May 2018 - Dec 2018"
        description="Blogging Platform built using React, Apollo, Express, Graphql and
            MongoDB. Features authentication and authorization with Auth0, markup blog editor and individual user profiles."
        website="https://rogers-react-blog.herokuapp.com/"
        github=""
      />
      <ProjectCard
        title="Write Fast"
        date="July 2018 - August 2018"
        image={writefast1}
        description="An attempt to relieve writers block. A clean writing interface without distractions helps you focus, while the glowy red border nudges to continue writing."
        website="https://rogerwangcs.github.io/writefast/#/"
        github="https://github.com/rogerwangcs/writefast"
      />
      <ProjectCard
        title="Better BC Housing"
        date="April 2018"
        image={betterBCHousing}
        description="Reinvents the obsolete housing selection system at Boston College with a React, Node, and MongoDB single page web application. Features Beautiful and interactive map interface where students can navigate to buildings and rooms of choice. Accommodates live room picking, giving students real time feedback during the selection process. 🏆 Won best UI/UX at BC's Hack The Heights 2018 hackathon.
        "
        website=""
        github="https://github.com/MikeN64/Better-BC-Housing"
      />
    </PageSection>
  );
};

export default Projects;
