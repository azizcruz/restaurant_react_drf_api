import React, { Component } from "react";
import { Table, Icon } from "antd";

class DataTable extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  render() {
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // Sort by the ascii code of the first name charachter.
        sorter: (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0),
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: text => <span>${text}</span>,
        // Sort by the price number.
        sorter: (a, b) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order
      }, 
      {
        title: "Availability",
        dataIndex: "is_available",
        key: "is_available",
        render: (text) => (text) ?  <Icon type="check" /> :  <Icon type="close" />,
        // Sort by the price number.
        sorter: (a, b) => a.is_available - b.is_available,
        sortOrder: sortedInfo.columnKey === "is_available" && sortedInfo.order
      }
    ];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.props.data}
          onChange={this.handleChange}
          rowKey="id"
          pagination={false}
          loading={this.props.isLoading}
          bordered={true}
        />
      </div>
    );
  }
}

export default DataTable;
