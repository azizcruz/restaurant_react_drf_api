import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import CustomLayout from "./containers/CustomLayout";
import DataTable from "./components/DataTable";
import FilterInput from "./components/FilterInput";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(filter = false, filterBy = "") {
    let endpoint = "/api/dishes";
    if (filter) {
      this.setState({ isLoading: true });
      endpoint = `/api/dishes?filter=${filter}&name=${filterBy}`;
    }
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ data: res.data, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className="App">
        <CustomLayout>
          {/* fetchData(filter_state, filter_by) */}
          <FilterInput onFilter={value => this.fetchData(true, value)} />
          <DataTable data={this.state.data} isLoading={this.state.isLoading} />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
