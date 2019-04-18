import React from "react";
import { create } from "react-test-renderer";
import DataTable from "../DataTable";

describe("DataTable component", () => {
    test("it matches the snapshot", () => {
      const component = create(<DataTable />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });


  describe("Datatable component", () => {
    it("shows a list of users", async () => {
      const component = create(<DataTable />);
      const instance = component.getInstance();
      expect(instance.state.filteredInfo).toBe(null)
      expect(instance.state.sortedInfo).toBe(null)
    });
  });