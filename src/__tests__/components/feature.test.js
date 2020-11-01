import React from "react";
import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
  let container, getByText;

  beforeEach(() => {
    const queries = render(
      <Feature>
        <Feature.Title>Films, TV programms and more</Feature.Title>
        <Feature.SubTitle>Watch anywhere</Feature.SubTitle>
      </Feature>
    );
    container = queries.container;
    getByText = queries.getByText;
  });

  it("renders <Feature /> component with populated data", () => {
    expect(getByText("Films, TV programms and more")).toBeTruthy();
    expect(getByText("Watch anywhere")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
