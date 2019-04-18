import React, { Component } from "react";
import { Input } from "antd";
import { Row, Col } from "antd";

const Search = Input.Search;

export class FilterInput extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
            <Search
              placeholder="Filter by name"
              onSearch={value => this.props.onFilter(value)}
              enterButton
            />
          </Col>
        </Row>

        <br />
        <br />
      </div>
    );
  }
}

export default FilterInput;
