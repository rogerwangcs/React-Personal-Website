import React from "react";
import theme from "utils/theme.js";

import styled from "styled-components";
import DevIcon from "devicon-react-svg";

import Divider from "components/generic/Divider";

const SSkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin: 50px 0px 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin: 50px 0px 0px;
  }
`;

SSkillsSection.SkillBox = styled.div`
  width: 30%;
  padding-left: 10px;
  text-align: left;

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
  }

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

SSkillsSection.Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 15px 0px 0px;
  p {
    margin-right: 5px;
  }
  svg {
    fill: ${theme.colors.lightblue};
    width: 36px;
    height: 36px;
    margin: 0;
    padding: 0;
  }
`;

const SIcon = styled(DevIcon)`
  fill: ${theme.colors.lightblue};
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
`;

const SkillsSection = () => {
  return (
    <SSkillsSection>
      <SSkillsSection.SkillBox>
        <Divider>
          <h3>Languages</h3>
        </Divider>
        <div className="items">
          <SSkillsSection.Item>
            <p>Python</p>
            <SIcon icon="python" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Javascript</p>
            <SIcon icon="javascript" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Java</p>
            <SIcon icon="java" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>C</p>
            {/* <SIcon icon="c" /> */}
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>SQL</p>
            <SIcon icon="database" />
          </SSkillsSection.Item>
        </div>
      </SSkillsSection.SkillBox>
      <SSkillsSection.SkillBox>
        <Divider>
          <h3>Development</h3>
        </Divider>
        <div className="items">
          <SSkillsSection.Item>
            <p>React.js</p>
            <SIcon icon="react" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Node.js</p>
            <SIcon icon="nodejs" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Graphql</p>
            {/* <SIcon icon="graphql" /> */}
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>MongoDB</p>
            <SIcon icon="mongodb" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>WebSocket</p>
            {/* <SIcon icon="websocket" /> */}
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Linux</p>
            <SIcon icon="linux" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Git</p>
            <SIcon icon="git" />
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>AWS</p>
            <SIcon icon="aws" />
          </SSkillsSection.Item>
        </div>
      </SSkillsSection.SkillBox>
      <SSkillsSection.SkillBox>
        <Divider>
          <h3>Data Science</h3>
        </Divider>
        <div className="items">
          <SSkillsSection.Item>
            <p>Numpy</p>
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Pandas</p>
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Matplotlib</p>
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>Scikit-Learn</p>
          </SSkillsSection.Item>
          <SSkillsSection.Item>
            <p>PyTorch</p>
            <svg viewBox="0 0 256 310">
              <path d="M218.281037,90.106412 C268.572988,140.398363 268.572988,221.075034 218.281037,271.716235 C169.036835,322.008186 88.0109141,322.008186 37.7189632,271.716235 C-12.5729877,221.424284 -12.5729877,140.398363 37.7189632,90.106412 L127.825375,0 L127.825375,45.053206 L119.443383,53.4351978 L59.7216917,113.156889 C22.0027285,150.177353 22.0027285,210.946794 59.7216917,248.665757 C96.7421555,286.38472 157.511596,286.38472 195.230559,248.665757 C232.949523,211.645293 232.949523,150.875853 195.230559,113.156889 L218.281037,90.106412 Z M173.227831,84.5184175 C163.969338,84.5184175 156.463847,77.0129263 156.463847,67.7544338 C156.463847,58.4959413 163.969338,50.9904502 173.227831,50.9904502 C182.486323,50.9904502 189.991814,58.4959413 189.991814,67.7544338 C189.991814,77.0129263 182.486323,84.5184175 173.227831,84.5184175 Z"></path>
            </svg>
          </SSkillsSection.Item>
        </div>
      </SSkillsSection.SkillBox>
    </SSkillsSection>
  );
};

export default SkillsSection;
