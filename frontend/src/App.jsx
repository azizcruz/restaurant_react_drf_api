import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import CustomLayout from "./containers/CustomLayout";
import DataTable from "./components/DataTable";
import FilterInput from "./components/FilterInput";
import axios from "axios";
import { connect } from "react-redux";

class App extends Component {

  fetchData = (filter = false, filterBy = "") => {
    let endpoint = "/api/dishes";
    if (filter) {
      this.props.dispatch({type: "HANDLE_LOADING", isLoading: true});
      endpoint = `/api/dishes?filter=${filter}&name=${filterBy}`;
    }
    axios
      .get(endpoint)
      .then(res => {
        this.props.dispatch({type: "ADD_DATA", fetched_data: res.data, isLoading: false})
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
            <DataTable/>
          </CustomLayout>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  isLoading: state.isLoading
});
export default connect(mapStateToProps)(App);
