import React, { useState } from "react";
import styled from "styled-components";

import theme from "utils/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";

const SPuzzleHelper = styled.div``;

const PuzzleHelper = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const numberSeries = e => {
    let numbers = e.target.value;
    let splitted = numbers.split(" ").map(i => {
      return parseInt(i, 10);
    });
    splitted = splitted.filter(Boolean);
    console.log(splitted);
    setNumbers(splitted);
  };

  const showNumbers = () => {
    if (Array.isArray(numbers) && numbers.length)
      return (
        <div>
          {numbers.reduce((a, b) => a + b)}
          <br />
          {numbers.reduce((a, b) => a - b)}
          <br />
          {numbers.reduce((a, b) => a * b)}
          <br />
          {numbers.reduce((a, b) => a / b)}
        </div>
      );
    return "Enter numbers";
  };

  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>Puzzle Helper</h2>
      </Divider>

      <input onChange={e => numberSeries(e)} />
      {showNumbers()}
    </PageSection>
  );
};

export default PuzzleHelper;
