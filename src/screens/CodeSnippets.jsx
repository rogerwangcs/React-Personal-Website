import React, { Component } from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlight from "react-syntax-highlighter/dist/esm/styles/prism/vs-dark";

import theme from "utils/theme";
import { viewport } from "utils/viewport";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";

import snip1 from "components/CodeSnippets/Snippets/snip1.js";
import snip2 from "components/CodeSnippets/Snippets/snip2.js";
import snip3 from "components/CodeSnippets/Snippets/snip3.js";
import snip4 from "components/CodeSnippets/Snippets/snip4.js";
import snip5 from "components/CodeSnippets/Snippets/snip5.js";

const CodeBlock = styled.div`
  text-align: center;
  margin: auto;
  width: 90%;
  font-size: 0.8em;

  border-radius: 150px;

  @media (min-width: 860px) {
    width: 800px;
  }
`;

const ButtonGroup = styled.div`
  width: 90%;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (min-width: 860px) {
    width: 800px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const CircleButton = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: ${props =>
    props.id == props.currentSnippet
      ? theme.colors.hoverblue
      : theme.colors.darkblue};
  color: white;
  line-height: 56px;

  text-align: center;
  font-size: 1.5em;
  font-family: "Raleway";

  :hover {
    background-color: ${theme.colors.hoverblue};
    cursor: pointer;
  }
`;

class CodeSnippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSnippet: 1,
      snippets: [snip1, snip2, snip3, snip4, snip5]
    };
  }

  setSnippet = id => {
    this.setState({ currentSnippet: id });
  };

  render() {
    return (
      <PageSection
        color={theme.colors.gray2}
        paddingBottom="50"
        paddingTop="50"
        fullwidth
      >
        <Divider centered={true} big={true}>
          <h2>My Code Snippets</h2>
        </Divider>

        <ButtonGroup>
          <CircleButton
            id={1}
            currentSnippet={this.state.currentSnippet}
            onClick={() => this.setSnippet(1)}
          >
            1
          </CircleButton>
          <CircleButton
            id={2}
            currentSnippet={this.state.currentSnippet}
            onClick={() => this.setSnippet(2)}
          >
            2
          </CircleButton>
          <CircleButton
            id={3}
            currentSnippet={this.state.currentSnippet}
            onClick={() => this.setSnippet(3)}
          >
            3
          </CircleButton>
          <CircleButton
            id={4}
            currentSnippet={this.state.currentSnippet}
            onClick={() => this.setSnippet(4)}
          >
            4
          </CircleButton>
          <CircleButton
            id={5}
            currentSnippet={this.state.currentSnippet}
            onClick={() => this.setSnippet(5)}
          >
            5
          </CircleButton>
        </ButtonGroup>

        <CodeBlock>
          <SyntaxHighlighter
            language="javascript"
            showLineNumbers={true}
            style={highlight}
            wrapLines={true}
          >
            {this.state.snippets[this.state.currentSnippet - 1]}
          </SyntaxHighlighter>
        </CodeBlock>
      </PageSection>
    );
  }
}

export default CodeSnippets;
