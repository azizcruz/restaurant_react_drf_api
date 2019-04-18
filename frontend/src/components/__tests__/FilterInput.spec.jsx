import React from "react";
import { create } from "react-test-renderer";
import FilterInput from "../FilterInput";

describe("FilterInput component", () => {
    test("it matches the snapshot", () => {
      const component = create(<FilterInput />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });