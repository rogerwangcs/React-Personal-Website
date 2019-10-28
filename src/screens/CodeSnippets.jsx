import React, { Component } from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlight from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";

import theme from "utils/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";

const code = `import React, { Component } from "react";
import PropTypes from "prop-types";
import utils from "../utils";
import TimeButton from "../presentational/TimeButton";
import "../css/tailwind.css";
import "../css/Stats.css";

const moment = require("moment");

Stats.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRange: "All Time",
      orders: null
    };
  }

  componentDidMount() {
    this.getOrders(this.props.id);
  }

  getOrders = id => {
    fetch(
      \`\${
        utils.API_DOMAIN
      }/getCompleted?GETerID=\${id}&token=\${localStorage.getItem("token")}\`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        if (response.status === 401) {
          return [];
        }
        return response.json();
      })
      .then(data => {
        data.sort(function(a, b) {
          return (
            new Date(b.date_order_completed) - new Date(a.date_order_completed)
          );
        });
        this.setState({ orders: data });
      });
  };

  setTimeRange = range => {
    this.setState({ timeRange: range });
  };

  // Converts string
  dayToNum() {
    let days = 0;
    if (this.state.timeRange === "Day") {
      days = 1;
    } else if (this.state.timeRange === "Week") {
      days = 7;
    } else if (this.state.timeRange === "Month") {
      days = 32;
    } else {
      days = 10000000;
    }
    return days;
  }

  calcNumOrders = () => {
    let orders = this.state.orders;

    const today = new Date();
    const lastDay = new Date(
      today.getTime() - this.dayToNum() * 24 * 60 * 60 * 1000
    );

    orders = orders.filter(function(order) {
      const orderDate = new Date(order.date_order_completed);
      return orderDate - lastDay >= 0;
    });

    return orders.length;
  };

  calcMoneyEarned() {
    let orders = this.state.orders;

    const today = new Date();
    const lastDay = new Date(
      today.getTime() - this.dayToNum() * 24 * 60 * 60 * 1000
    );

    orders = orders.filter(function(order) {
      const orderDate = new Date(order.date_order_completed);
      return orderDate - lastDay >= 0;
    });
    // Calculates a cumulative sum of the property "payout" in the "orders" array
    const moneyAdder = (sum, order) => sum + parseFloat(order.payout);

    return orders.reduce(moneyAdder, 0).toFixed(2);
  }

  calcTimeLine = () => {
    const orders = this.state.orders;
    const data = [];
    for (let x = 0; x < orders.length; x += 1) {
      const date = new Date(orders[x].date_order_completed);
      data.push({ x: 1, time: moment(date).format("Do") });
    }
    return data;
  };

  render() {
    if (this.state.orders == null) return <div className="loader m-auto" />;
    return (
      <div className="pageContainer">
        <div className="roundedCardContainer">
          <h1 className="text-center text-4xlg text-grey-darkest">
            {this.props.name}
          </h1>
          <div className="lightDivider" />
          <div className="statsContainer text-grey-darkest">
            <h1>{this.calcNumOrders()}</h1>
            <h3 className="text-center mb-5 text-grey-darkest">
              orders delivered
            </h3>
            <h2>{this.calcMoneyEarned()}</h2>
            <h3 className="text-center">money earned</h3>
          </div>
          <div className="buttonGroup">
            <TimeButton
              value="Day"
              timeRange={this.state.timeRange}
              clickFunc={() => this.setTimeRange("Day")}
            />
            <TimeButton
              value="Week"
              timeRange={this.state.timeRange}
              clickFunc={() => this.setTimeRange("Week")}
            />
            <TimeButton
              value="Month"
              timeRange={this.state.timeRange}
              clickFunc={() => this.setTimeRange("Month")}
            />
            <TimeButton
              value="All Time"
              timeRange={this.state.timeRange}
              clickFunc={() => this.setTimeRange("All Time")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
`;

const CodeBlock = styled.div`
  text-align: center;
  margin: auto;
  width: 80%;

  border-radius: 150px;
`;

const CodeSnippets = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Code Snippets</h2>
      </Divider>

      <CodeBlock>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers={true}
          style={highlight}
          wrapLines={true}
          lineProps={line => console.log(line)}
        >
          {code}
        </SyntaxHighlighter>
      </CodeBlock>
    </PageSection>
  );
};

export default CodeSnippets;
