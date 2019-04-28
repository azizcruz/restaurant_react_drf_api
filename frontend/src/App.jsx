import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css";
import "antd/dist/antd.css";
import CustomLayout from "./containers/CustomLayout";
import DataTable from "./components/DataTable";
import FilterInput from "./components/FilterInput";
import Error from "./components/Error"
import axios from "axios";
import { connect } from "react-redux";

class App extends Component {

  fetchData = (filter = false, filterBy = "") => {
    let endpoint = "/api/dishes";
    if (filter) {
      // Send a dispatch to start loading.
      this.props.dispatch({ type: "HANDLE_LOADING", isLoading: true });
      endpoint = `/api/dishes?filter=${filter}&name=${filterBy}`;
    }
    axios
      .get(endpoint)
      .then(res => {
        // Send a dispatch to add the returned data to the single source of data.
        this.props.dispatch({ type: "ADD_DATA", fetched_data: res.data, isLoading: false })
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
        <BrowserRouter>
          <div>
            <CustomLayout>
              {/* fetchData(filter_state, filter_by) */}
              <FilterInput onFilter={value => this.fetchData(true, value)} />
              <Switch>
                <Route path="/" component={DataTable} exact />
                <Route component={ Error } />>
              </Switch>
            </CustomLayout>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  isLoading: state.isLoading
});
export default connect(mapStateToProps)(App);
