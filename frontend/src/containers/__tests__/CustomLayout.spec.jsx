import React from "react";
import { create } from "react-test-renderer";
import CustomLayout from "../CustomLayout";

describe("CustomLayout component", () => {
    test("it matches the snapshot", () => {
      const component = create(<CustomLayout />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });